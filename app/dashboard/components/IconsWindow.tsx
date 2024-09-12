import AllIcons, { allIconsArray, IconData } from "@/app/AllIconsData";
import { UseAppContext } from "@/app/ContextApi"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AppsIcon from "@mui/icons-material/Apps"
export default function IconsWindow({
    onUpdateIconSelected
}:{onUpdateIconSelected:(icon:IconData)=>void;}){

  const {isMobileViewObject:{isMobileView},
        openIconWindowObject:{openIconWindow,setOpenIconWindow}
}=UseAppContext();

const [allIconsState,setAllIconsState]=useState<IconData[]>(allIconsArray);
return (
    <div className={`${isMobileView?"w-[80%]":"w-[40%]"} ${openIconWindow?"absolute":"hidden"} h-[490px] bg-white shadow-md left-1/2 top-28 rounded-lg -translate-x-1/2 z-[60]`}>
        {/* header */}
        <div className="flex justify-between items-center pt-7 px-7 mb-8">
            <div className="flex items-center gap-2">
                {/* Category ICon */}
                <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
                    <AppsIcon
                     sx={{fontSize:17}}
                     className="text-sky-400 text-[17px]"
                    />
                </div>
                {/* Category header */}
                <span className="font-semibold text-lg">Project Icons</span>
            </div>
            <CloseIcon 
             onClick={()=>setOpenIconWindow(false)}
            className="text-slate-400 text-[18px] cursor-pointer"
            />
        </div>
        {/* Message */}
        <div className="mx-7 w-[80%] text-[12px] text-slate-400">
            {`Please select the icons you would like to use from the collection below`}
        </div>
        {/* All icon Area */}
        <div className="w-full flex flex-col items-center mt-3">
            <div className="border border-slate-100 w-[92%] h-[288px] overflow-auto rounded-md bg-slate-100"> 
                <AllIcons
                 allIconsState={allIconsState}
                 setAllIconsState={setAllIconsState}
                />
            </div>

        </div>
        {/* Button */}

        <div className="flex justify-end gap-4 mt-6 px-7 text-[12px]">
            <button className="px-4 py-2 text-slate-500 border border-slate-200 rounded-md hover:bg-slate-200"
              onClick={()=>setOpenIconWindow(false)}
            >Cancel</button>

            <button 
            onClick={()=>{
                onUpdateIconSelected(allIconsState.filter((icon)=>icon.isSelected)[0]);
                setOpenIconWindow(false);
                
            }}
            className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">
                Save
            </button>

        </div>
    </div>
)
}