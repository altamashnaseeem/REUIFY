import { MdCategory } from "react-icons/md";
import DashboardIcon from '@mui/icons-material/Dashboard';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CategoryIcon from '@mui/icons-material/Category';
export function TextToIcon({
    text,size,fontSize,className
}:{text:string;
    size?:"small"| "medium" | "large";
    fontSize?:number;
    className?:string;

}){
    
    switch (text){
        case "RectangleIcon":
            return (
            
                <>
                 <RectangleIcon fontSize={size} sx={{fontSize:fontSize}} className={`text-sky-400 ${className}`} />
            
                </>
               
            )
        case "CategoryIcon":

            return (
                <>
                 <CategoryIcon fontSize={size} sx={{fontSize:fontSize}} className={`text-sky-400 ${className}`} />
                 
                </>
               
            )
        case "DashboardIcon":

            return (
                <>
                 <DashboardIcon fontSize={size} sx={{fontSize:fontSize}} className={`text-sky-400 ${className}`} />
                 
                </>
               
            )            
       
        default:
            return  <CategoryIcon fontSize={size} sx={{fontSize:fontSize}} className={`text-sky-400 ${className}`} />
    
    }
}