"use client";
import React,{createContext,useState,ReactNode,useContext, useEffect} from "react";
import { IoMdHome } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { allProjectData } from "./allData";
import { MdDarkMode } from "react-icons/md";
import {Project,Component} from "./allData"

export interface MenuItem{
     id:string;
     name:string,
     icon:ReactNode;
     isSelected:boolean;

}
export interface DarkModeMenu{
    id:string;
    name:string;
    icon:ReactNode;
    isSelected:boolean;

}
export interface Position{
    top:number;
    left:number;

}

interface AppContexttype{
    menuItemsObject:{
        menuItems:MenuItem[];
        setMenuItems:React.Dispatch<React.SetStateAction<MenuItem[]>>
    };
    openSideBarObject:{
        openSideBar:boolean;
        setOpenSideBar:React.Dispatch<React.SetStateAction<boolean>>;
    };
    darkModeMenuObject:{
        darkModeMenu:DarkModeMenu[];
        setDarkModeMenu:React.Dispatch<React.SetStateAction<DarkModeMenu[]>>;
    };
    openDarkModeMenuObject:{
        openDarkModeMenu:boolean;
        setOpenDarkModeMenu:React.Dispatch<React.SetStateAction<boolean>>;
    };
    showSearchBarObject:{
        showSearchBar:boolean;
        setShowSearchBar:React.Dispatch<React.SetStateAction<boolean>>;
    };
    isMobileViewObject:{
        isMobileView:boolean;
        setIsMobileView:React.Dispatch<React.SetStateAction<boolean>>;
    };
    showSideBarObject:{
        showSideBar:boolean;
        setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>;
    };
    allProjectsObject:{
        allProjects:Project[];
        setAllProjects:React.Dispatch<React.SetStateAction<Project[]>>;
    };
    isLoadingObject:{
        isLoading:boolean;
        setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
    };
   allFavoriteComponentsObject:{
    allFavoriteComponents:Component[];
    setAllFavoriteComponents:React.Dispatch<React.SetStateAction<Component[]>>;

   };
   openProjectWindowObject:{
    openProjectWindow:boolean;
    setOpenProjectWindow:React.Dispatch<React.SetStateAction<boolean>>;

   };
   openIconWindowObject:{
    openIconWindow:boolean;
    setOpenIconWindow:React.Dispatch<React.SetStateAction<boolean>>;

   };
   showComponentPageObject:{
    showComponentPage:boolean;
    setShowComponentPage:React.Dispatch<React.SetStateAction<boolean>>;
   };
   selectedProjectObject:{
    selectedProject:Project|null;
    setSelectedProject:React.Dispatch<React.SetStateAction<Project|null>>;

};
    openDropDownObject:{
        openDropDown:boolean;
        setOpenDropDown:React.Dispatch<React.SetStateAction<boolean>>;
    };
    dropDownPositionObject:{
        dropDownPosition:Position;
        setDropDownPosition:React.Dispatch<React.SetStateAction<Position>>;
    };
    openDeleteWindowObject:{
        openDeleteWindow:boolean;
        setOpenDeleteWindow:React.Dispatch<React.SetStateAction<boolean>>;
    };
    selectedComponentObject:{
        selectedComponent:Component | null;
        setSelectedComponent:React.Dispatch<React.SetStateAction<Component|null>>;
    };
    openComponentEditorObject:{
        openComponentEditor:boolean;
        setOpenComponentEditor:React.Dispatch<React.SetStateAction<boolean>>;

    };
    openAllProjectsWindowObject:{
        openAllProjectsWindow:boolean;
        setOpenAllProjectsWindow:React.Dispatch<React.SetStateAction<boolean>>;
    };
  

   }

    

