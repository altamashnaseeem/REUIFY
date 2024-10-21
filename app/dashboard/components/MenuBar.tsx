import { UseAppContext } from '@/app/ContextApi';
import React from 'react'
import {MenuItem} from "../../ContextApi"
import { CgComponents } from "react-icons/cg";
import Link from 'next/link';
import { useRouter } from "next/navigation";
function MenuBar() {
    const {openSideBarObject:{openSideBar,setOpenSideBar},
         openAllProjectsWindowObject:{openAllProjectsWindow,setOpenAllProjectsWindow},
         openAllComponentsWindowObject:{setOpenAllComponentsWindow},
         menuItemsObject:{menuItems,setMenuItems},
         darkThemeObject:{darkTheme}
}=UseAppContext();
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
    <div className={`flex lg:flex-row flex-col gap-2 justify-center items-center`}>
         <Logo/>
         <div className={` ${darkTheme?"bg-gray-800 backdrop-blur-sm border-slate-600":"bg-white border-slate-200"} flex gap-1 justify-center items-center p-0.5 border  rounded-full `}>
         {menuItems.map((item,index)=>(
            <div 
            key={index}
            onClick={()=>handleLinkClick(item)}
            className={`${darkTheme?`${item.isSelected ? "bg-white text-gray-900 hover:opacity-80" : "text-slate-400 hover:bg-gray-700 hover:text-slate-100"}`:`${item.isSelected ? "bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:opacity-80" : "text-slate-900 hover:bg-sky-50 hover:text-slate-500"}`} text-sm font-semibold px-4 py-1.5 select-none cursor-pointer rounded-full flex items-center gap-2 transition duration-300`}
            >    
            
                 {item.name}
                </div>
          ))}

         </div>
         
          

        </div>
  )
}

export default MenuBar

function Logo(){
    const {
showComponentPageObject:{setShowComponentPage},
darkThemeObject:{darkTheme}
}=UseAppContext();
    
const router = useRouter();
    return (
     
       <div 
       onClick={() => router.push("/")}
      className="flex gap-2 items-center cursor-pointer lg:absolute lg:left-2.5">
         <CgComponents className='text-sky-400 text-[32px]'/>
        {/* App Name */}
           
            <div className='flex gap-1 text-[22px] '>
            <span className={`${darkTheme?"text-white":"text-black"} font-medium  text-[22px]`}>RE<span className={`${darkTheme?"text-slate-200":"text-slate-900"} text-[28px] `}>UI</span>FY</span>
            </div>
           
      </div>
  
    )
  }