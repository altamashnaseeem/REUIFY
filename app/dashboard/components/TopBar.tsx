"use client"
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { UseAppContext } from "@/app/ContextApi";
import { IoMdClose } from "react-icons/io";
import {UserButton,useUser} from "@clerk/nextjs";
import { IoIosMenu } from "react-icons/io";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Link from "next/link";
 
export default function TopBar(){
    const {darkThemeObject:{darkTheme}}=UseAppContext();

    return (
        <div className={`${darkTheme?"bg-slate-900 ":"bg-white"} p-[11px]   rounded-lg px-5 flex justify-between items-center mt-6 `}>
            {/* <DashboardText/> */}
            <Back/>
            <SearchBar/> 
            <div className="flex gap-4 items-center">
                 <DarkMode/>
                 <ProfileAccount/>
            </div>
        </div>
    )
};

// function DashboardText(){
//    const {user} =useUser();
//     const {showSideBarObject:{setShowSideBar},
//  darkThemeObject:{darkTheme}
// }=UseAppContext();


//     return (
//        <div className="flex flex-col">
//            <div
//            onClick={()=>setShowSideBar(true)}
//            className="hidden max-sm:block"
//            >
//             <IoIosMenu  className="text-slate-500 cursor-pointer"/>
//            </div>
//            <div className="max-sm:hidden">
//             <span className={`${darkTheme?"text-slate-100":"text-white"} font-semibold`}>Welcome, {user?.firstName}</span>
//            </div>
//        </div>
//     )
// }
function Back(){
    return (
    <Link href="/">
       <div
        className=' mt-[2px] p-[2px] text-slate-400 flex h-7 gap-1 px-2 items-center justify-center rounded-md cursor-pointer hover:text-sky-400'
        >
       <ArrowBackIcon sx={{fontSize:11}} className="text-[11px]"/>
       <span className='max-sm:hidden'>Back</span>
        </div>
    </Link>
    )
}

function SearchBar(){
    const {showSearchBarObject:{showSearchBar,setShowSearchBar},
   openLiveSearchBarObject:{openLiveSearchBar,setOpenLiveSearchBar},
   liveSearchPositionsObject:{setLiveSearchPositions},
   darkThemeObject:{darkTheme}
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
      <div className={`${darkTheme?"bg-slate-950 border border-slate-600 shadow-sm shadow-gray-700":"bg-slate-100"} w-1/3  transition-all 
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
mainSearchQueryObject:{mainSearchQuery,setMainSearchQuery},
darkThemeObject:{darkTheme}
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
            className={`w-full ${darkTheme?"bg-slate-950 text-slate-400":"bg-slate-100"} outline-none text-[13px] placeholder:text-slate-400`}
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
              <UserButton
               appearance={{
                elements: {
                  userButtonPopoverFooter: {
                    display: 'none',
                  },
                },
    
              }}
              />

            </div>
        </div>
    )
}

function DarkModeMenu(){
      const {darkModeMenuObject:{darkModeMenu,setDarkModeMenu},
             openDarkModeMenuObject:{openDarkModeMenu,setOpenDarkModeMenu},
             darkThemeObject:{darkTheme,setDarkTheme}
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
        if(menuItem.name==="Light"){
            setDarkTheme(false);
        }else{
            setDarkTheme(true)
        }
    }

      return (
        <div ref={menuRef} className={` ${openDarkModeMenu ? "absolute":"hidden"} p-3  select-none pr-10 ${darkTheme?"bg-slate-950":"bg-white border-slate-50"} rounded-md right-[3px] top-8 flex flex-col py-4 gap-[18px] shadow-md`}>
          {
            darkModeMenu.map((item)=>(
                <div key={item.id} className={`${item.isSelected ? "text-sky-500":"text-slate-400"} flex gap-2 items-center cursor-pointer hover:text-sky-500`}
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