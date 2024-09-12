import React, { useRef, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PreviewIcon from "@mui/icons-material/Preview"
import CodeIcon from "@mui/icons-material/Code"
import { LiveProvider,LiveError,LivePreview } from 'react-live'
import SyntaxHighlighter from 'react-syntax-highlighter';

import { atelierSulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { UseAppContext } from '@/app/ContextApi';
import { Component, Project } from '@/app/allData';
import Checkbox from '@mui/material/Checkbox';
import { ContactSupportOutlined } from '@mui/icons-material';
function AllComponents() {
    const {selectedProjectObject:{selectedProject},
     

}=UseAppContext();
  


  return (
    <div className='mt-10 flex flex-col gap-3'>
          
          {selectedProject?.components.map(
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
     openComponentEditorObject:{openComponentEditor,setOpenComponentEditor}
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
    const [isFavorite,setIsFavorite]=useState(component.isFavorite);
    function updateFavoriteState(){
        
        const newAllProjects=allProjects.map((project:Project)=>{
            const updatedComponents=project.components.map((comp:Component)=>{
            
                if(comp._id===component._id){
                
                    return {
                        ...comp,
                        isFavorite:!comp.isFavorite,

                    };
              

                }
                
                return comp;

            });

         
            if(updatedComponents !== project.components){
                return {...project,components:updatedComponents};

            }
            return project;

        }) ;
        

        // update the components array in the selectedProject
        if(selectedProject){
            const updatedSelectedProject=newAllProjects.find(
                (project:Project)=>project._id===selectedProject._id
            );
            
            if(updatedSelectedProject){
                setSelectedProject(updatedSelectedProject)
                

            }
        }
        setAllProjects(newAllProjects);
        
     
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

    return (
        <div className='bg-white w-full rounded-lg p-8 pt-8 pb-10 mb-3'>
            {/* Component Title */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <span 
                    onClick={openTheComponentEditor}
                    className='font-bold text-[19px] cursor-pointer hover:text-sky-500 '>{component.name}</span>
                    <Checkbox
                    onChange={updateFavoriteState}
                    checked={component.isFavorite}
                    icon={ <FavoriteBorderIcon className="text-slate-400 text-[20px]"/> 
                    }
                    checkedIcon={<FavoriteIcon className="text-sky-300"/>}
                     
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
                  className={`flex gap-1 items-center cursor-pointer select-none text-slate-400 px-3 py-[4px] rounded-md ${item.isSelected?"bg-sky-500 text-white":"hover:bg-slate-100"}`}
                  >
               {item.icon}
               <span className='mt-[2px]'>{item.name}</span>
                  </div>  
            ))}
         </div>
         {/* the component */}
         {tabMenu[0].isSelected ?(
            <div className='w-full border rounded-md border-slate-200 mt-6'>
                <LiveProvider
                code={component.code}
                noInline={false}
                >
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <LiveError className="rounded-lg border-gray-200 p-4 text-red-600"/>
                     <LivePreview className="rounded-lg border-gray-200 p-4"></LivePreview>
                 </div>
                </LiveProvider>
            </div>
         ):(
            <div className='border rounded-md mt-6 w-full'>
           <SyntaxHighlighter
           language={"javascript"}
           style={atelierSulphurpoolLight}
           wrapLines={true}
           wrapLongLines={true}
           >
            {component.code}
           </SyntaxHighlighter>
            </div>
         )}
        </div>
    )
}

export default AllComponents
