import { ReactNode, useEffect } from "react";
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import AddCardIcon from '@mui/icons-material/AddCard';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { UseAppContext } from "./ContextApi";

export interface IconData{
    id:number;
    icon:ReactNode;
    isSelected:boolean;
    name:string;

}
export const allIconsArray:IconData[]=[
    
    {
        id:1,icon:<FormatAlignCenterIcon className="text-[20px]"/>,isSelected:true,name:"FormatAlignCenterIcon"
    },
    {
        id:2,icon:<FormatAlignJustifyIcon className="text-[20px]"/>,isSelected:false,name:"FormatAlignJustifyIcon"
    },
    {
        id:3,icon:<DashboardIcon className="text-[20px]"/>,isSelected:false,name:"DashboardIcon"
    },
    {
        id:4,icon:<RadioButtonCheckedIcon className="text-[20px]"/>,isSelected:false,name:"RadioButtonCheckedIcon"
    },
    {
        id:5,icon:<RadioButtonUncheckedIcon className="text-[20px]"/>,isSelected:false,name:"FRadioButtonUncheckedIcon"
    },
    {
        id:6,icon:<CircleIcon className="text-[20px]"/>,isSelected:false,name:"CircleIcon"
    },
    {
        id:7,icon:<AddCardIcon className="text-[20px]"/>,isSelected:false,name:"AddCardIcon"
    },
    {
        id:8,icon:<ToggleOffIcon className="text-[20px]"/>,isSelected:false,name:"ToggleOffIcon"
    },
    {
        id:9,icon:<LogoutIcon className="text-[20px]"/>,isSelected:false,name:"LogoutIcon"
    },
    {
        id:10,icon:<GridViewIcon className="text-[20px]"/>,isSelected:false,name:"GridViewIcon"
    },
    {
        id:11,icon:<AccountTreeIcon className="text-[20px]"/>,isSelected:false,name:"AccountTreeIcon"
    },
    {
        id:12,icon:<WidgetsIcon className="text-[20px]"/>,isSelected:false,name:"WidgetsIcon"
    },
    {
        id:13,icon:<MenuIcon className="text-[20px]"/>,isSelected:false,name:"MenuIcon"
    },
    {
        id:13,icon:<CodeIcon className="text-[20px]"/>,isSelected:false,name:"CodeIcon"
    },

]

export default function AllIcons({
    allIconsState,
    setAllIconsState,

}:{allIconsState:IconData[];
    setAllIconsState:React.Dispatch<React.SetStateAction<IconData[]>>
}){
    const {selectedProjectObject:{selectedProject},openIconWindowObject:{openIconWindow}}=UseAppContext();
    function handleClickedIcon(singleIcon:IconData){
        setAllIconsState((prevState)=>
        prevState.map((icon) => ({
            ...icon,
            isSelected:icon.id === singleIcon.id ? !icon.isSelected:false,
        }))
        )
    }
    useEffect(()=>{
        if(selectedProject){
        setAllIconsState((prevState)=>
        prevState.map((icon)=>({
            ...icon,
            isSelected:icon.name===selectedProject?.icon,

        }))
        )
        }
    },[openIconWindow]);
    
    return (
      <div className="flex flex-wrap gap-2 text-sky-500 p-3">
        {allIconsState.map((singleIcon,index)=>(
            <div 
            key={index}
            onClick={()=>handleClickedIcon(singleIcon)}
            className={`w-9 h-9 shadow-sm border border-slate-50 flex items-center 
                justify-center rounded-lg hover:bg-sky-500 hover:text-white ${singleIcon.isSelected?"bg-sky-500 text white":"bg-white text-sky-500"}
                `}
            >
                {singleIcon.icon}
            </div>
        ))}
      </div>
    )
}