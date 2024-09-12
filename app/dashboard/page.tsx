"use client"
import Sidebar from "./Sidebar"
import ContentArea from "./ContentArea"
import AddProjectWindow from "./components/AddProjectWindow"
import { UseAppContext } from "../ContextApi"
import IconsWindow from "./components/IconsWindow"
import { ReactNode, useState } from "react"
import CodeIcon from "@mui/icons-material/Code"
import { IconData } from "../AllIconsData"
import toast,{Toaster} from "react-hot-toast"
import ComponentPage from "./ComponentPage"
import TopBar from "./components/ComponentPage/TopBar"
import DropDown from "./components/DropDown"
import DeleteWindow from "./components/DeleteWindow"
import ComponentEditor from "./components/ComponentPage/ComponentEditor"
import AllProjectsWindow from "./components/AllProjectsWindow"
interface SelectedIcon{
  icon:ReactNode;
  name:string;

}

function Dashboard(){
    const {openProjectWindowObject:{openProjectWindow,setOpenProjectWindow},
  openIconWindowObject:{openIconWindow,setOpenIconWindow},
  showComponentPageObject:{showComponentPage},
  openDropDownObject:{openDropDown,setOpenDropDown},
  openDeleteWindowObject:{openDeleteWindow,setOpenDeleteWindow},
  openComponentEditorObject:{openComponentEditor},
  openAllProjectsWindowObject:{openAllProjectsWindow}
}=
    UseAppContext()
const [selectedIcon,setSelectedIcon]=useState<SelectedIcon>({
  icon:<CodeIcon/>,
  name:"CodeIcon"
});
function getTheIconSelected(icon:IconData){
  setSelectedIcon({icon:icon.icon,name:icon.name})
}

return (
    
<div className="flex poppins relative">
  <AllProjectsWindow/>
  <DeleteWindow/>
  <Toaster/>
  {openComponentEditor && <SoftLayer/>}
  {openAllProjectsWindow && <SoftLayer/>}
  {openComponentEditor  && <ComponentEditor/>}
<IconsWindow onUpdateIconSelected={getTheIconSelected}/>
<AddProjectWindow selectedIcon={selectedIcon}/>
{(openProjectWindow || openDeleteWindow) && <SoftLayer/>}


{openIconWindow && <SoftLayer/> }
<Sidebar/>
{showComponentPage && openDropDown && <DropDown/>}
{!showComponentPage?<ContentArea/>:<ComponentPage/>}


</div>

    
    
)

}
export default Dashboard;

function SoftLayer(){
    return(
      <div className="w-full h-full fixed top-0 z-40 right-0 bg-black opacity-30"></div>
    )
  }
