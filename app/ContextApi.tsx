"use client";
import React,{createContext,useState,ReactNode,useContext} from "react";
import { IoMdHome } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
interface MenuItem{
     id:string;
     name:string,
     icon:ReactNode;
     isSelected:boolean;

}

interface AppContexttype{
    menuItemsObject:{
        menuItems:MenuItem[];
        setMenuItems:React.Dispatch<React.SetStateAction<MenuItem[]>>
    };
    
}
//create a default state
const defaultState:AppContexttype={
    menuItemsObject:{
        menuItems:[],
        setMenuItems:()=>{},

    }


}
//create context with default values
 const AppContext=createContext<AppContexttype>(defaultState);

//create Provider component
export const AppProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [menuItems,setMenuItems]=useState<MenuItem[]>([
        {id:"1",name:"Home",icon:<IoMdHome/>,isSelected:true},
        {id:"2",name:"Projects",icon:<MdCategory/>,isSelected:false},
        {id:"3",name:"Favorites" ,icon:<MdFavorite/>,isSelected:false},

    ]);
 
    

    return (
        <AppContext.Provider value={{menuItemsObject:{menuItems,setMenuItems}}}>
         {children}
        </AppContext.Provider>
    )
}


export const UseAppContext = () => useContext(AppContext)