import { UseAppContext } from '@/app/ContextApi'
import { AddOutlined, Category, Close, Delete, DragIndicatorRounded, EditRounded, FavoriteBorder, FavoriteRounded, FilterListRounded, KeyboardArrowDownRounded, KeyboardArrowUpRounded, Search, SearchRounded } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Component, Project } from '@/app/allData';
import { TextToIcon } from '@/app/utils/textToIcon';
import { openComponent, openTheDeleteWindow } from './FavoriteComponent';

function AllFavoriteComponent() {
   const {openAllComponentsWindowObject:{openAllComponentsWindow,setOpenAllComponentsWindow},
     menuItemsObject:{menuItems,setMenuItems},
     selectedComponentObject:{selectedComponent,setSelectedComponent},
     darkThemeObject:{darkTheme}
}=UseAppContext();
function closeTheWindow(){
    //set the first item to selected as true and other as a false
    const newMenuItems=menuItems.map((item)=>{
        return {...item,isSelected:false}
    });
    newMenuItems[0].isSelected=true;
    setMenuItems(newMenuItems);
    setOpenAllComponentsWindow(false);
    setSelectedComponent(null)

}
const [searchInput,setSearchInput]=useState("");

  return (
    <div
    style={{display:openAllComponentsWindow?"block":"none"}}
    className={`w-[70%] max-sm:w-[90%] p-9 ${darkTheme?"bg-slate-950":"border border-slate-50 bg-white"} max-h-[82%]  rounded-xl shadow-md absolute left-1/2 top-8 -translate-x-1/2 z-50`}
    >
     <Header/> 
     <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
      <ComponentsNumber/>
      <ComponentsList searchInput={searchInput} />
    </div>
  )
}
function Header(){
    const {openAllComponentsWindowObject:{openAllComponentsWindow,setOpenAllComponentsWindow},
    menuItemsObject:{menuItems,setMenuItems},
    selectedComponentObject:{selectedComponent,setSelectedComponent},
     darkThemeObject:{darkTheme}
}=UseAppContext();
function closeTheWindow(){
   //set the first item to selected as true and other as a false
   const newMenuItems=menuItems.map((item)=>{
       return {...item,isSelected:false}
   });
   
   newMenuItems[0].isSelected=true;
   setMenuItems(newMenuItems);
   setOpenAllComponentsWindow(false);
   setSelectedComponent(null)

}
    return(
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
            <div className={`w-[30px] h-[30px] ${darkTheme?"bg-slate-900":"bg-sky-200"} rounded-full flex items-center justify-center`}>
                <FavoriteRounded sx={{fontSize:17}} className={`text-sky-400 text-[17px]`}/>
            </div>
            <span className={` ${darkTheme?"text-slate-200":"text-slate-900"} text-xl font-semibold`}>Favorite Components</span>
            </div>
              <div>
                <Close onClick={closeTheWindow} sx={{fontSize:16}} className='text-slate-400 cursor-pointer'/>
              </div>
        </div>

    ) 
}
function SearchBar({searchInput,setSearchInput}:
    {searchInput:string;setSearchInput:React.Dispatch<React.SetStateAction<string>>;}

){
  const searchInputRef=useRef<HTMLInputElement>(null); 
 const {openAllComponentsWindowObject:{openAllComponentsWindow},
 openFilterDropDownObject:{openFilterDropDown,setOpenFilterDropDown},
 filterDropDownPositionsObject:{filterDropDownPositions,setFilterDropDownPositions},
 allFavoriteComponentsObject:{allFavoriteComponents},
 darkThemeObject:{darkTheme}
 }=UseAppContext();
 const buttonRef=useRef<HTMLButtonElement>(null);
useEffect(()=>{
    // focus the input only when openAllProjectWindow opens true
    if(openAllComponentsWindow){
          const focusInput=()=>{
            if(searchInputRef.current){
                searchInputRef.current.focus();

            }
          };
          if(!openFilterDropDown){
             //schedule focus setting for the next render
            setTimeout(focusInput,0);
          }
          
            

          
    }
},[openAllComponentsWindow]);
function openFilterDropDownFx(){
  setOpenFilterDropDown(!openFilterDropDown);
  if(buttonRef.current){
    const rect=buttonRef?.current.getBoundingClientRect();
    const top=rect.top;
    const left=rect.left;
    setFilterDropDownPositions({top:top,left:left})
    
  }
}


const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchInput(event.target.value);

}
    return (
        <div className='flex gap-5 items-center justify-between mt-12 relative'>
            <div className={`relative h-[42px] ${darkTheme?"bg-slate-900":"bg-slate-50"} flex items-center text-sm rounded-md pl-3 gap-1 w-[80%]`}>
                <SearchRounded className='text-slate-400'/>
                <input 
                ref={searchInputRef}
                value={searchInput}
                onChange={handleChange}
                placeholder='Search a component...' className='bg-transparent outline-none w-full font-light'/>
                {/* Close icon */}
{/*                 
                {searchInput.length>0 && (
                    <div
                    onClick={()=>setSearchInput("")}
                    className='text-slate-400 cursor-pointer absolute right-2 top-3'
                    >
                        <Close sx={{fontSize:17}}/>
                    </div>
                )} */}
            </div>
            
            <button 
            ref={buttonRef}
            onClick={openFilterDropDownFx}
            style={{opacity:allFavoriteComponents.length>0 ? 1:0.5}}
            disabled={allFavoriteComponents.length>0 ?false:true}
            className='bg-sky-500 hover:bg-sky-400 ml-2 p-[10px] flex w-[20%] text-sm rounded-md text-white items-center justify-center max-lg:w-[25%]'>
                <FilterListRounded sx={{fontSize:17}}/>
                <span className='max-md:hidden'>
                    Filter By: <span className='font-semibold'>Project</span></span>
                    {
                        openFilterDropDown ?(
                           <KeyboardArrowUpRounded sx={{fontSize:17}}/>
                        ):(
                         <KeyboardArrowDownRounded sx={{fontSize:17}}/>
                        )
                    }
            </button>
        </div>
    )
}
function ComponentsNumber(){
   const {allFavoriteComponentsObject:{allFavoriteComponents},
   isLoadingObject:{isLoading},
   selectedProjectToFilterObject:{
    selectedProjectToFilter,
    setSelectedProjectToFilter
   }
}=UseAppContext();


   return (
    <div className='mt-11 mb-[13px] flex gap-2 items-center justify-between text-[13px]'>
        <div className='flex gap-1'>
            <span className='text-slate-400'>You have set</span>
            <span className='text-sky-500 font-semibold'>{allFavoriteComponents.length}</span>
            <span className='text-slate-400'>components as favorite!</span>
        </div>
         {selectedProjectToFilter && (
            <div>
                <span className='text-slate-400'>You are filtering by : </span>
                <span className='text-[12px] rounded-lg bg-sky-100 text-sky-500 p-[6px] px-2'>
                    {selectedProjectToFilter}
                   <CloseIcon 
                   onClick={()=>setSelectedProjectToFilter(null)}
                    sx={{fontSize:16}}
                    className='text-sky-500 pl-1 cursor-pointer'
                   />
                </span>
            </div>
         )}
    </div>
   )
}
function ComponentsList({searchInput}:{searchInput:string}){
 const {allFavoriteComponentsObject:{allFavoriteComponents,setAllFavoriteComponents},
isLoadingObject:{isLoading},
selectedProjectToFilterObject:{selectedProjectToFilter},
darkThemeObject:{darkTheme}
}=UseAppContext();
const filterBySearchInput=selectedProjectToFilter
?allFavoriteComponents
.filter((item)=>{
    return item.name.toLowerCase().includes(searchInput.toLowerCase());
})
.filter((item)=>{
    return item.projectName === selectedProjectToFilter;

})
: allFavoriteComponents.filter((item)=>{
    return item.name.toLowerCase().includes(searchInput.toLowerCase());

})
    return (
     <div className={`w-full ${darkTheme?"bg-slate-900":"bg-slate-50"} max-h-[55%] rounded-lg p-3 flex flex-col gap-3 overflow-auto`}>
        {isLoading && (
            <div className='flex flex-col gap-3 justify-center items-center w-full mt-28'>
                <CircularProgress value={100}/>
                <span className='text-slate-400 text-sm'>Loading...</span>
            </div>

        )}
         {allFavoriteComponents.length ===0 && !isLoading ?
         (<EmptyProjectPlaceHolder/>):
        ( <>
          {filterBySearchInput.length>0 ? (
            <>
          {filterBySearchInput.map((component,index)=>(
            <SingleComponent key={index} item={component}/>
          ))}
         </> ):(
            <>{!isLoading && <NoFoundComponentSearched/>}</> 
    )}
    </>
)}
     
     </div>
    )
}

