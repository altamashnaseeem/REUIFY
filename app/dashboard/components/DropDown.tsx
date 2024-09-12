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
       openComponentEditorObject:{openComponentEditor,setOpenComponentEditor}
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
function duplicateComponentFunction(){
  if(selectedComponent && selectedProject){
     try{
        // create a new component object with a new id & a new name based on the selected component
        const newComponentObject:Component={
            ...selectedComponent,
            _id:uuidv4(),
            name:`${selectedComponent.name} Copied`,
            createdAt:new Date().toISOString(),

        };
        // add the new component to the selected project
        const updatedSelectedProject={
            ...selectedProject,
            components:[...selectedProject.components,newComponentObject]
        };
        // sort the component by created at
        updatedSelectedProject.components.sort((a,b)=>{
            return (
                new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()

            )
        });
        // update the selected project in the selectedProject state
           setSelectedProject(updatedSelectedProject);

        //    add a copy of the selected component in the allProjects state
        const updatedAllProjects=allProjects.map((project:Project)=>{
         if(project._id===selectedProject._id){
               return updatedSelectedProject;

         }
         return project;

        });
        setAllProjects(updatedAllProjects);
        toast.success("Component has been duplicated successfully");

        
     }catch(error){
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
    className='bg-white z-50 px-5 border border-slate-50 fixed py-4 w-[150px] select-none  shadow-md rounded-lg flex flex-col gap-5 '
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
    className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500'>
        <EditOutlined sx={{fontSize:21}} className='text'/>
        <span className='text-[14px]'>Edit</span>
    </div>
    {/* Duplicate Icon */}
    <div 
    onClick={duplicateComponentFunction}
    className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500'>
        <ContentCopy sx={{fontSize:21}} className='text-[21px]'/>
        <span className='text-[14px]'>Duplicate</span>
    </div>
    {/* Divider Line */}
    <hr className='border-t border-slate-200'/>
    {/* RemoveIcon */}
    <div 
    onClick={deleteComponentFunction}
    className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-red-500'>
        <DeleteOutline sx={{fontSize:21}} className='text-[21px]'/>
        <span className='text-[14px]'>Delete</span>
    </div>
      
    </div>
  )
}

export default DropDown
