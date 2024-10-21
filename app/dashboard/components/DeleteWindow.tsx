import { UseAppContext } from '@/app/ContextApi'
import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete"
import CloseIcon from "@mui/icons-material/Close"
import { Component, Project } from '@/app/allData';
import toast from 'react-hot-toast';
function DeleteWindow() {
    const {openDeleteWindowObject:{openDeleteWindow,setOpenDeleteWindow},
          selectedProjectObject:{selectedProject,setSelectedProject},
          selectedComponentObject:{selectedComponent,setSelectedComponent},
          allProjectsObject:{allProjects,setAllProjects},
          openAllProjectsWindowObject:{openAllProjectsWindow},
          darkThemeObject:{darkTheme}
}=UseAppContext();
async function deleteProjectFunction(){
  if(!selectedProject?._id){
    toast.error("No project selected for deletion");
    return;
  }

  try {
    const response=await fetch(
      `/api/projects?projectId=${selectedProject._id}`,
      {
        method:"DELETE",
      }
    );
    if(!response.ok){
      const errorData=await response.json();
      throw new Error(errorData.message || "Failed to delete project")
    }
    const updatedAllProjects=allProjects.filter(
      (project:Project)=>project._id!==selectedProject._id
    );
    setAllProjects(updatedAllProjects);
    setOpenDeleteWindow(false);
    toast.success("Project deleted successfully");
  } catch (error) {
    console.error("Error deleting project:",error);
    toast.error(
      error instanceof Error ? error.message:"Something went wrong"
    );

  }
}
async function deleteComponentFunction(){
  // delete all component from selectedProject
  try {
    if(selectedProject && selectedComponent){
      const response=await fetch(
        `/api/projects?projectId=${selectedProject._id}&componentId=${selectedComponent._id}`,
        {
          method:"PUT",
          headers:{
            "Content-Type":"application/json",

          },
          body:JSON.stringify({
            action:"deleteComponent"
          }),

        }
      );
      if(!response.ok){
        throw new Error("Failed to delete component");
      }
      const updatedProject=await response.json();
      //update the state with updated project
      setSelectedProject(updatedProject.project);
      //delete component from allprojects
        const updatedAllProjects=allProjects.map((project:Project)=>{
      if(project._id === selectedProject._id){
        return {
          ...project,
          components:project.components.filter(
            (component:Component)=> component._id!== selectedComponent._id
          ),
        };
      }
      return project;

    });
    setAllProjects(updatedAllProjects);
    setSelectedComponent(null);
       setOpenDeleteWindow(false);
       toast.success("Component deleted successfully");
    }
  } catch (error) {
    console.error("Error deleting component:",error);
    toast.error(
      error instanceof Error ? error.message:"Something went wrong"
    );
  }


}

  return (
    <div
    style={{visibility:openDeleteWindow?"visible":"hidden"}}
    className={` ${darkTheme?"bg-slate-950":"border border-slate-100 bg-white"} w-[40%] max-sm:w-[90%] fixed top-1/2 left-1/2 p-8 px-9  shadow-md transform -translate-x-1/2 -translate-y-1/2 z-50`}
    >
     {/* header icon */} 
     <div className='flex justify-between items-start'>
        <div className={` ${darkTheme?"":""} w-[42px] h-[42px] bg-red-200 rounded-full flex items-center justify-center`}>
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
        <span className={` ${darkTheme?"text-slate-100":"text-slate-900"} font-semibold`}>
          Permanently delete this{" "}
          {openAllProjectsWindow ? "project":"component"}?
          
          </span>
        {/* second  message */}
        <span className={` ${darkTheme?"":""} text-slate-400 text-[13px] mt-2`}>Are you sure you want to permanently delete this{" "}

          {openAllProjectsWindow?"project":"component"}?
        </span>

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
        onClick={openAllProjectsWindow?deleteProjectFunction:deleteComponentFunction}

        className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
        >
            Delete{" "}
            {openAllProjectsWindow?"project":"component"}

        </button>
      </div>
    </div>
  )
}

export default DeleteWindow
