"use client"
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { UseAppContext } from "@/app/ContextApi";
import { IoMdClose } from "react-icons/io";
import {UserButton,useUser} from "@clerk/nextjs";
import { IoIosMenu } from "react-icons/io";
 
export default function TopBar(){
    return (
        <div className="bg-white  p-[11px]  rounded-lg px-5 flex justify-between items-center mt-6 ">
            <DashboardText/>
            <SearchBar/> 
            <div className="flex gap-4 items-center">
                 <DarkMode/>
                 <ProfileAccount/>
            </div>
        </div>
    )
};

function DashboardText(){
   const {user} =useUser();
    const {showSideBarObject:{setShowSideBar}}=UseAppContext();


    return (
       <div className="flex flex-col">
           <div
           onClick={()=>setShowSideBar(true)}
           className="hidden max-sm:block"
           >
            <IoIosMenu  className="text-slate-500 cursor-pointer"/>
           </div>
           <div className="max-sm:hidden">
            <span className="font-semibold">Welcome, {user?.firstName}</span>
           </div>
       </div>
    )
}

function SearchBar(){
    const {showSearchBarObject:{showSearchBar,setShowSearchBar},
   openLiveSearchBarObject:{openLiveSearchBar,setOpenLiveSearchBar},
   liveSearchPositionsObject:{setLiveSearchPositions}
}=UseAppContext()
      const searchBarRef=useRef<HTMLDivElement>(null);
      function handleClickedSearchBar(){
        if(searchBarRef.current){
            const rect=searchBarRef.current.getBoundingClientRect();
            const top=rect.top;
            const left=rect.left;
            setLiveSearchPositions({top,left})
        }
        if(!showSearchBar){
            setShowSearchBar(true)
        }

      }
      useEffect(()=>{
        function handleClickOutside(event:MouseEvent){
            if(searchBarRef.current && !searchBarRef.current.contains(event.target as Node) && openLiveSearchBar){
                setShowSearchBar(false);

            }
        }

        document.addEventListener("mousedown",handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside)
        };

      },[setShowSearchBar]);

      return  (
      <div className={`bg-slate-100 w-1/3  transition-all 
      p-[8px] flex gap-1 justify-center items-center rounded-md ${!showSearchBar && "cursor-pointer"}`}
      ref={searchBarRef}
      onClick={handleClickedSearchBar}
      >
        {showSearchBar ? <InputSearchBar/>:<SearchIconAndText/>}
      </div>
      )

}
function SearchIconAndText(){
    return (
        <div className="flex gap-1 items-center">
            <IoIosSearch fontSize="medium" className="text-slate-500"/>
            <span className="text-slate-500 text-sm">Search</span>
        </div>
    )
}

function InputSearchBar(){
    const {showSearchBarObject:{setShowSearchBar},
mainSearchQueryObject:{mainSearchQuery,setMainSearchQuery}
}=UseAppContext();
    const inputRef=useRef<HTMLInputElement>(null);
    useEffect(()=>{
       inputRef.current?.focus();

    },[]);
    const handleCloseClick=(e:React.MouseEvent)=>{
        e.stopPropagation();
        setShowSearchBar(false);

    }
    return (

        <div className="px-2 flex justify-between items-center w-full">
            <input
            ref={inputRef}
            value={mainSearchQuery}
            onChange={(e)=>setMainSearchQuery(e.target.value)}
            placeholder="Search a component..."
            className="w-full bg-slate-100 outline-none text-[13px] placeholder:text-slate-400"
            />
           <IoMdClose 
           fontSize="small"
           className="text-slate-500 text-[20px] cursor-pointer"
           onClick={handleCloseClick}
           />

        </div>
        
    )
}
function DarkMode(){
    const {openDarkModeMenuObject:{openDarkModeMenu,setOpenDarkModeMenu},
    darkModeMenuObject:{darkModeMenu,setDarkModeMenu},

}=UseAppContext();


function handleClicked(){
    setOpenDarkModeMenu(!openDarkModeMenu);

}

    return (
        <div onClick={handleClicked} className="relative">
            <div className="text-sky-500">
                {darkModeMenu[0].isSelected && darkModeMenu[0].icon}
                {darkModeMenu[1].isSelected && darkModeMenu[1].icon}
            </div>
            <DarkModeMenu/>
              
        </div>
    )
}

function ProfileAccount(){
    return (
        <div className="flex gap-3 items-center">
            <div className="w-[36px] h-[37px] flex items-center justify-center rounded-full">
              <UserButton/>

            </div>
        </div>
    )
}

function DarkModeMenu(){
      const {darkModeMenuObject:{darkModeMenu,setDarkModeMenu},
             openDarkModeMenuObject:{openDarkModeMenu,setOpenDarkModeMenu}
    }=UseAppContext();

    const menuRef=useRef<HTMLDivElement>(null);
    useEffect(()=>{
        function handleClickOutside(event:MouseEvent){
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setOpenDarkModeMenu(false);
            }

        }

        if(openDarkModeMenu){
            document.addEventListener("mousedown",handleClickOutside)
        }else{
            document.removeEventListener("mousedown",handleClickOutside)
        }

        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside);

        }
    },[openDarkModeMenu,setOpenDarkModeMenu]);



    function changeSelection(menuItem:any){
        setDarkModeMenu((prevMenuItems)=>
         prevMenuItems.map((prevMenuItem)=>
         prevMenuItem.id === menuItem.id
        ?{...prevMenuItem,isSelected:true}
        :{...prevMenuItem,isSelected:false}
        )
        )
    }

      return (
        <div ref={menuRef} className={` ${openDarkModeMenu ? "absolute":"hidden"} p-3 border-slate-50 select-none pr-10 bg-white rounded-md right-[3px] top-8 flex flex-col py-4 gap-[18px] shadow-md`}>
          {
            darkModeMenu.map((item)=>(
                <div key={item.id} className={` ${item.isSelected ? "text-sky-500":"text-slate-400"} flex gap-2 items-center cursor-pointer hover:text-sky-500`}
                onClick={()=>changeSelection(item)}
                >
                 {item.icon}
                 <span className="text-[12px] font-light">{item.name}</span>
                </div>
            ))
          }

        </div>
      )
}