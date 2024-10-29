"use client"
import Sidebar from "./Sidebar"
import ContentArea from "./ContentArea"
import AddProjectWindow from "./components/AddProjectWindow"
import { UseAppContext } from "../ContextApi"
import IconsWindow from "./components/IconsWindow"
import { ReactNode, useRef, useState } from "react"
import CodeIcon from "@mui/icons-material/Code"
import { IconData } from "../AllIconsData"
import toast,{Toaster} from "react-hot-toast"
import ComponentPage from "./ComponentPage"
import TopBar from "./components/ComponentPage/TopBar"
import DropDown from "./components/DropDown"
import DeleteWindow from "./components/DeleteWindow"
import ComponentEditor from "./components/ComponentPage/ComponentEditor"
import AllProjectsWindow from "./components/AllProjectsWindow"
import SortingDropDown from "./components/SortingDropDown"
import AllFavoriteComponent from "./components/AllFavoriteComponent"
import Code from "@mui/icons-material/Code"
import FilterDropDown from "./components/FilterDropDown"
import AllProjects from "./components/AllProjects"
import { Component, Project } from "../allData"
import { PageWrapper } from "../PageWrapper"
interface SelectedIcon{
  icon:ReactNode;
  name:string;

}

function Dashboard(){
    const {openProjectWindowObject:{openProjectWindow,setOpenProjectWindow},
  openIconWindowObject:{openIconWindow,setOpenIconWindow},
  showComponentPageObject:{showComponentPage},
  openDropDownObject:{openDropDown,setOpenDropDown},
  openDeleteWindowObject:{openDeleteWindow,setOpenDeleteWindow},
  openComponentEditorObject:{openComponentEditor},
  openAllProjectsWindowObject:{openAllProjectsWindow},
  openAllComponentsWindowObject:{openAllComponentsWindow},
  showSearchBarObject:{showSearchBar},
  mainSearchQueryObject:{mainSearchQuery},
  clickLogoObject:{clickLogo}
  
}=
    UseAppContext()
const [selectedIcon,setSelectedIcon]=useState<SelectedIcon>({
  icon:<CodeIcon/>,
  name:"CodeIcon"
});
function getTheIconSelected(icon:IconData){
  setSelectedIcon({icon:icon.icon,name:icon.name})
}
console.log("clickLogo",clickLogo)

return (
    
<div className="flex poppins relative">
  {showSearchBar && mainSearchQuery && <LiveSearchBar/>}
  <FilterDropDown/>
  <AllFavoriteComponent/>
  <SortingDropDown/>
  <AllProjectsWindow/>
  <DeleteWindow/>
  <Toaster/>
  {openAllComponentsWindow && <SoftLayer/>}
  {openAllComponentsWindow && <SoftLayer/>}
  {openComponentEditor && <Softlayer/>}
  {openAllProjectsWindow && <SoftLayer/>}
  {openComponentEditor  && <ComponentEditor/>}
<IconsWindow onUpdateIconSelected={getTheIconSelected}/>
<AddProjectWindow selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon}/>
{(openProjectWindow || openDeleteWindow) && <SoftLayer/>}


{openIconWindow && <SoftLayer/>}
{/* <Sidebar/> */}
{showComponentPage && openDropDown && <DropDown/>}
{(!showComponentPage && clickLogo )?<ContentArea/>:<ComponentPage/>}

 
</div>

    
    
)

}
export default Dashboard;

function SoftLayer(){
    return(
      <div className="w-full h-full fixed top-0 z-40 right-0 bg-black opacity-30"></div>
    )
  }
