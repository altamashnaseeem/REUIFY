"use client"
import { UseAppContext } from "../ContextApi";
import AllProjects from "./components/AllProjects";
import FavoriteComponent from "./components/FavoriteComponent";
import MenuBar from "./components/MenuBar";
import StatsBar from "./components/StatsBar";
import TopBar from "./components/TopBar";
import { PageWrapper } from "../PageWrapper";
function ContentArea(){
   const {
          isMobileViewObject:{isMobileView},
          darkThemeObject:{darkTheme}
  }=UseAppContext();
                               
   return (
       <div className={`${darkTheme?"bg-slate-950":"bg-slate-50"} w-full min-h-screen  p-5`}>
        
        <PageWrapper>
        <MenuBar/>
         <TopBar/>
         {/* {isMobileView  && <SoftLayer/>} */}
         <StatsBar/>
         <AllProjects/>
         <FavoriteComponent/>
        </PageWrapper>
       </div>
   )
};
                                                              
function SoftLayer(){
  return(
    <div className="w-full h-full fixed top-0 right-0 bg-black opacity-30"></div>
  )
}

export default ContentArea;