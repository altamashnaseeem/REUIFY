import React, { useRef, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PreviewIcon from "@mui/icons-material/Preview"
import CodeIcon from "@mui/icons-material/Code"
import { LiveProvider,LiveError,LivePreview } from 'react-live'
import SyntaxHighlighter from 'react-syntax-highlighter';

import { atelierSulphurpoolLight,atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { UseAppContext } from '@/app/ContextApi';
import { Component, Project } from '@/app/allData';
import Checkbox from '@mui/material/Checkbox';
import { ContactSupportOutlined } from '@mui/icons-material';
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import toast from 'react-hot-toast';

function AllComponents({searchInput}:{searchInput:string}) {
    const {selectedProjectObject:{selectedProject},
     

}=UseAppContext();
const filteredComponents=selectedProject?.components.filter(
    (component:Component)=>
      searchInput
        ? component.name.toLowerCase().includes(searchInput.toLowerCase())
        :true
);



  return (
    <div className='mt-10 flex flex-col gap-3'>
          
          {filteredComponents?.map(
          (component:Component,index:number)=>(
            <div key={index}>
                <SingleComponent component={component}/>
            </div>
          )
          )}
            </div>
  )}
function SingleComponent({component}:{component:Component}){


    const [tabMenu,setTabMenu]=useState([
        {
            id:1,
            icon:<PreviewIcon className="text-[19px]"/>,
            name:"Preview",
            isSelected:true,

        },
        {
            id:2,
            icon:<CodeIcon className="text-[19px]"/>,
            name:"Jsx",
            isSelected:false,

        }
    ])
    const {allProjectsObject:{allProjects,setAllProjects},
     selectedProjectObject:{setSelectedProject,selectedProject},
     openDropDownObject:{setOpenDropDown},
     dropDownPositionObject:{setDropDownPosition},
     selectedComponentObject:{setSelectedComponent},
     openComponentEditorObject:{openComponentEditor,setOpenComponentEditor},
     darkThemeObject:{darkTheme}
     
}=UseAppContext();
   const iconRef=useRef<HTMLDivElement>(null);
    function changeTabState(index:number){
        setTabMenu((prevTabMenu)=> {
            return prevTabMenu.map((singleItem,i)=>{
                return i===index
                ? {...singleItem,isSelected:true}
                :{...singleItem,isSelected:false}
            })
        })
    }
    const [copySuccess,setCopySuccess]=useState(false);
   
async function updateFavoriteState() {
  // Optimistic update: update the UI state immediately
  const updatedComponent = {
      ...component,
      isFavorite: !component.isFavorite,
  };

  // Update the UI immediately
  const newAllProjects = allProjects.map((project: Project) => {
      const updatedComponents = project.components.map((comp: Component) => {
          if (comp._id === component._id) {
              return {
                  ...comp,
                  isFavorite: !comp.isFavorite, // Toggle favorite immediately
              };
          }
          return comp;
      });

      return {
          ...project,
          components: updatedComponents,
      };
  });

  // Update selected project
  if (selectedProject) {
      const updatedSelectedProject = newAllProjects.find(
          (project: Project) => project._id === selectedProject._id
      );
      if (updatedSelectedProject) {
          setSelectedProject(updatedSelectedProject);
      }
  }

  setAllProjects(newAllProjects);

  try {
      // Now make the API call to persist the update in the database
      const response = await fetch(
          `/api/projects?projectId=${selectedProject?._id}&componentId=${updatedComponent._id}`,
          {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  action: "updateComponent",
                  component: updatedComponent,
              }),
          }
      );

      if (!response.ok) {
          throw new Error("Failed to update favorite state");
      }

      const updatedProject = await response.json();
      console.log("updatedProject:", updatedProject.project);
      
      // Optionally handle any additional success logic here
      toast.success("Favorite state updated successfully");
  } catch (error) {
      console.error("Error updating favorite state:", error);
      toast.error(
          error instanceof Error ? error.message : "Something went wrong"
      );
  }
}

    function openTheDropDown(event:React.MouseEvent){
        event.stopPropagation();
        if(iconRef.current){
            const rect=iconRef.current.getBoundingClientRect();
            const top=rect.top;
            const left=rect.left;

            // open the drop down
            setOpenDropDown(true);
            // update the dropdownPositon
            setDropDownPosition({top:top,left:left})
            setSelectedComponent(component)
        }
    }
 function openTheComponentEditor(){
    setSelectedComponent(component);
    setOpenComponentEditor(true);

 }   

function copyTheCode(code:string){
    //Copy the code to clipboard
    console.log('copu code')
    setCopySuccess(true);
    toast.success("Code has been copied to clipboard");
    setTimeout(()=>{
        navigator.clipboard.writeText(code);
        setCopySuccess(false)
    },1400);

}
const [expand,setExpand]=useState(false);
    return (
        <div className= {`${darkTheme?"bg-slate-900":"bg-white"} w-full rounded-lg p-8 pt-8 pb-10 mb-3`}>
            {/* Component Title */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <span 
                    onClick={openTheComponentEditor}
                    className={`font-semibold ${darkTheme?"text-slate-200":"text-slate-900"} text-[19px] cursor-pointer hover:text-sky-500`}>{component.name}</span>
                    <Checkbox
                    onChange={updateFavoriteState}
                    checked={component.isFavorite}
                    icon={ <FavoriteBorderIcon className="text-slate-500 text-[20px]"/> 
                    }
                    checkedIcon={<FavoriteIcon className="text-sky-500"/>}
                     
                    />
                
                </div>
                <div onClick={openTheDropDown} ref={iconRef}>
                <IconButton>
                    <MoreVertIcon className="text-slate-400 text-[20px]"/>
                </IconButton>
                </div>
            </div>
            {/* component preview and code Buttons */}
         <div className='flex gap-2 mt-8 text-[13px]'>
            {/* preview */}
            {tabMenu.map((item,index)=>(
                  <div
                  key={index}
                  onClick={()=>changeTabState(index)}
                  className={`flex gap-1 items-center cursor-pointer select-none text-slate-400 px-3 py-[4px] rounded-md ${item.isSelected?"bg-sky-500 text-white ":"hover:opacity-70 border border-slate-400"}`}
                  >
               {item.icon}
               <span className='mt-[2px]'>{item.name}</span>
                  </div>  
            ))}
         </div>
         {/* the component */}
         {tabMenu[0].isSelected ?(
            <div className={`w-full border ${darkTheme?"border-slate-600":"border-slate-200"} rounded-md  mt-6`}>
                <LiveProvider
                code={component.code}
                noInline={false}
                >
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <LiveError className="rounded-lg border-gray-200 p-4 text-red-600"/>
                     <LivePreview className={` ${darkTheme?"text-slate-400":"text-slate-600"} rounded-lg  border-gray-200 p-4`}></LivePreview>
                 </div>
                </LiveProvider> 
            </div>
         ):(
            <div className={` ${darkTheme?"border-slate-600":"border"}  rounded-md mt-6 w-full relative`}>
                <div onClick={()=>copyTheCode(component.code)} className='absolute top-4 right-4  rounded-full bg-slate-200'>
                <IconButton />
                    {!copySuccess ?(
                        <ContentCopyIcon sx={{fontSize:16}}/>
                    ):(
                        <DoneAllIcon sx={{fontSize:16}}/>
                    )}
                    <IconButton/>
              </div>
              <SyntaxHighlighter
           language={"javascript"}
           style={darkTheme ? atomOneDark : atelierSulphurpoolLight}
           wrapLines={true}
           wrapLongLines={true}
           onClick={()=>setExpand(!expand)}
           className="cursor-pointer"
           >
            {expand?component.code:truncateString(component.code,600)}
            
           </SyntaxHighlighter>
            
            </div>
         )}
        </div>
    )
}

export default AllComponents
function truncateString(str:string,num:number){
if(str.length <=num){
    return str;
}
return str.slice(0,num) + "..."
}