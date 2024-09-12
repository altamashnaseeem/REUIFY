import { UseAppContext } from '@/app/ContextApi'
import { AddOutlined, Category, Close, Delete, DragIndicatorRounded, EditRounded, KeyboardArrowDownRounded, SearchRounded } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import React from 'react'
import { EmptyProjectPlaceHolder } from './AllProjects';
import { Project } from '@/app/allData';
import { TextToIcon } from '@/app/utils/textToIcon';
function AllProjectsWindow() {
    const {openAllProjectsWindowObject:{openAllProjectsWindow},
   
}=UseAppContext();
   
  return (
    <div
    style={{display:openAllProjectsWindow?"block":"none"}}
    className='w-[70%] max-sm:w-[90%] p-9 border border-slate-50 h-[82%] bg-white rounded-xl shadow-md absolute left-1/2 top-8 -translate-x-1/2 z-50'
    >
     <Header/> 
     <SearchBar/>
      <SortByComponent/>
      <ProjectsList/>
    </div>
  )
}
function Header(){
    const {menuItemsObject:{menuItems,setMenuItems},
    openAllProjectsWindowObject:{openAllProjectsWindow,setOpenAllProjectsWindow}
}=UseAppContext();

  function closeTheWindow(){
    // set the isSelected of the first menu item to true and others to false
      setMenuItems((prevMenuItems)=>
    prevMenuItems.map((prevMenuItem)=>({
        ...prevMenuItem,
        isSelected:prevMenuItem.id ===menuItems[0].id,

    }))
    );
    setOpenAllProjectsWindow(false)
  }
    return(
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
            <div className='w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center'>
                <Category sx={{fontSize:17}} className='text-sky-400 text-[17px]'/>
            </div>
            <span className='text-xl font-bold'>All Projects</span>
            </div>
              <div>
                <Close onClick={closeTheWindow} sx={{fontSize:16}} className='text-slate-400 cursor-pointer'/>
              </div>
        </div>

    )
}
function SearchBar(){
    return (
        <div className='flex gap-5 items-center justify-between mt-12 relative'>
            <div className={`h-[42px] bg-slate-50 flex items-center text-sm rounded-md pl-3 gap-1 w-[85%]`}>
                <SearchRounded className='text-slate-400'/>
                <input placeholder='Search a Project...' className='bg-transparent outline-none w-full font-light'/>
            </div>
            <button className='bg-sky-500 ml-2 p-[10px] flex w-[15%] text-sm rounded-md text-white items-center justify-center max-lg:w-[25%]'>
                <AddOutlined sx={{fontSize:17}}
                
                />
                <span className='max-md:hidden'>Create New</span>
            </button>
        </div>
    )
}
function SortByComponent(){
    const {allProjectsObject:{allProjects}}=UseAppContext();

   return (
    <div className='mt-11 mb-[13px] flex gap-2 items-center justify-between text-[13px]'>
        <div className='flex gap-1'>
            <span className='text-slate-400'>You have</span>
            <span className='text-sky-500 font-semibold'>{allProjects.length}</span>
            <span className='text-slate-400'>projects</span>
        </div>
        <div className='flex gap-2 items-center'>
            <span className='text-slate-400'>Sort By:</span>
            <div className='text-sky-500 flex gap-1 items-center'>
                <span>Name</span>
                <KeyboardArrowDownRounded className='text-[13px]'/>
            </div>
        </div>
    </div>
   )
}
function ProjectsList(){
    const {allProjectsObject:{allProjects},
        isLoadingObject:{isLoading}
}=UseAppContext();

    return (
     <div className='w-full bg-slate-50 h-[64%] rounded-lg p-3 flex flex-col gap-3'>
        {isLoading && (
            <div className='flex flex-col gap-3 justify-center items-center items-center w-full mt-28'>
                <CircularProgress value={100}/>
                <span className='text-slate-400 text-sm'>Loading...</span>
            </div>
        )}
        {allProjects.length===0 && !isLoading ?
         (<EmptyProjectPlaceHolder/>):
        ( <>
          {allProjects.map((project,index)=>(
            <SingleProject key={index} project={project}/>
          ))}
         </> )  
    }
     </div>
    )
}



function SingleProject({project}:{project:Project}){
    return (
        <div className='w-full bg-white rounded-md flex gap-3 items-center justify-between p-3'>
            <div className='flex gap-3 items-center'>
                <DragIndicatorRounded className='text-slate-400'/>
                {/* project icon */}
                <div>
                    <div className='w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center'>
                     {TextToIcon(
                        {
                            text:project.icon,
                            fontSize:17,
                            className:"text-sky-400 text-[17px]"
                        }
                     )}
                    </div>
                </div>
                {/* project name */}
                <div className='flex flex-col '>
                    <span className='font-bold'>{project.name}</span>
                    <span className='text-slate-400 text-[12px]'>{project.components.length}</span>
                </div>
            </div>
            {/* Action Buttons */}
          <div className='flex gap-2 items-center'>
            <div className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'>
                <EditRounded className='text-slate-400' sx={{fontSize:15}}/>
            </div>
            <div className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'>
                <Delete className='text-slate-400' sx={{fontSize:15}}/>
            </div>
          </div>
        </div>
    )
}
export default AllProjectsWindow