//create a default state
const defaultState:AppContexttype={
    menuItemsObject:{
        menuItems:[],
        setMenuItems:()=>{},

    },
  openSideBarObject:{
    openSideBar:true,
    setOpenSideBar:()=>{}
  },
  openDarkModeMenuObject:{
    openDarkModeMenu:false,
    setOpenDarkModeMenu:()=>{}
  },
  darkModeMenuObject:{
    darkModeMenu:[],
    setDarkModeMenu:()=>{}

  },
showSearchBarObject:{
    showSearchBar:false,
    setShowSearchBar:()=> {}
},

isMobileViewObject:{
    isMobileView:false,
    setIsMobileView:()=>{}
},
showSideBarObject:{
    showSideBar:true,
    setShowSideBar:()=>{}
},
allProjectsObject:{
    allProjects:[],
    setAllProjects:()=>{}
},
isLoadingObject:{
    isLoading:true,
    setIsLoading:()=>{}
},
allFavoriteComponentsObject:{
    allFavoriteComponents:[],
    setAllFavoriteComponents:()=>{}

},
openProjectWindowObject:{
    openProjectWindow:false,
    setOpenProjectWindow:()=>{}
},
openIconWindowObject:{
    openIconWindow:false,
    setOpenIconWindow:()=>{}
},
showComponentPageObject:{
    showComponentPage:false,
    setShowComponentPage:()=>{}
},
selectedProjectObject:{
    selectedProject:null,
    setSelectedProject:()=>{}
},
openDropDownObject:{
    openDropDown:false,
    setOpenDropDown:()=>{}
},
dropDownPositionObject:{
    dropDownPosition:{top:0,left:0},
    setDropDownPosition:()=>{}
},
openDeleteWindowObject:{
    openDeleteWindow:false,
    setOpenDeleteWindow:()=>{}
},
selectedComponentObject:{
    selectedComponent:null,
    setSelectedComponent:()=>{}
}
,
openComponentEditorObject:{
    openComponentEditor:false,
    setOpenComponentEditor:()=>{}
},
openAllProjectsWindowObject:{
    openAllProjectsWindow:false,
    setOpenAllProjectsWindow:()=>{}
}


};

//create context with default values
 const AppContext=createContext<AppContexttype>(defaultState);

