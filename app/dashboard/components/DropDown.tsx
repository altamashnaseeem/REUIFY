import { Component, Project } from '@/app/allData';
import { UseAppContext } from '@/app/ContextApi'
import { ContentCopy, DeleteOutline, EditOutlined } from '@mui/icons-material'
import React, { useEffect,useRef} from 'react'
import {v4 as uuidv4} from "uuid"
import AllProjects from './AllProjects';
import toast from 'react-hot-toast';
function DropDown() {
    const {dropDownPositionObject:{dropDownPosition},
       openDropDownObject:{openDropDown,setOpenDropDown},
       openDeleteWindowObject:{openDeleteWindow,setOpenDeleteWindow},
       selectedComponentObject:{selectedComponent,setSelectedComponent},
       selectedProjectObject:{selectedProject,setSelectedProject},
       allProjectsObject:{allProjects,setAllProjects},
       openComponentEditorObject:{openComponentEditor,setOpenComponentEditor},
       darkThemeObject:{darkTheme}
}=UseAppContext();
const dropDownRef=useRef<HTMLDivElement>(null);
useEffect(()=>{
    function handleClickOutside(event:MouseEvent){
        if(dropDownRef.current && !dropDownRef.current.contains(event.target as Node)){
            setOpenDropDown(false);
            if(openDeleteWindow){
                setSelectedComponent(null);
            }
        }

    }
    function handleScroll(){
        setOpenDropDown(false);
        setSelectedComponent(null)

    }
    function handleWheel(event:WheelEvent){
        if(event.deltaY !==0){
            setOpenDropDown(false);
            setSelectedComponent(null)

        }
    }
    document.addEventListener("mousedown",handleClickOutside);
    window.addEventListener("scroll",handleScroll);
    window.addEventListener("wheel",handleWheel,{passive:true});
    return ()=>{
        document.removeEventListener("mousedown",handleClickOutside);
    window.removeEventListener("scroll",handleScroll);
    window.removeEventListener("wheel",handleWheel); 
    }
},[setOpenDropDown]);
// make sure that the selected component is null when the dropdown is closed and component editor is closed
useEffect(()=>{
    if(openDropDown===false){
        if(!openDeleteWindow){
            if(!openComponentEditor){
                setSelectedComponent(null);
        
                }
        }
       
    }
},[openDropDown]);


function deleteComponentFunction(){
    setOpenDeleteWindow(true)
    setOpenDropDown(false);
    
}

async function duplicateComponentFunction(){
    if (selectedComponent && selectedProject) {
      try {
        // create a new component object with a new id & a new name based on the selected component
        const newComponentObject = {
          ...selectedComponent,
          _id: uuidv4(),
          name: `${selectedComponent.name} Copied`,
          createdAt: new Date().toISOString(),
        };
  
        // Send a request to update the selected project in the database
        const response = await fetch(`/api/projects?projectId=${selectedProject._id}&action=addComponent`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action:"addComponent",
            component: newComponentObject,

          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Update the selected project in the frontend state
          const updatedSelectedProject = {
            ...selectedProject,
            components: data.project.components,
          };
  
          // Sort components by createdAt
          updatedSelectedProject.components.sort((a:any, b:any) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });
  
          setSelectedProject(updatedSelectedProject);
  
          // Update the allProjects state
          const updatedAllProjects = allProjects.map((project) =>
            project._id === selectedProject._id ? updatedSelectedProject : project
          );
          setAllProjects(updatedAllProjects);
  
          toast.success("Component has been duplicated successfully");
        } else {
          toast.error(data.message || "Failed to duplicate component");
        }
      } catch (error) {
        toast.error("Failed to duplicate component");
      }
    }
  }
  

  return (
    <div
    ref={dropDownRef}
    style={{
        top:dropDownPosition.top + 54,
        left:dropDownPosition.left - 135,
        visibility:openDropDown?"visible":"hidden",

    }}
    className={` ${darkTheme?"bg-slate-950":"bg-white border border-slate-50"} z-50 px-5  fixed py-4 w-[150px] select-none  shadow-md rounded-lg flex flex-col gap-5`}
>
    {/* Edit Icon */}
    <div 
    onClick={()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
        setOpenComponentEditor(true);
        setOpenDropDown(false);
        
    }}
    className={` ${darkTheme?"text-slate-400":"text-slate-600"} flex gap-1 items-center  cursor-pointer hover:text-sky-500`}>
        <EditOutlined sx={{fontSize:21}} className='text'/>
        <span className='text-[14px]'>Edit</span>
    </div>
    {/* Duplicate Icon */}
    <div 
    onClick={duplicateComponentFunction}
    className={` ${darkTheme?"text-slate-400":"text-slate-600"} flex gap-1 items-center  cursor-pointer hover:text-sky-500`}>
        <ContentCopy sx={{fontSize:21}} className='text-[21px]'/>
        <span className='text-[14px]'>Duplicate</span>
    </div>
    {/* Divider Line */}
    <hr className={`border-t ${darkTheme?"border-slate-500":"border-slate-200"}`}/>
    {/* RemoveIcon */}
    <div 
    onClick={deleteComponentFunction}
    className={` ${darkTheme?"text-slate-400":"text-slate-600"} flex gap-1 items-center  cursor-pointer hover:text-sky-500`}>
        <DeleteOutline sx={{fontSize:21}} className='text-[21px]'/>
        <span className='text-[14px]'>Delete</span>
    </div>
      
    </div>
  )
}

export default DropDown
