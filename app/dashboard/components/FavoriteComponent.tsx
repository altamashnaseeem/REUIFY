import React from 'react'
import { MdVisibility } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { UseAppContext } from '@/app/ContextApi';
import { Component } from '@/app/allData';
import { CircularProgress } from '@mui/material';
import AllProjects from './AllProjects';
function FavoriteComponent() {
  const {allFavoriteComponentsObject:{allFavoriteComponents},
        isLoadingObject:{isLoading},
        
}=UseAppContext();

  return (
    <div className='bg-white w-full p-8 rounded-lg mt-4'>
        {/* Main Header */}
        <div className='flex justify-between'>
            <span className='font-bold text-lg'>Favorite Components</span>
      
            {/* Button */}
             
            <button className='bg-sky-500 flex gap-2 items-center text-white text-[12px] p-2 px-3 rounded-md'>
            <MdVisibility fontSize="medium"/>
            <span className='max-sm:hidden'>View All</span>
            </button>
        </div>
      
      <div className='grid grid-cols-4 mt-6 mb-4 text-sm items-center text-slate-400 px-4 max-sm:grid-cols-2 '>
        <span className=''>Component name</span>
        <span className='max-sm:hidden'>Created At</span>
        <span className='max-sm:hidden'>Project</span>
        <span className=''>Actions</span>
      </div>
      {isLoading && (
        <div className='flex flex-col gap-3 justify-center items-center w-full mt-[70px] mb-7'>
          <CircularProgress value={100}/>
          <span className='text-slate-400 text-sm'>Loading...</span>
        </div>
      )}
      {
        !isLoading && allFavoriteComponents.length === 0 ?(
           <div className='flex justify-center items-center mt-[70px] mb-8 text-slate-400 text-sm'>
            No favorite components yet...
           </div>
        ):(
          <div className='px-4 flex flex-col gap-1 mt-1'>
          {allFavoriteComponents.slice(0,5).map((component,index) =>(
            <div key={index}>
              <SingleFavoriteComponent component={component}/>
            </div>
          ))}     
     </div>
        )
      }
    </div>
  )
}

function SingleFavoriteComponent({component}:{component:Component}){
  const {openComponentEditorObject:{openComponentEditor,setOpenComponentEditor},
      selectedComponentObject:{selectedComponent,setSelectedComponent},
      allProjectsObject:{allProjects,setAllProjects},
      selectedProjectObject:{selectedProject,setSelectedProject},
      openDeleteWindowObject:{setOpenDeleteWindow}
}=UseAppContext();

  function favoriteComponentOpen(){
    setOpenComponentEditor(true);
    setSelectedComponent(component);
    // Get the project and set it in the selectedProject state
    const project=allProjects.find((project)=>
    project.name.toLowerCase()===component.projectName.toLowerCase()
    ) ;
    if(project){
      setSelectedProject(project);
    }else{
      console.error(`Project not found for component: ${component.name}`)
    }
    //window to the top of the page or to the component editor
    window.scrollTo({top:0,behavior:"smooth"})

  }
  function DeleteFavoriteComponent(){
    const project=allProjects.find((project)=> 
      project.name.toLowerCase()===component.projectName.toLowerCase());
    if(project){
      setSelectedProject(project);

    }else{ 
      console.error(`Project not found for component: ${component.name}`);

    }
   setSelectedComponent(component);
   setOpenDeleteWindow(true);


  }
    return (
        <div className='grid grid-cols-4 gap-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2'>
            <span 
            onClick={favoriteComponentOpen}
            className='hover:text-sky-500 cursor-pointer'>{component.name}</span>
            <span className='max-sm:hidden'>{component.createdAt}</span>
            
            <span className='justify-self-start max-sm:hidden'>
                <span className='inline-block rounded-2xl bg-sky-500 text-white text-[12px] px-4 py-1 whitespace-nowrap'>
                    {component.projectName}
                </span>
            </span>
            <div className='flex gap-2'>
             <div 
             onClick={favoriteComponentOpen}
             className='bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer'>
             <FaEdit fontSize="medium" className='text-white text-[13px]' />
             </div>
             <div 
             onClick={DeleteFavoriteComponent}
             className='bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer'>
             <MdDelete fontSize="medium" className='text-white text-[13px]' />
             </div>
            </div>
        </div>
    )
}

export default FavoriteComponent