function SingleComponent({item}:{item:Component}){
    const {
    selectedComponentObject:{selectedComponent,setSelectedComponent},
    allProjectsObject:{allProjects,setAllProjects},
    selectedProjectObject:{selectedProject,setSelectedProject},
    openDeleteWindowObject:{setOpenDeleteWindow},
    openComponentEditorObject:{setOpenComponentEditor},
    darkThemeObject:{darkTheme}
}=UseAppContext();
    return (
        <div className={` ${darkTheme?"bg-slate-950":"bg-white"} w-full  rounded-md flex gap-3 items-center justify-between p-3 px-5`}>
            <div className='flex gap-3 items-center'>

                <div>
                    <div className={`w-[10px] h-[10px] ${darkTheme?"bg-slate-700":"bg-sky-200"} rounded-full flex items-center justify-center`}>
                    
                    </div>
                </div>

                {/* component name */}
                <div className='flex flex-col '>
                    <span className={`font-semibold ${darkTheme?"text-slate-200":"text-slate-900"} cursor-pointer hover:text-sky-500`}>{item.name}</span>
                    <div>
                    <span className={`text-[11px] p-1 px-2 ${darkTheme?"bg-slate-700":"bg-sky-100"} text-sky-500 rounded-lg`}>{item.projectName}</span>
                </div>
                </div>
                
            </div>
            {/* Action Buttons */}
          <div className='flex gap-2 items-center'>
            <div 
             onClick={()=>
                openComponent({
                  component:item,
                  allProjects:allProjects,
                  setSelectedComponent:setSelectedComponent,
                  setOpenComponentEditor:setOpenComponentEditor,
                  setSelectedProject:setSelectedProject,
                })
               }
            className={`rounded-full ${darkTheme?"bg-slate-900 hover:bg-slate-800":"bg-slate-200 hover:bg-slate-300"} w-7 h-7 flex items-center justify-center cursor-pointer`}>
                <EditRounded className={`${darkTheme?"text-sky-500":"text-slate-400"}`} sx={{fontSize:15}}/>
            </div>
            <div 
             onClick={
                ()=>
                  openTheDeleteWindow({
                    component:item,
                    allProjects:allProjects,
                    setSelectedComponent:setSelectedComponent,
                    setSelectedProject:setSelectedProject,
                    setOpenDeleteWindow:setOpenDeleteWindow,

                  })
               }
            className={`${darkTheme?"bg-slate-900 hover:bg-slate-800":"bg-slate-200 hover:bg-slate-300"} rounded-full w-7 h-7 flex items-center justify-center cursor-pointer`}>
                <Delete className={`${darkTheme?"text-sky-500":"text-slate-400"}`}sx={{fontSize:15}}/>
            </div>
          </div>
        </div>
    )
}
export default AllFavoriteComponent


function NoFoundComponentSearched(){
    return (
        <div className='p-1 gap-5 flex flex-col justify-center pt-[90px] items-center'>
            <Search sx={{fontSize:80}} className='text-[70px] text-slate-200'/>
            <div className=''>
            <p className='text-gray-400 w-72 text-center text-[13px]'>
                {`Oops! that component seems to be missing. Try searching with a different keyword`}
            </p>
            </div>
        </div>
    )
}

 function EmptyProjectPlaceHolder(){
    return (
        <div className='p-1 gap-5 flex flex-col justify-center pt-[150px] items-center'>
          
            <div className=''>
              <p className='text-gray-400 w-64 text-center text-[15px]'>
                {`It seems like you have not set a component as favorite yet.`}
              </p>
            </div>
        </div>
    )
  }