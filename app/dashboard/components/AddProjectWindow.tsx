
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
export default function AddProjectWindow({
    selectedIcon
}:{
    selectedIcon:{
        icon:ReactNode;
        name:string;

    }
}){
    const {isMobileViewObject:{isMobileView},
        openProjectWindowObject:{openProjectWindow,setOpenProjectWindow},
        openIconWindowObject:{openIconWindow,setOpenIconWindow},
        allProjectsObject:{allProjects,setAllProjects},

}=UseAppContext()
const [errorMessage,setErrorMessage]=useState<string>("");
const [projectName,setProjectName]=useState<string>("");
const {user} =useUser();

const inputRef=useRef<HTMLInputElement>(null);
useEffect(()=>{
    inputRef.current?.focus()
    setErrorMessage("");
    
},[openProjectWindow])
 function handleInputUpdate(e:React.ChangeEvent<HTMLInputElement>){

      // empty the error message
      setErrorMessage("");
      //update project name
      setProjectName(e.target.value);

      
 };
 function addNewProject(){
    // check if the project name is not empty
    
    if(projectName.trim()===""){
        setErrorMessage("Project name cannot be empty");
        inputRef.current?.focus();
        return ;
    }

    if(allProjects.find((project)=>
    project.name.toLocaleLowerCase()===projectName.toLocaleLowerCase()
    )){
        setErrorMessage("Project name already exists");
        inputRef.current?.focus();
        return;
        
    }
    //adding new project to allProjects state
    //creating a new project object
    const newProject:Project={
        _id:uuidv4(),
        clerkUserId:user?.id as string,
        name:projectName,
        icon:selectedIcon.name,
        createdAt:new Date().toISOString(),
        components:[]


    };
    
    //adding new project to allprojects
    try{
        setAllProjects([...allProjects,newProject]);
        toast.success("Project added successfully");
        setOpenProjectWindow(false);
        console.log("all project",newProject)

    }catch(error){
        toast.error("Failed to add project");

    }

 }
    return (
       <div className={`${isMobileView ? "w-[80%]":"w-[40%]"} h-[288px] border border-slate-50 bg-white rounded-md shadow-md ${openProjectWindow?"absolute":"hidden"} left-1/2 top-24 -translate-x-1/2 z-50`}>
        <div className="flex justify-between items-center pt-7 px-7">
            <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
                    <CategoryIcon 
                     sx={{fontSize:17}}
                     className="text-sky-400 text-[12px]"
                    />

                </div>
                <span className="font-semibold text-lg">New Project</span>
            </div>
            <CloseIcon 
             onClick={()=>setOpenProjectWindow(false)}
             sx={{fontSize:16}}
             className="text-slate-400 text-[18px] cursor-pointer"
            />
        </div>

        <div className="flex flex-col gap-2 mt-11 px-7">
            <span className="text-[13px] font-medium">Project Name</span>
            <div className="flex gap-3">
                 
                <input 
                  value={projectName}
                  onChange={handleInputUpdate}
                  placeholder="Enter Category Name..."
                  ref={inputRef}
                  className="p-[10px] text-[12px] w-full rounded-md border outline-none"
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
            <button onClick={()=>setOpenProjectWindow(false)} className="border border-slate-200 text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 transition-all hover:bg-slate-50">
                   Cancel
            </button>
           <button  
           onClick={addNewProject}
           className="bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 px-3 rounded-md transition-all ">
               Add a Project
           </button>
          </div>
       </div>
    )
}