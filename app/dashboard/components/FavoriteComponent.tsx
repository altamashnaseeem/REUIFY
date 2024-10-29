import React, { useState } from 'react'
import { MdVisibility } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { UseAppContext } from '@/app/ContextApi';
import { Component, Project } from '@/app/allData';
import { CircularProgress } from '@mui/material';
import AllProjects from './AllProjects';
import { motion } from "framer-motion"



function FavoriteComponent() {
  const { allFavoriteComponentsObject: { allFavoriteComponents },
    isLoadingObject: { isLoading },
    darkThemeObject: { darkTheme }

  } = UseAppContext();
  const [viewAll, setViewAll] = useState(false);
  console.log("viewAll", viewAll)

  return (
    <div className={`${darkTheme ? "bg-slate-900" : "bg-white"} w-full p-8 rounded-lg mt-4`}>
      {/* Main Header */}
      <div className='flex justify-between'>
        <span className={`${darkTheme ? "text-slate-100" : "text-slate-950"} font-semibold text-lg`}>Favorite Components</span>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <button
            onClick={() => setViewAll(!viewAll)}
            className={`${allFavoriteComponents.length > 5 ? "cursor-pointer" : "cursor-not-allowed opacity-50 "} bg-gradient-to-r from-teal-400 to-blue-500  flex gap-2 items-center text-white text-[12px] p-2 px-3 rounded-md`}>
            <MdVisibility fontSize="medium" />
            <span className='max-sm:hidden'>View All</span>
          </button>
        </motion.div>
      </div>

      <div className='grid grid-cols-4 mt-6 mb-4 text-sm items-center text-slate-400 px-4 max-sm:grid-cols-2 '>
        <span className=''>Component name</span>
        <span className='max-sm:hidden pl-3'>Created At</span>
        <span className='max-sm:hidden pl-3'>Project</span>
        <span className='pl-3'>Actions</span>
      </div>
      {isLoading && (
        <div className='flex flex-col gap-3 justify-center items-center w-full mt-[70px] mb-7'>
          <CircularProgress value={100} />
          <span className='text-slate-400 text-sm'>Loading...</span>
        </div>
      )}
      {
        !isLoading && allFavoriteComponents.length === 0 ? (
          <div className='flex justify-center items-center mt-[70px] mb-8 text-slate-400 text-sm'>
            No favorite components yet...
          </div>
        ) : (
          <div className={`${darkTheme ? "text-sky-500" : "text-slate-950"} px-4 flex flex-col gap-1 mt-1`}>
            {viewAll ? (allFavoriteComponents.map((component, index) => (
              <div key={index}>
                <SingleFavoriteComponent component={component} />
              </div>
            ))) : (allFavoriteComponents.slice(0, 5).map((component, index) => (
              <div key={index}>
                <SingleFavoriteComponent component={component} />
              </div>
            )))}
          </div>
        )
      }
    </div>
  )
}


function SingleFavoriteComponent({ component }: { component: Component }) {
  const { openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
    selectedComponentObject: { selectedComponent, setSelectedComponent },
    allProjectsObject: { allProjects, setAllProjects },
    selectedProjectObject: { selectedProject, setSelectedProject },
    openDeleteWindowObject: { setOpenDeleteWindow },
    darkThemeObject: { darkTheme },
    projectCardObject: { setProjectCard }
  } = UseAppContext();

  function favoriteComponentOpen() {
    setOpenComponentEditor(true);
    setSelectedComponent(component);
    // Get the project and set it in the selectedProject state
    const project = allProjects.find((project) =>
      project.name.toLowerCase() === component.projectName.toLowerCase()
    );
    if (project) {
      setSelectedProject(project);
    } else {
      console.error(`Project not found for component: ${component.name}`)
    }
    //window to the top of the page or to the component editor
    window.scrollTo({ top: 0, behavior: "smooth" })

  }


  return (
    <div className='grid grid-cols-4 gap-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2 text-slate-200'>
      <span
        onClick={() =>
          openComponent({
            component,
            allProjects,
            setSelectedComponent,
            setOpenComponentEditor,
            setSelectedProject,
            setProjectCard
          })
        }
        className={`${darkTheme ? "text-slate-200" : "text-slate-600"}  hover:text-sky-500 cursor-pointer`}>

        {component.name}
      </span>
      <span className={`${darkTheme ? "text-slate-200" : "text-slate-600"} max-sm:hidden`}>{component.createdAt}</span>

      <span className='justify-self-start max-sm:hidden'>
        <span className={`${darkTheme ? "bg-slate-100 text-gray-900" : "bg-gradient-to-r from-teal-400 to-blue-500 text-white"} font-semibold inline-block rounded-2xl  text-[13px] px-4 py-1 whitespace-nowrap`}>
          {component.projectName}
        </span>
      </span>
      <div className='flex gap-2'>
        <motion.div whileHover={{ scale: 1.1 }}
          onClick={() =>
            openComponent({
              component,
              allProjects,
              setSelectedComponent,
              setOpenComponentEditor,
              setSelectedProject,
              setProjectCard,
            })
          }
          className={`${darkTheme ? "bg-slate-800 " : "bg-slate-50"}  rounded-full w-7 h-7 flex items-center justify-center  cursor-pointer`}>
          <FaEdit fontSize="medium" className={`${darkTheme ? "text-teal-500" : "text-teal-400"} text-[14px]`} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}
          onClick={
            () =>
              openTheDeleteWindow({
                component,
                setOpenDeleteWindow,
                allProjects,
                setSelectedComponent,
                setSelectedProject,
                setProjectCard
              })
          }
          className={`${darkTheme ? "bg-red-200" : "bg-red-50"} rounded-full w-7 h-7 flex items-center justify-center  cursor-pointer`}>
          <MdDelete fontSize="medium" className={`${darkTheme ? "text-red-500" : "text-red-400"} text-[15px]`} />
        </motion.div>
      </div>
    </div>

  )}

export default FavoriteComponent

export function openTheDeleteWindow({
  component,
  allProjects,
  setSelectedComponent,
  setSelectedProject,
  setOpenDeleteWindow,
  setProjectCard
}: {
  component: Component;
  allProjects: Project[];
  setSelectedComponent: (component: Component) => void;
  setSelectedProject: (project: Project) => void;
  setOpenDeleteWindow: (open: boolean) => void;
  setProjectCard: (open: boolean) => void;
}) {
  // Get the project and set it in the selectedProject state
  const project = allProjects.find((project) =>
    project.name.toLowerCase() === component.projectName.toLowerCase()

  );
  if (project) {
    setSelectedProject(project);

  } else {
    console.error(`Project not found for component: ${component.name}`);

  }
  setSelectedComponent(component);
  setProjectCard(false);
  setOpenDeleteWindow(true)
}

export function openComponent({
  component,
  allProjects,
  setSelectedComponent,
  setOpenComponentEditor,
  setSelectedProject,
  setProjectCard,
}: {
  component: Component;
  allProjects: Project[];
  setSelectedComponent: React.Dispatch<React.SetStateAction<Component | null>>;
  setOpenComponentEditor: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
  setProjectCard: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // scroll to the top of the page or to the component editor
  window.scrollTo({ top: 0, behavior: "smooth" });
  setSelectedComponent(component);
  setOpenComponentEditor(true);
  setProjectCard(false);

  //Get the project and set it in the selectedProject state
  const project = allProjects.find((project) =>
    project.name.toLowerCase() === component.projectName.toLowerCase()
  );
  if (project) {
    setSelectedProject(project)
  } else {
    console.error(`Project not found for component: ${component.name}`);
  }
}