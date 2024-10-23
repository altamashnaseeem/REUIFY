
import { UseAppContext } from '@/app/ContextApi';
import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { MdLandslide } from "react-icons/md";
import { Project } from '@/app/allData';
import { TextToIcon } from '@/app/utils/textToIcon';
import CircularProgress from '@mui/material/CircularProgress';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { SettingsInputCompositeRounded } from '@mui/icons-material';
import {motion} from "framer-motion"
function AllProjects() {
  const {allProjectsObject:{allProjects,setAllProjects},
        isLoadingObject:{isLoading},
        openProjectWindowObject:{openProjectWindow,setOpenProjectWindow},
        showComponentPageObject:{setShowComponentPage},
        openAllProjectsWindowObject:{setOpenAllProjectsWindow},
        darkThemeObject:{darkTheme}
}=UseAppContext()
  
  return (
    <div className={`${darkTheme?"bg-slate-900":"bg-white"} w-full p-8 rounded-lg mt-4`}>
      <span className='text-lg flex gap-2 justify-between items-center '>
        <div className='flex gap-4 items-center'>
            <span className={`${darkTheme?"text-slate-200":"text-slate-900"} font-semibold text-lg`}>All Projects</span>
             <span 
             onClick={()=>setOpenAllProjectsWindow(true)}
             className='text-[14px] bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent cursor-pointer '>More</span>
        </div>
        {!isLoading && allProjects.length > 0 && (
          <motion.div whileHover={{scale:1.1}}>
          <button onClick={()=>setOpenProjectWindow(true)} className={`bg-gradient-to-r from-teal-400 to-blue-500 text-white text-[12px] px-3 py-[2px] rounded-md flex items-center gap-1`}>
          <IoAddOutline fontSize="medium" />
          <span className='text-[13px] max-sm:hidden'>New Project</span>
          </button>
          </motion.div>
        )}
      </span>

      {
        isLoading && (
          <div className='flex flex-col gap-3 justify-center items-center w-full mt-16'>
                 <CircularProgress value={100} />
                 <span className='text-slate-400 text-sm'>Loading...</span>
          </div>
        )
      }

       {
        !isLoading && allProjects.length === 0 ?(
            <EmptyProjectPlaceHolder/>
        ):(
          <div className='flex flex-wrap gap-4 mt-7 mb-2 max-sm:grid-cols-1'>
              {allProjects?.slice(0,10).map((project,index)=>(
                <div key={index}
                
                >
                  <SingleProject singleProject={project}/>
                </div>
              ))}
       </div>
        )
       }
    </div>
  )

}

function SingleProject({singleProject}:{singleProject:Project}){
  const{showComponentPageObject:{setShowComponentPage},
    selectedProjectObject:{selectedProject,setSelectedProject},
    darkThemeObject:{darkTheme}
    
}=UseAppContext();
  
  function projectClicked(){
    setShowComponentPage(true);
    setSelectedProject(singleProject);
    
    
  }
    return(
        <motion.div whileHover={{scale:1.1}} onClick={projectClicked} className={`w-[200px] border ${darkTheme?"border-slate-800":"border-slate-100"} rounded-md p-5 flex gap-2 justify-center flex-col items-center max-sm:w-full cursor-pointer`}>
      {/* the icon */}
       <div className={`w-[70px] h-[70px] ${darkTheme?"bg-slate-950":"bg-sky-100"} rounded-full flex items-center justify-center`}>
        {TextToIcon({text:singleProject.icon,size:"medium"})}
       </div>
         {/* name and component count */}
         <div className='flex flex-col items-center justify-center'>
            <span onClick={projectClicked} className={`font-semibold text-lg cursor-pointer ${darkTheme?"text-slate-200":"text-slate-900"} hover:text-sky-500 select-none`}>
                {singleProject.name}
            </span>
            <span className='text-[12px] text-slate-400 text-center'>
                {singleProject.components.length} Components
            </span>
         </div>
        </motion.div>
    )
}
export default AllProjects

export function EmptyProjectPlaceHolder(){
  const {openProjectWindowObject:{setOpenProjectWindow}}=UseAppContext();
  return (
      <div className='p-1 gap-5 flex flex-col justify-center h-[200px] mt-[68px] mb-[34px] items-center'>
         <AddModeratorIcon
         sx={{fontSize:80}}
         className='text-[70px] text-slate-200'
          />
          <div className=''>
            <h3 className='font-semibold text-[15px] mb-1 text-center'>There are no projects Yet...</h3>
            <p className='text-gray-400 w-52 text-center text-[13px]'>
              Please Click below to add your first project.
            </p>
          </div>
          <button 
          onClick={()=>setOpenProjectWindow(true)}
          className='bg-sky-500 p-2 rounded-md text-white text-center text-[12px] px-7'>
            Add New Project
          </button>
      </div>
  )
}
