"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CgComponents } from "react-icons/cg";
import {MenuItem} from "../ContextApi"
import { TbLogout2 } from "react-icons/tb";
import { UseAppContext } from "../ContextApi";
import AllProjectsWindow from "./components/AllProjectsWindow";
function Sidebar(){
    const {openSideBarObject:{openSideBar,setOpenSideBar},
           isMobileViewObject:{isMobileView},
           showSideBarObject:{showSideBar,setShowSideBar},
           darkThemeObject:{darkTheme}
           
}=UseAppContext();
    
const menuRef=useRef<HTMLDivElement>(null);
useEffect(()=>{
    function handleClickOutside(event:MouseEvent){
        if(menuRef.current && !menuRef.current.contains(event.target as Node) && isMobileView){
            setShowSideBar(false)
        }
    }

    if(showSideBar){
        document.addEventListener("mousedown",handleClickOutside)
    }else{
        document.removeEventListener("mousedown",handleClickOutside)
    }
    return ()=>{
        document.removeEventListener("mousedown",handleClickOutside)

    };
},[showSideBar,setShowSideBar,isMobileView]);

useEffect(()=>{
    if(isMobileView){
        setOpenSideBar(true);
        setShowSideBar(false);
    }else{
        setShowSideBar(true)
    }
},[isMobileView]);

  
return (
    <div
    ref={menuRef} 
    style={{position:isMobileView ? "fixed":"relative"}}
    className={`${openSideBar? "w-[220px] p-6":"w-[100px] p-4"} min-h-screen pt-12 relative transition-all duration-300
     ${darkTheme?"bg-slate-950":"bg-white"} ${showSideBar ? "block":"hidden"}
    `}>
              {/* <ArrowIcon/> */}
             <Logo/>
             <Links/>
            
    </div>
)

}


function Logo(){
    const {openSideBarObject:{openSideBar,setOpenSideBar},
clickLogoObject:{clickLogo,setClickLogo},
showComponentPageObject:{setShowComponentPage},
darkThemeObject:{darkTheme}
}=UseAppContext();
    

    return (
      <div 
      onClick={()=>{
        setClickLogo(true)
        setShowComponentPage(false)

      }}
      className="flex gap-2 items-center cursor-pointer ">
         <CgComponents className='text-sky-400 text-[32px]'/>
        {/* App Name */}
           {openSideBar && (
            <div className='flex gap-1 text-[22px] '>
            <span className={`${darkTheme?"text-white":"text-black"} font-medium  text-[22px]`}>RE<span className={`${darkTheme?"text-slate-200":"text-slate-900"} text-[28px] `}>UI</span>FY</span>
            {/* <span className='text-slate-600 font-medium'>shelf</span> */}
            </div>
           )}
      </div>
    )
  }
// function ArrowIcon(){
//     const {openSideBarObject:{openSideBar,setOpenSideBar}}=UseAppContext();
//     function handleClick(){
//         setOpenSideBar(!openSideBar);

//     }
//     return (
//         <div onClick={handleClick} className="w-7 h-7 rounded-full absolute right-[-11px] top-[95px] flex items-center justify-center">
//             <div className="bg-sky-500 rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer">
//                 {openSideBar ? (
//              <IoIosArrowBack fontSize="small" className="text-white text-[12px]"/>

//                 ):(
//                     <IoIosArrowForward fontSize="small" className="text-white text-[12px]"/>

//                 )}
//             </div>
//         </div>
//     )
// }
function Links(){
    const {openSideBarObject:{openSideBar,setOpenSideBar},
         openAllProjectsWindowObject:{openAllProjectsWindow,setOpenAllProjectsWindow},
         openAllComponentsWindowObject:{setOpenAllComponentsWindow}
}=UseAppContext();

    const {menuItemsObject:{menuItems,setMenuItems},}=UseAppContext();

     function handleLinkClick(item:MenuItem){
         setMenuItems((prevMenuItems)=>
          prevMenuItems.map((prevMenuItem)=>
           prevMenuItem.id===item.id? 
         {...prevMenuItem,isSelected:true}
            
         
         :{...prevMenuItem,isSelected:false}
        
        )
        )
        if(item.name==="Projects"){
            setOpenAllProjectsWindow(true);    
        }
        if(item.name=="Favorites"){
              setOpenAllComponentsWindow(true);
        }
     }
    
    return (
        <div className={`mt-44 ${openSideBar ? "ml-3":"ml-0"} flex flex-col gap-2 text-[15px]`}>
          {menuItems.map((item,index)=>(
            <div 
            key={index}
            onClick={()=>handleLinkClick(item)}
            className={`${item.isSelected ? "bg-sky-500 text-white " : "text-slate-400 hover:text-sky-500"} p-[7px]  select-none cursor-pointer rounded-lg flex items-center gap-2 `}
            >    
                {item.icon}
                 {openSideBar && <span className="mt-0.5">{item.name}</span>}     
                </div>
          ))}
          

        </div>
    )
}

// function LogoutButton(){
//     const {openSideBarObject:{openSideBar,setOpenSideBar}}=UseAppContext();

//     return (
//         <div className={`text-slate-600 p-[7px] hover:text-sky-500 select-none cursor-pointer ${openSideBar ? "ml-3":"ml-0"} mt-14 text-[15px] rounded-lg flex items-center gap-2 opacity-80`}>
//              <TbLogout2 className=" text-slate-600 text-[20px]" />
//              {openSideBar && <span className="mt-0.5">Log Out</span>}
//         </div>
//     )
// }
export default Sidebar;
