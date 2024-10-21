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
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AppsIcon from '@mui/icons-material/Apps';
import ArticleIcon from '@mui/icons-material/Article';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import BentoIcon from '@mui/icons-material/Bento';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import GamepadIcon from '@mui/icons-material/Gamepad';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HexagonIcon from '@mui/icons-material/Hexagon';
import HiveIcon from '@mui/icons-material/Hive';
import InterestsIcon from '@mui/icons-material/Interests';

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
        id:14,icon:<CodeIcon className="text-[20px]"/>,isSelected:false,name:"CodeIcon"
    },
    {
        id:15,icon:<InterestsIcon className="text-[20px]"/>,isSelected:false,name:"InterestsIcon"
    },
    {
        id:16,icon:<HiveIcon className="text-[20px]"/>,isSelected:false,name:"HiveIcon"
    },
    {
        id:17,icon:<HexagonIcon className="text-[20px]"/>,isSelected:false,name:"HexagonIcon"
    },
    {
        id:18,icon:<GraphicEqIcon className="text-[20px]"/>,isSelected:false,name:"GraphicEqIcon"
    },
    {
        id:19,icon:<GamepadIcon className="text-[20px]"/>,isSelected:false,name:"GamepadIcon"
    },
    {
        id:20,icon:<DeveloperBoardIcon className="text-[20px]"/>,isSelected:false,name:"DeveloperBoardIcon"
    },
    {
        id:21,icon:<DashboardCustomizeIcon className="text-[20px]"/>,isSelected:false,name:"DashboardCustomizeIcon"
    },
    {
        id:22,icon:<CalendarViewDayIcon className="text-[20px]"/>,isSelected:false,name:"CalendarViewDayIcon"
    },
    {
        id:23,icon:<BorderAllIcon className="text-[20px]"/>,isSelected:false,name:"BorderAllIcon"
    },
    {
        id:24,icon:<BlurOnIcon className="text-[20px]"/>,isSelected:false,name:"BlurOnIcon"
    },
    {
        id:25,icon:<BentoIcon className="text-[20px]"/>,isSelected:false,name:"BentoIcon"
    },
    {
        id:26,icon:<BackupTableIcon className="text-[20px]"/>,isSelected:false,name:"BackupTableIcon"
    },
    {
        id:27,icon:<AutoAwesomeMosaicIcon className="text-[20px]"/>,isSelected:false,name:"AutoAwesomeMosaicIcon"
    },
    {
        id:28,icon:<AssessmentIcon className="text-[20px]"/>,isSelected:false,name:"AssessmentIcon"
    },
    {
        id:29,icon:<ArticleIcon className="text-[20px]"/>,isSelected:false,name:"ArticleIcon"
    },
    {
        id:30,icon:<AppsIcon className="text-[20px]"/>,isSelected:false,name:"AppsIcon"
    },
    {
        id:31,icon:<AllInclusiveIcon className="text-[20px]"/>,isSelected:false,name:"AllInclusiveIcon"
    },
    {
        id:32,icon:<AlignVerticalCenterIcon className="text-[20px]"/>,isSelected:false,name:"AlignVerticalCenterIcon"
    },
    {
        id:33,icon:<AlignVerticalBottomIcon className="text-[20px]"/>,isSelected:false,name:"AlignVerticalBottomIcon"
    },
    {
        id:34,icon:<AlignHorizontalRightIcon className="text-[20px]"/>,isSelected:false,name:"AlignHorizontalRightIcon"
    },
    {
        id:35,icon:<AlignHorizontalLeftIcon className="text-[20px]"/>,isSelected:false,name:"AlignHorizontalLeftIcon"
    },
    {
        id:36,icon:<AcUnitIcon className="text-[20px]"/>,isSelected:false,name:"AcUnitIcon"
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
                justify-center rounded-lg hover:bg-sky-500 hover:text-white ${singleIcon.isSelected?"bg-sky-500 text-white":"bg-white text-sky-500"}
                `}
            >
                {singleIcon.icon}
            </div>
        ))}
      </div>
    )
}