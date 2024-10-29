import { UseAppContext } from '@/app/ContextApi'
import { AddOutlined, Category, Close, Delete, DragIndicatorRounded, EditRounded, FavoriteBorder, KeyboardArrowDownRounded, KeyboardArrowUpRounded, Search, SearchRounded } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { EmptyProjectPlaceHolder } from './AllProjects';
import { Project } from '@/app/allData';
import { TextToIcon } from '@/app/utils/textToIcon';
function AllProjectsWindow() {
    const {openAllProjectsWindowObject:{openAllProjectsWindow},
   darkThemeObject:{darkTheme}
}=UseAppContext();
   const [searchQuery,setSearchQuery]=useState("");

  return (
    <div
    style={{display:openAllProjectsWindow?"block":"none"}}
    className={`w-[70%] max-sm:w-[90%] p-9 max-h-[82%] ${darkTheme?"bg-slate-950":"bg-white border border-slate-50"} rounded-xl shadow-md absolute left-1/2 top-8 -translate-x-1/2 z-50`}
    >
     <Header/> 
     <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <SortByComponent/>
      <ProjectsList searchQuery={searchQuery}/>
    </div>
  )
}
function Header(){
    const {menuItemsObject:{menuItems,setMenuItems},
    openAllProjectsWindowObject:{openAllProjectsWindow,setOpenAllProjectsWindow},
    mainSearchQueryObject:{mainSearchQuery,setMainSearchQuery},
    darkThemeObject:{darkTheme}
}=UseAppContext();

  function closeTheWindow(){
    // set the isSelected of the first menu item to true and others to false
      setMenuItems((prevMenuItems)=>
    prevMenuItems.map((prevMenuItem)=>({
        ...prevMenuItem,
        isSelected:prevMenuItem.id ===menuItems[0].id,

    }))
    );
    setMainSearchQuery("");
    setOpenAllProjectsWindow(false);

  }
    return(
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
            <div className={`w-[30px] h-[30px] ${darkTheme?"bg-slate-800":"bg-sky-200"} rounded-full flex items-center justify-center`}>
                <Category sx={{fontSize:17}} className='text-sky-400 text-[17px]'/>
            </div>
            <span className={`text-xl font-semibold ${darkTheme?"text-slate-200":"text-slate-900"}`}>All Projects</span>
            </div>
              <div>
                <Close onClick={closeTheWindow} sx={{fontSize:16}} className='text-slate-400 cursor-pointer'/>
              </div>
        </div>

    ) 
}
function SearchBar({searchQuery,setSearchQuery}:{
    searchQuery:string;
    setSearchQuery:React.Dispatch<React.SetStateAction<string>>;

}){
const {openAllProjectsWindowObject:{openAllProjectsWindow,setOpenAllProjectsWindow},
  openProjectWindowObject:{openProjectWindow,setOpenProjectWindow},
  mainSearchQueryObject:{mainSearchQuery,setMainSearchQuery},
  darkThemeObject:{darkTheme}
  
}=UseAppContext();
const inputRef=useRef<HTMLInputElement>(null);
useEffect(()=>{
    // focus the input only when openAllProjectWindow opens true
    if(openAllProjectsWindow){
          const focusInput=()=>{
            if(inputRef.current){
                inputRef.current.focus();

            }
          };
          if(!openProjectWindow){
            //schedule focus setting for the next render
            setTimeout(focusInput,0);

          }
    }
    if(mainSearchQuery.trim().length > 0){
        setSearchQuery(mainSearchQuery)
    }
},[openAllProjectsWindow,openProjectWindow]);
const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchQuery(event.target.value);

}


    return (
        <div className='flex gap-5 items-center justify-between mt-12 relative'>
            <div className={`relative h-[42px] ${darkTheme?"bg-slate-800":"bg-slate-50"} flex items-center text-sm rounded-md pl-3 gap-1 w-[85%]`}>
                <SearchRounded className='text-slate-400'/>
                <input 
                ref={inputRef}
                value={searchQuery}
                onChange={handleChange}
                placeholder='Search a Project...' className='bg-transparent outline-none w-full text-slate-200 font-light'/>
                {/* Close icon */}
                
                {searchQuery.length>0 && (
                    <div
                    onClick={()=>setSearchQuery("")}
                    className='text-slate-400 cursor-pointer absolute right-2 top-3'
                    >
                        <Close sx={{fontSize:17}}/>
                    </div>
                )}
                
                
            </div>

            <button 
            onClick={()=>setOpenProjectWindow(true)}
            className='bg-gradient-to-r from-teal-400 to-blue-500 ml-2 p-[10px] flex w-[15%] text-sm rounded-md text-white items-center justify-center max-lg:w-[25%]'>
                <AddOutlined sx={{fontSize:17}}
                
                />
                <span className='max-md:hidden'>Create New</span>
            </button>
        </div>
    )
}
function SortByComponent(){
    const {allProjectsObject:{allProjects},openSortingDropDownObject:{openSortingDropDown,setOpenSortingDropDown},sortingDropDownPositionsObject:{setSortingDropDownPositions},
sortingOptionsObject:{sortingOptions}
}=UseAppContext();
   const nameRef=useRef<HTMLDivElement>(null);

    function openSortingDropDownFunction(){
     if(nameRef.current){
        const rect=nameRef?.current.getBoundingClientRect();
        const top=rect.top;
        const left=rect.left;
        setSortingDropDownPositions({top:top,left:left});

     }
    setOpenSortingDropDown(true);

   }
   const selectedName=sortingOptions.find((category)=>
     category.options.some((option)=>option.selected)
)
   return (
    <div className='mt-11 mb-[13px] flex gap-2 items-center justify-between text-[13px]'>
        <div className='flex gap-1'>
            <span className='text-slate-400'>You have</span>
            <span className='text-sky-500 font-semibold'>{allProjects.length}</span>
            <span className='text-slate-400'>projects</span>
        </div>
        <div className='flex gap-2 items-center select-none'>
            <span className='text-slate-400'>Sort By:</span>
            <div ref={nameRef} onClick={openSortingDropDownFunction} className='text-sky-500 flex gap-1 items-center'>
                <span>{selectedName?.category}</span>
                {openSortingDropDown?(
                  <KeyboardArrowUpRounded className='text-[13px] cursor-pointer'/>  
                ):(
                    <KeyboardArrowDownRounded className='text-[13px] cursor-pointer'/>

                )}
            </div>
        </div>
    </div>
   )
}
function ProjectsList({searchQuery}:{searchQuery:string}){
    const {allProjectsObject:{allProjects},
        isLoadingObject:{isLoading},
        sortedProjectsObject:{sortedProjects},
        darkThemeObject:{darkTheme}
}=UseAppContext();
const filterAllProjectsBySearchQuery=sortedProjects.filter((singleProject)=>
singleProject.name.toLowerCase().includes(searchQuery.toLowerCase())
)
    return (
     <div className={`w-full ${darkTheme?"bg-slate-800":"bg-slate-50"} max-h-[57%] rounded-lg p-5 flex flex-col gap-3 overflow-auto`}>
        {isLoading && (
            <div className='flex flex-col gap-3 justify-center items-center items-center w-full mt-28'>
                <CircularProgress value={100}/>
                <span className='text-slate-400 text-sm'>Loading...</span>
            </div>
        )}
        {allProjects.length===0 && !isLoading ?
         (<EmptyProjectPlaceHolder/>):
        ( <>
          {filterAllProjectsBySearchQuery.length>0 ? (
            <>
          {filterAllProjectsBySearchQuery.map((project,index)=>(
            <SingleProject key={index} project={project}/>
          ))}
         </> ):(
            <>{!isLoading && <NoFoundProjectSearched/>}</> 
    )}
    </>
)}
     </div>
    )
}

