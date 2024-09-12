import { UseAppContext } from '@/app/ContextApi'
import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete"
import CloseIcon from "@mui/icons-material/Close"
import { Component, Project } from '@/app/allData';
import toast from 'react-hot-toast';
function DeleteWindow() {
    const {openDeleteWindowObject:{openDeleteWindow,setOpenDeleteWindow},
          selectedProjectObject:{selectedProject,setSelectedProject},
          selectedComponentObject:{selectedComponent},
          allProjectsObject:{allProjects,setAllProjects}
}=UseAppContext();
function deleteComponentFunction(){
  // delete all component from selectedProject
  

  try{
    if(selectedProject){
      const updatedSelectedProject={
        ...selectedProject,
        components:selectedProject.components.filter(
          (component:Component)=>component._id!== selectedComponent?._id
        )
      }
      
      setSelectedProject(updatedSelectedProject);

    }
    // Delete COmponent from allProjects
    const updatedAllProjects=allProjects.map((project:Project)=>{
      if(project._id === selectedProject?._id){
        return {
          ...project,
          components:project.components.filter(
            (component:Component)=> component._id!== selectedComponent?._id
          )
        }
      }
      return project;

    });
    
    setAllProjects(updatedAllProjects);
    
    setOpenDeleteWindow(false);
    toast.success("Component deleted successfully");
  }catch(error){
    toast.error("Something went wrong");

  }
}

  return (
    <div
    style={{visibility:openDeleteWindow?"visible":"hidden"}}
    className='w-[40%] max-sm:w-[90%] fixed top-1/2 left-1/2 p-8 px-9 border border-slate-100 bg-white shadow-md transform -translate-x-1/2 -translate-y-1/2 z-50'
    >
     {/* header icon */} 
     <div className='flex justify-between items-start'>
        <div className='w-[42px] h-[42px] bg-red-200 rounded-full flex items-center justify-center'>
        <DeleteIcon className='text-red-500 text-[24px]'/>
        </div>
        <CloseIcon 
        onClick={()=>setOpenDeleteWindow(false)}
        sx={{fontSize:18}}
        className='text-slate-400 text-[18px] cursor-pointer' 
        />
     </div>
      {/* Message */}
      <div className='flex flex-col mt-7'>
        {/* main message */}
        <span className='font-bold'>permanently delete this component?</span>
        {/* second  message */}
        <span className='text-slate-400 text-[13px] mt-2'>Are you sure you want to permanently delete this component?</span>

      </div>
      {/* Button */}
      <div className='flex justify-end gap-4 mt-9 mb-2 text-[12px]'>
        <button
        onClick={()=>setOpenDeleteWindow(false)}
        className='px-4 py-2 text-slate-500 border border-slate-200 rounded-md hover:bg-slate-200'
        >
            Cancel
        </button>
        <button
        onClick={deleteComponentFunction}

        className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
        >
            Delete Component

        </button>
      </div>
    </div>
  )
}

export default DeleteWindow
