import { UseAppContext } from '@/app/ContextApi'
import { CheckBox, Close, SearchRounded } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import AllProjects from './AllProjects';
import { Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function FilterDropDown() {
   const {openFilterDropDownObject:{openFilterDropDown,setOpenFilterDropDown},
  filterDropDownPositionsObject:{filterDropDownPositions,setFilterDropDownPositions},
  isMobileViewObject:{isMobileView},
  allProjectsObject:{allProjects},
  selectedProjectToFilterObject:{selectedProjectToFilter,setSelectedProjectToFilter},
  darkThemeObject:{darkTheme}
  }=UseAppContext();
  const filterDropDownRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    function handleClickOutside(event:MouseEvent){
       if(filterDropDownRef.current && !filterDropDownRef.current.contains(event.target as Node)){
        setOpenFilterDropDown(false);
       }

    }
    function handleScroll(){
    setOpenFilterDropDown(false)
        

    }
    function handleWheel(event:WheelEvent){
        if(event.deltaY !==0){
            setOpenFilterDropDown(false);

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
},[setOpenFilterDropDown]);
const [searchInput,setSearchInput]=useState("");

const projectsWithFavoriteInfo=allProjects
.map((project)=>{
  const favoriteComponents=project.components.filter(
    (component)=>component.isFavorite
  );
  const favoriteCount=favoriteComponents.length;
  return {
    ...project,
    favoriteCount,
  }
})
.filter((project)=>project.favoriteCount>0);
const handleProjectSelect=(projectName:string)=>{
  setSelectedProjectToFilter((prevSelected)=>
  prevSelected === projectName ? null:projectName
  );
  setOpenFilterDropDown(false);
};
const handleClearSelection=()=>{
  setSelectedProjectToFilter(null);
  setSearchInput("");
  

}

const filteredProjects=projectsWithFavoriteInfo.filter((project)=>
project.name.toLowerCase().includes(searchInput.toLowerCase())
);

  return (
    <div 
    ref={filterDropDownRef}
    style={{
        display:openFilterDropDown ? "flex":"none",
        top:filterDropDownPositions.top + 54,
        left:isMobileView
            ? filterDropDownPositions.left-230
            : filterDropDownPositions.left-98,

    }}
    className={` ${darkTheme?"border-slate-950":"border border-slate-50 bg-white"} p-3 top-60 right-52 z-[60]  fixed py-4 w-[310px] select-none shadow-md rounded-lg flex flex-col gap-5`}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
        {/* Selected Project */}
        {selectedProjectToFilter && (
          <div className='flex gap-1 items-center'>
          <span className='text-[12px] rounded-lg bg-sky-100 text-sky-500 p-[6px] px-2'>{selectedProjectToFilter}
          <Close onClick={handleClearSelection} sx={{fontSize:16}} className='text-sky-500 pl-1 cursor-pointer'/>
          </span>
        </div> 
        )}  

      {/* Divider Line */}
      <hr className={`border-t ${darkTheme?"border-slate-400":"border-slate-200"}`}/>
      {/* Unique Projects */}
      <div className={`flex flex-col gap-2 overflow-auto h-60 p-2 rounded-md text-slate-600 cursor-pointer ${darkTheme?"bg-slate-900":"bg-slate-50"}`}>
        {/* Project 1*/}
        {filteredProjects.length === 0 && (
          <div className ='text-[13px] text-slate-400 p-3'>
            No projects found...
          </div>
        )}
        {filteredProjects.map((project)=>(
          <div key={project._id} className={`text-[13px] ${darkTheme?"bg-slate-950":"bg-white"} rounded-lg p-[9px] px-3 flex items-center justify-between`}>
          <div className='flex items-center gap-1 '>
            <Checkbox  checked={selectedProjectToFilter === project.name}
            onClick={()=>handleProjectSelect(project.name)}
            sx={{color:darkTheme?'#a7a9aa' : '#4a4b4c'}}
            size='small'

            />
            <span className={`${darkTheme?"text-slate-400":"text-slate-600"}`}>{project.name}</span>
          </div>
          <span className='text-sky-400 p-1 px-2 rounded-full'>{project.favoriteCount}</span>
        </div>
        ))}
      </div>
    </div>
)
}

export default FilterDropDown

function SearchBar({searchInput,setSearchInput}:{
  searchInput:string;
  setSearchInput:React.Dispatch<React.SetStateAction<string>>;

}){
  const {openFilterDropDownObject:{openFilterDropDown},
darkThemeObject:{darkTheme}
}=UseAppContext();
  const inputRef=useRef<HTMLInputElement>(null);
  function handleSearchInput(event:React.ChangeEvent<HTMLInputElement>){
    setSearchInput(event.target.value);

  }
  useEffect(()=>{
    if(openFilterDropDown){
      inputRef.current?.focus();

    }
  },[openFilterDropDown])
  return (
    <div className={`h-[38px] ${darkTheme?"bg-slate-900 text-slate-400":"bg-slate-50"} flex items-center text-[13px] rounded-md pl-2 gap-1 w-[100%]`}>
      <div className='flex items-center gap-1'>
      <SearchRounded sx={{fontSize:17}} className='text-slate-400'/>
      <input
      ref={inputRef} 
      onChange={handleSearchInput}
      value={searchInput}
      placeholder='Search for a project...'
      className='bg-transparent outline-none w-full font-light'
      />
      </div>
      {searchInput && (
        <CloseIcon 
        sx={{fontSize:24}}
        onClick={()=>setSearchInput("")}
        className='text-slate-400 cursor-pointer pr-2'
        />
      )}
    </div>
    
  ) 
}