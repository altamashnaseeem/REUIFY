"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CgComponents } from "react-icons/cg";

import { TbLogout2 } from "react-icons/tb";
import { UseAppContext } from "../ContextApi";
function Sidebar(){
return (
    <div className="h-screen w-[220px] p-6 pt-12 relative">
              <ArrowIcon/>
             <Logo/>
             <Links/>
             <LogoutButton/>
            
             
    </div>
)

}


function Logo(){
    return (
      <div className="flex gap-2 items-center  ">
         <CgComponents className='text-sky-400 text-[32px]'/>
        {/* App Name */}
           <div className='flex gap-1 text-[22px]'>
           <span className='font-medium text-black text-[22px]'>RE<span className='text-[28px] text-slate-900'>UI</span>FY</span>
           {/* <span className='text-slate-600 font-medium'>shelf</span> */}
           </div>
          
  
       
  
      </div>
  
    )
  }
function ArrowIcon(){
    return (
        <div className="w-7 h-7 rounded-full absolute right-[-11px] top-[95px] flex items-center justify-center">
            <div className="bg-sky-500 rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer">
               <IoIosArrowBack fontSize="small" className="text-white text-[12px]"/>
            </div>
        </div>
    )
}
function Links(){

    const {menuItemsObject:{menuItems},}=UseAppContext();
    console.log("USECONTEXT::",UseAppContext())
    
    return (
        <div className="mt-44 ml-3 flex flex-col gap-2 text-[15px]">
          {menuItems.map((item,index)=>(
            <div 
            key={index}
            className={`${item.isSelected ? "bg-sky-500 text-white " : "text-slate-400 hover:text-sky-500"} p-[7px]  select-none cursor-pointer rounded-lg flex items-center gap-2 `}
            >
                {item.icon}
                <span className="mt-0.5">{item.name}</span>
                      
                </div>
          ))}
          

        </div>
    )
}

function LogoutButton(){
    return (
        <div className="p-[7px] hover:text-sky-500 select-none cursor-pointer ml-3 mt-14 text-[15px] rounded-lg flex items-center gap-2 opacity-80">
             <TbLogout2 className="text-[20px]" />
             <span className="mt-0.5">Log Out</span>
        </div>
    )
}
export default Sidebar;