function Softlayer(){
  return (
    <div className="w-full h-full fixed top-0 z-40 right-0 bg-black"></div>
  )
}
function LiveSearchBar(){
  const {openLiveSearchBarObject:{openLiveSearchBar,setOpenLiveSearchBar},
liveSearchPositionsObject:{liveSearchPositions},
isMobileViewObject:{isMobileView},
allProjectsObject:{allProjects},
mainSearchQueryObject:{mainSearchQuery,setMainSearchQuery},
selectedProjectObject:{setSelectedProject},
showComponentPageObject:{setShowComponentPage},
showSearchBarObject:{setShowSearchBar},
openAllProjectsWindowObject:{setOpenAllProjectsWindow}

}=UseAppContext();
const liveSearchBarRef=useRef<HTMLDivElement>(null);

// filter projects and components based on the search query

const filteredProjects=allProjects.filter((project)=>
project.name.toLowerCase().includes(mainSearchQuery.toLowerCase())
);
const filteredComponents=allProjects.flatMap((project)=>
project.components.filter((component)=>
component.name.toLowerCase().includes(mainSearchQuery.toLowerCase())
));
function openTheProject(project:Project){
   // find the project 
   const findProject=allProjects.find((p)=> p._id === project._id);
   
   if(findProject){
    //set the project in the selectedProject state
    setSelectedProject(findProject)
    //Open the component Page
    setShowComponentPage(true);
    //Close the live search bar
    setOpenLiveSearchBar(false);
    //Hide the Search bar
    setShowSearchBar(false);
    //Reset the search query
    setMainSearchQuery("");


   }
}
function showMoreFunction(){
  // hide the search bar 
  setShowSearchBar(false);
  // open the all projects window
  setOpenAllProjectsWindow(true)
}

function openClickedComponent(component:Component){
 // we need a find the project by using the projectName in the component
 const findProject=allProjects.find(
  (project)=>project.name === component.projectName
 )
 if(findProject){
  setSelectedProject(findProject);
 }
 // close the live search bar
 setOpenLiveSearchBar(false);
 // hide the search bar
 setShowSearchBar(false);
 //open the component page
 setShowComponentPage(true);
 setMainSearchQuery(component.name);


}
  return (
    <div 
    style={{
      top:liveSearchPositions.top + 50,
      left:liveSearchPositions.left,
      
    }}
    ref={liveSearchBarRef}
    className={`fixed p-5 ${isMobileView ? "w-[70%]":"w-[26%]"} flex flex-col gap-3 shadow-md border border-slate-50 bg-white rounded-lg top-14 left-96 z-50`}>
      {filteredComponents.length ===0 && filteredProjects.length === 0 && (
        <span className="text-slate-500 text-[12px]">No matched results...</span>
      )}
      {/* projects Result */}
      {filteredProjects.length>0 && (
        <div>
        <span className="font-bold text-[14px] text-slate-800 ">Projects</span>
        <div className="flex gap-1 mt-3 flex-col ml-1">
          {/* single project */}
          {filteredProjects.slice(0,3).map((project)=>(
             <div
            
             onClick={()=>openTheProject(project)}
             key={project._id} className="flex items-center gap-1 p-2 rounded-md hover:bg-slate-100 select-none cursor-pointer">
             {/* icon */}
             <div className="w-[21px] h-[21px] bg-sky-200 rounded-full flex items-center justify-center">
               <Code sx={{fontSize:"15px"}} className="text-sky-500 text-[18px]"/>
             </div>
             {/* Name */}
             <span className="text-[12px] text-slate-700 ">{project.name}</span>
           </div>
          ))}
         
        </div>
        {/* More */}
        {filteredProjects.slice(3).length > 0 && (
          <div 
          onClick={showMoreFunction}
          className="w-full flex items-center justify-center mt-1">
            <div className="text-[12px] text-sky-500 hover:text-sky-700 cursor-pointer">
              {filteredProjects.length-3} more project
              {filteredProjects.length-3 > 1 ? "s":""} available
            </div>
          </div>
        )}

      </div>
      )}
      {/* components results */}
      {filteredComponents.length>0 && (
        <div>
        <span className="font-bold text-[14px] text-slate-800 ">Components</span>
        <div className="flex mt-3 flex-col ml-1">
          {/* single project */}
          {filteredComponents.slice(0,3).map((component)=>(
             <div 
             onClick={()=>openClickedComponent(component)}
             key={component._id} className="flex items-center gap-1 p-2 rounded-md hover:bg-slate-100 select-none cursor-pointer">
             {/* icon */}
             <div className="w-[21px] h-[21px] bg-sky-200 rounded-full flex items-center justify-center">
               <Code sx={{fontSize:"15px"}} className="text-sky-500 text-[18px]"/>
             </div>
             {/* Name */}
             <span className="text-[12px] text-slate-700 ">{component.name}</span>
           </div>
          ))}
         
        </div>
        {/* More */}
        {filteredComponents.slice(3).length > 0 && (
          <div className="w-full flex items-center justify-center mt-1">
            <div className="text-[12px] text-sky-500 hover:text-sky-700 cursor-pointer">
              {filteredProjects.length-3} more component
              {filteredProjects.length-3 > 1 ? "s":""} available
            </div>
          </div>
        )}

      </div>
      )}
    </div>
  )
}  
