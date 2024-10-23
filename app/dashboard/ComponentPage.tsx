import React, { useState } from 'react'
import { UseAppContext } from '../ContextApi'
import TopBar from './components/ComponentPage/TopBar';
import AllComponents from './components/ComponentPage/AllComponents';
import { TextToIcon } from '../utils/textToIcon';
import AddIcon from "@mui/icons-material/Add"
import { PageWrapper } from '../PageWrapper';
export default function ComponentPage() {
    const {showComponentPageObject:{showComponentPage,setShowComponentPage},
      selectedProjectObject:{selectedProject},
      isMobileViewObject:{isMobileView},
      showSearchBarObject:{showSearchBar},
      darkThemeObject:{darkTheme}   
  }=UseAppContext();
  const [searchInput,setSearchInput]=useState<string>("");
  return (
                                                                                                                                                                                                                                                                                                                                    
    <div className={`w-full ${darkTheme?"bg-gray-950":"bg-slate-50"} p-3 px-4 pt-5 min-h-screen`}>
          {showSearchBar && isMobileView && showComponentPage && <SoftLayer/>}
          <TopBar searchInput={searchInput} setSearchInput={setSearchInput}/>
      <PageWrapper>
                      
      {selectedProject?.components.length === 0 && <EmptyProjectsPlaceholder/>}
      <AllComponents searchInput={searchInput}/>
      </PageWrapper>
    </div>
  ) 
}

export function EmptyProjectsPlaceholder(){
  const {selectedProjectObject:{selectedProject},
  openComponentEditorObject:{setOpenComponentEditor},
  darkThemeObject:{darkTheme}

}=UseAppContext();
  return (
    <div className='p-1 gap-5 flex flex-col justify-center h-[500px] mt-[68px] mb-[34px] items-center'>
      {selectedProject?.icon!==undefined && (
        <div className={`${darkTheme?"bg-slate-900 text-sky-500":"bg-slate-200 text-slate-100"}  w-28 h-28  rounded-full flex items-center justify-center`}>
          {TextToIcon({text:selectedProject?.icon,
            fontSize:60,
          

          })}
        </div>
      )}
      <div className='flex flex-col'>
        <h3 className={`${darkTheme?"text-slate-200":"text-slate-900"} font-semibold text-[19px] mb-1 text-center`}>There are no components Yet...</h3>
        <p className='text-gray-400 text-center text-[14px]'>
          Please click below to add your first component.
        </p>
      </div>
      <button  onClick={()=>setOpenComponentEditor(true)} className='flex gap-1 items-center bg-sky-500 p-2 rounded-md text-white text-center text-[12px] px-3 pr-5'>
        <AddIcon/>
        <span className='text-sm' >Add new component</span>
      </button>
      
    </div>
  )
}

function SoftLayer(){
  return(
    <div className="w-full h-full fixed top-0 z-40 right-0 bg-black opacity-30"></div>
  )
}