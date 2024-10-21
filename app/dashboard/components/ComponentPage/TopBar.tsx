import { UseAppContext } from '@/app/ContextApi'
import React, { useEffect, useRef } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import SearchIcon from "@mui/icons-material/Search"
import { AddOutlined } from '@mui/icons-material';
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import {motion} from "framer-motion"
function TopBar({searchInput,setSearchInput}:{
  searchInput:string;
  setSearchInput:React.Dispatch<React.SetStateAction<string>>;

}) {
    const {showComponentPageObject:{showComponentPage,setShowComponentPage},
 showSideBarObject:{setShowSideBar,},
 selectedProjectObject:{selectedProject,setSelectedProject},
 openComponentEditorObject:{openComponentEditor,setOpenComponentEditor},
 mainSearchQueryObject:{mainSearchQuery,setMainSearchQuery},
 darkThemeObject:{darkTheme}
 
}=UseAppContext();
const inputRef=useRef<HTMLInputElement>(null) ;
useEffect(()=>{
  if(inputRef.current){
    inputRef.current.focus();
  }
},[showComponentPage]) ;
useEffect(()=>{
  if(showComponentPage && mainSearchQuery !== ""){
    setSearchInput(mainSearchQuery);

  }
},[showComponentPage]);


  return (
    <div className={`flex justify-between items-center gap-4 ${darkTheme?"bg-slate-900":"bg-white"} p-3 px-4 rounded-lg`}>
       <div className='flex gap-5 items-center '>
        <div 
        onClick={()=>{
          setShowComponentPage(false);
          setMainSearchQuery("");
          setSelectedProject(null);
        }}
        className=' mt-[2px] p-[2px] text-slate-400 flex h-7 gap-1 px-2 items-center justify-center rounded-md cursor-pointer'
        >
       <ArrowBackIcon sx={{fontSize:11}} className="text-[11px]"/>
       <span className='max-sm:hidden'>Back</span>
        </div>
    {/* category title and icon  */}
    <div className='flex gap-2 items-center '>
        <div className='flex flex-col items-center gap-1'>
            <span className={` ${darkTheme?"text-slate-200":"text-slate-900"} font-semibold text-xl`}>{selectedProject?.name}</span>
            <span className={` ${darkTheme?"text-sky-400 bg-slate-700":"bg-sky-100"} text-sky-400 text-center  w-[20px] rounded-sm text-[11px] shadow-sm`}>{selectedProject?.components.length}</span>
        </div>
    </div>
       </div>
       {/* Search Bar */}
       <div className={`relative p-[8px] text-[13px] w-[34%] flex px-[15px] h-13 rounded-3xl ${darkTheme?"bg-slate-950":"bg-slate-100"} items-center gap-1`}>
        <SearchIcon 
        className="text-slate-400 text-[19px]"
        />
        <input
        value={searchInput}
        ref={inputRef}
        onChange={(e)=>setSearchInput(e.target.value)}
        placeholder='Search a component...'
        className= {` ${darkTheme?"bg-slate-950 text-slate-200":"bg-slate-100"} outline-none font-light text-[12px] w-full`}
        />
         {/* class Icon */}
         <div className='absolute right-2 top-[10px] cursor-pointer w-5 h-5 flex justify-center items-center  '>
            <CloseIcon 
            sx={{fontSize:14}}
            className="text-slate-400 text-[14px]"
            />
         </div>
       </div>

       {/* Add component button */}
       <div className='flex gap-2 items-center '>
        {selectedProject!==undefined && 
        selectedProject!==null &&
        selectedProject.components?.length >0 && (
          <motion.div whileHover={{scale:1.1}}>
          <button 
          onClick={()=>setOpenComponentEditor(true)}
          className='bg-gradient-to-r from-teal-400 to-blue-500 text-[12px] h-[33px] text-white px-3 rounded-md hover:bg-sky-300'>
            <AddOutlined sx={{fontSize:16}} className=''/>
            <span className='max-sm:hidden'>Component</span>
        </button>
        </motion.div>
        )
        }
        <div className='hidden max-sm:block'>
            <MenuIcon onClick={()=>setShowSideBar(true)} className="text-slate-500 cursor-pointer"/>


        </div>
       </div>
    </div>
  )
}

export default TopBar