//create Provider component
export const AppProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [menuItems,setMenuItems]=useState<MenuItem[]>([
        {id:"1",name:"Home",icon:<IoMdHome/>,isSelected:true},
        {id:"2",name:"Projects",icon:<MdCategory/>,isSelected:false},
        {id:"3",name:"Favorites" ,icon:<MdFavorite/>,isSelected:false},

    ]);
    
    const [openSideBar,setOpenSideBar]=useState(()=>{
        const storedValue=localStorage.getItem("openedSideBar");
        return storedValue !== null ? JSON.parse(storedValue) :true;
    });
    const [openDarkModeMenu,setOpenDarkModeMenu]=useState(false);
    const [darkModeMenu,setDarkModeMenu]=useState<DarkModeMenu[]>(()=>{
        const savedDarkMode=localStorage.getItem("isDarkMode");
        const isDarkMode=savedDarkMode?JSON.parse(savedDarkMode):false;
        return [
            {
                id:"1",
                name:"Light",
                icon:<MdLightMode  className="text-sky-500" fontSize="medium"/>,
                isSelected:!isDarkMode
    
             },
             {
                 id:"2",
                 name:"Dark",
                 icon:<MdDarkMode className="text-sky-500" fontSize="medium" />,
                 isSelected:isDarkMode
             }
        ]
    });
    
    const [showSearchBar,setShowSearchBar]=useState(false);
    const [isMobileView,setIsMobileView]=useState(false);
    const [showSideBar,setShowSideBar]=useState(true);
    const [allProjects,setAllProjects]=useState<Project[]>([]);
    const [isLoading,setIsLoading]=useState(true);
    const [allFavoriteComponents,setAllFavoriteComponents]=useState<Component[]>([]);
    const [openProjectWindow,setOpenProjectWindow]=useState(false);
    const [openIconWindow,setOpenIconWindow]=useState(false);
    const[showComponentPage,setShowComponentPage]=useState(false);
    const [selectedProject,setSelectedProject]=useState<Project|null>(null);
    const [openDropDown,setOpenDropDown]=useState(false);
     const [dropDownPosition,setDropDownPosition]=useState({
        left:0,
        top:0,
        
     })
     const [openDeleteWindow,setOpenDeleteWindow]=useState(false);
     const [selectedComponent,setSelectedComponent]=useState<Component|null>(null);
     const [openComponentEditor,setOpenComponentEditor]=useState(false)
     const [openAllProjectsWindow,setOpenAllProjectsWindow]=useState(false)
    useEffect(()=>{
        function handleResize(){
            setIsMobileView(window.innerWidth <=640);
        }
        handleResize();
        window.addEventListener("resize",handleResize);
        return ()=>{
            window.removeEventListener("resize",handleResize)
        };
    },[]);
    useEffect(()=>{
        function fetchAllProjects(){
            setTimeout(()=>{
                // sort all the components in the allProjects by createdAt
                allProjectData.forEach((project)=>{
                    project.components.sort((a,b)=>{
                        return (
                            new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()
                        )
                    });
                });
                // update all projects
                setAllProjects(allProjectData);
                // set loading to false
                
                setIsLoading(false);
            },2000);

        }
        fetchAllProjects();

    },[])
    // update favorite components when allprojects changes
    useEffect(()=>{
        if(allProjects.length>0){
            const favoriteComponents=allProjects.flatMap((project)=>
            project.components.filter((component) => component.isFavorite)
            )
            setAllFavoriteComponents(favoriteComponents)
        }
    },[allProjects]);
    useEffect(()=> {
         
            localStorage.setItem("openedSideBar",JSON.stringify(openSideBar))
        
    },[openSideBar]);
    useEffect(()=>{
         const isDarkMode=darkModeMenu[1].isSelected;
         localStorage.setItem("isDarkMode",JSON.stringify(isDarkMode))

    },[darkModeMenu]);
    useEffect(()=>{
        if(menuItems[1].isSelected){
            setOpenAllProjectsWindow(true);

        }
    },[menuItems]);
    
    return (
        <AppContext.Provider value={{
            menuItemsObject:{menuItems,setMenuItems},
            openSideBarObject:{openSideBar,setOpenSideBar},
            openDarkModeMenuObject:{openDarkModeMenu,setOpenDarkModeMenu},
            darkModeMenuObject:{darkModeMenu,setDarkModeMenu},
            showSearchBarObject:{showSearchBar,setShowSearchBar},
            isMobileViewObject:{isMobileView,setIsMobileView},
            showSideBarObject:{showSideBar,setShowSideBar},
            allProjectsObject:{allProjects,setAllProjects},
            isLoadingObject:{isLoading,setIsLoading},
            allFavoriteComponentsObject:{allFavoriteComponents,setAllFavoriteComponents},
            openProjectWindowObject:{openProjectWindow,setOpenProjectWindow},
            openIconWindowObject:{openIconWindow,setOpenIconWindow},
            showComponentPageObject:{showComponentPage,setShowComponentPage},
            selectedProjectObject:{selectedProject,setSelectedProject},
            openDropDownObject:{openDropDown,setOpenDropDown},
            dropDownPositionObject:{dropDownPosition,setDropDownPosition},
            openDeleteWindowObject:{openDeleteWindow,setOpenDeleteWindow},
            selectedComponentObject:{selectedComponent,setSelectedComponent},
            openComponentEditorObject:{openComponentEditor,setOpenComponentEditor},
            openAllProjectsWindowObject:{openAllProjectsWindow,setOpenAllProjectsWindow}

        } }>
         {children}
        </AppContext.Provider>
    )
}
export const UseAppContext = () => useContext(AppContext)