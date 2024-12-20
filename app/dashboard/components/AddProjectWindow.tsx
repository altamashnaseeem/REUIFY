
import { Project } from "@/app/allData";
import { UseAppContext } from "@/app/ContextApi";
 import { v4 as uuidv4 } from "uuid";
import { IceSkatingOutlined } from "@mui/icons-material";
import CategoryIcon from "@mui/icons-material/Category"
import CloseIcon from "@mui/icons-material/Close"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ReactNode, useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { TextToIcon } from "@/app/utils/textToIcon";
export default function AddProjectWindow({
    selectedIcon,
    setSelectedIcon,
}:{
    selectedIcon:{
        icon:ReactNode;
        name:string;

    };
    setSelectedIcon:React.Dispatch<React.SetStateAction<{
        icon:ReactNode;
        name:string;
    }>>
}){
    const {isMobileViewObject:{isMobileView},
        openProjectWindowObject:{openProjectWindow,setOpenProjectWindow},
        openIconWindowObject:{openIconWindow,setOpenIconWindow},
        allProjectsObject:{allProjects,setAllProjects},
        selectedProjectObject:{selectedProject,setSelectedProject},
        darkThemeObject:{darkTheme}

}=UseAppContext()
const [errorMessage,setErrorMessage]=useState<string>("");
const [projectName,setProjectName]=useState<string>("");
const {user} =useUser();

const inputRef=useRef<HTMLInputElement>(null);
useEffect(()=>{
    // if the selectedProject is not null ,it means we are going to create a new project
    if(!selectedProject){
        //reset the project name
        setProjectName("");
        //set the default icon 
        const iconObject={
            icon:TextToIcon({text:"CodeIcon",
                className:"text-white"
            }),
            name:"CodeIcon",

        };
        //update the selectedIcon
        setSelectedIcon(iconObject);

    }else{
        // update the input name when we want to edit the project
        setProjectName(selectedProject.name);
        const iconObject={
            icon:TextToIcon({
                text:selectedProject.icon,
                className:"text-white",
            }),
            name:selectedProject.icon,
        };
        setSelectedIcon(iconObject);

    }
    const focusInput=()=>{
        if(inputRef.current){
            inputRef.current.focus();

        }
    };
    //Schedule focus setting for the next render
    setTimeout(focusInput,0);
    setErrorMessage("");


},[openProjectWindow]);


 function handleInputUpdate(e:React.ChangeEvent<HTMLInputElement>){

      // empty the error message
      setErrorMessage("");
      //update project name
      setProjectName(e.target.value);

      
 };
 async function addNewProject(){
    // check if the project name is not empty
    
    if(projectName.trim()===""){
        setErrorMessage("Project name cannot be empty");
        inputRef.current?.focus();
        return ;
    }

    if(allProjects.find((project)=>
    project.name.toLowerCase()===projectName.toLowerCase()
    )){
        setErrorMessage("Project name already exists");
        inputRef.current?.focus();
        return;
        
    }
    //adding new project to allProjects state
    //creating a new project object
    const newProject={
        clerkUserId:user?.id as string,
        name:projectName,
        icon:selectedIcon.name,
        components:[],
    };
    
    //adding new project to allprojects
    try{
   const response=await fetch("/api/projects",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(newProject)
   });
   if(!response.ok){
    throw new Error("Failed to add project")
   }
  const addedProject=await response.json();
  // adding new project to allProjects
  setAllProjects([...allProjects,addedProject.project]);
  toast.success("Project added successfully")
  setOpenProjectWindow(false);

    }catch(error){
        console.error("Error adding project:",error);
        toast.error("Failed to add project")
        
    }

 }
 async function editTheProject(){
  // Check if the project name is not empty
  if(projectName.trim()===""){
    setErrorMessage("Project name cannot be empty");
    inputRef.current?.focus();
    return ;

  }
  if(!selectedProject){
    toast.error("No project selected for editing");
    return ;
  }
  try{
  const response=await fetch(`/api/projects?projectId=${selectedProject._id}`,

    {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name:projectName,
            icon:selectedIcon.name,
            clerkUserId:selectedProject.clerkUserId,

        }),

    }
  );
  if(!response.ok){
    const errorData=await response.json();
    throw new Error(errorData.message || "Failed ton update project");

  }
  const updatedProject=await response.json();
  const updateAllProjects=allProjects.map((singleProject)=>{
    return singleProject._id === selectedProject._id
    ? updatedProject.project
    : singleProject;
  })
  setAllProjects(updateAllProjects);
  setOpenProjectWindow(false);
  setSelectedProject(null);
  toast.success("Project has been updated successfully");

  }catch(error){
    console.error("Error updating project:",error);
      
    toast.error(
        error instanceof Error ? error.message:"Something went wrong!"
    )
  }
 }
    return (
       <div className={`${isMobileView ? "w-[80%]":"w-[40%]"} h-[288px] ${darkTheme?"bg-slate-950":"border border-slate-50 bg-white"} rounded-md shadow-md ${openProjectWindow?"fixed":"hidden"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50`}>
        <div className="flex justify-between items-center pt-7 px-7">
            <div className="flex items-center gap-2">
                <div className={`w-[30px] h-[30px] ${darkTheme?"bg-slate-800":"bg-sky-200"} rounded-full flex items-center justify-center`}>
                    <CategoryIcon 
                     sx={{fontSize:17}}
                     className={`${darkTheme?"text-sky-500":"text-sky-400"} text-[12px]`}
                    />

                </div>
                <span className={` ${darkTheme?"text-slate-200":"text-slate-900"} font-semibold text-lg`}>
                    {!selectedProject?"New Project":"Edit Project"}
                </span>
            </div>
            <CloseIcon 
             onClick={()=>{
                setOpenProjectWindow(false);
                setSelectedProject(null);
             }
                
                
             }
             sx={{fontSize:16}}
             className="text-slate-400 text-[18px] cursor-pointer"
            />
        </div>

        <div className="flex flex-col gap-2 mt-11 px-7">
            <span className={` ${darkTheme?"text-slate-400":"text-slate-600"} text-[13px] font-medium`}>Project Name</span>
            <div className="flex gap-3">
                 
                <input 
                  value={projectName}
                  onChange={handleInputUpdate}
                  placeholder="Enter Category Name..."
                  ref={inputRef}
                  className={`p-[10px] text-[12px] w-full rounded-md  outline-none ${darkTheme?"bg-slate-900 text-slate-400":"border"}`}
                />
                {/* Error Message */}
                <div className={`flex items-center gap-2 mt-2 ${errorMessage?"":"hidden"}`}>
                <ErrorOutlineIcon
                 sx={{fontSize:14}}
                 className="text-red-500"
                />
                   
                <span className="text-[12px] text-red-500 mt-[2px]">{errorMessage}</span>
              
                </div>
                <div onClick={()=>setOpenIconWindow(true)} className="w-12 h-10 text-white flex items-center justify-center bg-sky-500 rounded-lg cursor-pointer">
                    {selectedIcon?.icon}
                </div>
            </div>
        </div>
          {/* footer */}
          <div className="w-full mt-11 mb-10 flex gap-3 justify-end px-7 items-center">
            <button onClick={()=>{
                setOpenProjectWindow(false);
                setSelectedProject(null)
            }} className={`${darkTheme?"border border-slate-600 hover:opacity-50":"border border-slate-200 hover:bg-slate-50"} text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 transition-all `}>
                   Cancel
            </button>
           <button  
           onClick={selectedProject?editTheProject:addNewProject}
           className={`bg-gradient-to-r from-teal-400 to-blue-500 text-white  hover:opacity-80  text-[12px] p-2 px-3 rounded-md transition-all`}>
               {!selectedProject?"Add Project":"Edit Project"}
           </button>
          </div>
       </div>
    )
}