function NoFoundProjectSearched(){
    return (
        <div className='p-1 gap-5 flex flex-col justify-center pt-[90px] items-center'>
            <Search sx={{fontSize:80}} className='text-[70px] text-slate-200'/>
            <div className=''>
            <p className='text-gray-400 w-72 text-center text-[13px]'>
            Oops! that project seems to be missing. Try searching with a different keyword
            </p>
            </div>
        </div>
    )
}

function SingleProject({project}:{project:Project}){
    const {openProjectWindowObject:{setOpenProjectWindow},
selectedProjectObject:{selectedProject,setSelectedProject},
openAllProjectsWindowObject:{setOpenAllProjectsWindow},
showComponentPageObject:{setShowComponentPage},
openDeleteWindowObject:{setOpenDeleteWindow},
darkThemeObject:{darkTheme}
}=UseAppContext()
    function editTheProjectClicked(){
        setOpenProjectWindow(true);
        setSelectedProject(project);
    }

    function openTheProject(){
        //update selected project
      setSelectedProject(project);
      // close the all project window
      setOpenAllProjectsWindow(false);
      //show the component page
      setShowComponentPage(true);


    }
    function openDeleteWindow(){
        setSelectedProject(project);
        setOpenDeleteWindow(true);
        
    }
    return (
        <div className={`w-full ${darkTheme?"bg-slate-950":"bg-white"} rounded-md flex gap-3 items-center justify-between p-3`}>
            <div className='flex gap-3 items-center'>
                <DragIndicatorRounded className='text-slate-400'/>
                {/* project icon */}
                <div>
                    <div className={`w-[30px] h-[30px] ${darkTheme?"bg-slate-900":"bg-sky-200"} rounded-full flex items-center justify-center`}>
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
                    <span className={`${darkTheme?"text-slate-200":"text-slate-900"} font-semibold`}>{project.name}</span>
                    <span onClick={openTheProject} className={` ${darkTheme?"text-sky-400 bg-slate-700":"text-sky-400 bg-sky-100"}  text-[12px] w-[20px]  rounded-md text-center hover:text-sky-500`}>{project.components.length}</span>
                </div>
            </div>ll
            {/* Action Buttons */}
          <div className='flex gap-2 items-center'>
            <div 
            onClick={editTheProjectClicked}
            className={`rounded-full w-7 h-7 ${darkTheme?"bg-slate-900 hover:bg-slate-800":"bg-slate-200 hover:bg-slate-300"} flex items-center justify-center cursor-pointer  `}>
                <EditRounded className={`${darkTheme?"text-sky-500":"text-slate-400"}`} sx={{fontSize:15}}/>
            </div>
            <div 
            onClick={openDeleteWindow}
            className={`rounded-full w-7 h-7 flex ${darkTheme?"bg-slate-900 hover:bg-slate-800":"bg-slate-200 hover:bg-slate-300"} items-center justify-center cursor-pointer`}>
                <Delete className={`${darkTheme?"text-sky-500":"text-slate-400"}`} sx={{fontSize:15}}/>
            </div>
          </div>
        </div>
    )
}
export default AllProjectsWindow
