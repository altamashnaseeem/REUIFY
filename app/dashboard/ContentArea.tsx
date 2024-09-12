"use client"
import { UseAppContext } from "../ContextApi";
import AllProjects from "./components/AllProjects";
import FavoriteComponent from "./components/FavoriteComponent";
import StatsBar from "./components/StatsBar";
import TopBar from "./components/TopBar";
function ContentArea(){
   const {showSideBarObject:{showSideBar},
          isMobileViewObject:{isMobileView}
  }=UseAppContext();
                               
   return (
       <div className="w-full h-screen bg-slate-50 p-5">
         <TopBar/>
         {isMobileView && showSideBar && <SoftLayer/>}
         <StatsBar/>
         <AllProjects/>
         <FavoriteComponent/>
       </div>
   )
};
                                                              
function SoftLayer(){
  return(
    <div className="w-full h-full fixed top-0 right-0 bg-black opacity-30"></div>
  )
}

export default ContentArea;