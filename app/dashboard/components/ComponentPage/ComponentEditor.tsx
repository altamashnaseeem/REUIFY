import { UseAppContext } from '@/app/ContextApi'
import { ContentCopy, DoneAll, FavoriteBorder, FormatShapes, Save } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from "@mui/icons-material/Close"
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useRef, useState } from 'react'
import CodeIcon from "@mui/icons-material/Code"
import AceEditor from 'react-ace';
import prettier from "prettier/standalone"
import babelPlugin from "prettier/plugins/babel"
import estreePlugin from "prettier/plugins/estree"
import "ace-builds/src-noconflict/mode-jsx"
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { LiveError, LivePreview, LiveProvider } from 'react-live';
import toast from 'react-hot-toast';
import { Component } from '@/app/allData';
import {v4 as uuidv4} from "uuid"
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsOverscanOutlinedIcon from '@mui/icons-material/SettingsOverscanOutlined';
import { PageWrapper } from '@/app/PageWrapper';

function ComponentEditor() {
    const {openComponentEditorObject:{openComponentEditor,setOpenComponentEditor},
       allProjectsObject:{allProjects,setAllProjects},
       selectedProjectObject:{selectedProject,setSelectedProject},
       selectedComponentObject:{selectedComponent,setSelectedComponent},
       darkThemeObject:{darkTheme},
       isDayObject:{isDay}

  }=UseAppContext()

const [code,setCode]=useState(selectedComponent? (selectedComponent.code):(`<></>`));

const [inputName,setInputName]=useState<string>("");
    
const [copySuccess,setCopySuccess]=useState(false);
const inputRef=useRef<HTMLInputElement>(null);
const aceEditorRef=useRef<AceEditor | null>(null)
const editorInstanceRef=useRef<any>(null);

const formatCode=async (codeToFormat:string)=>{
    if(aceEditorRef.current){
        try{
          const formatted=await prettier.format(codeToFormat,{
            parser:"babel",
            plugins:[babelPlugin,estreePlugin],
            singleQuote:true,
            trailingComma:"all"
          });
          setCode(formatted);
          aceEditorRef.current.editor.setValue(formatted,1);
          

        }catch(error){
                 console.log("Formatting failed",error);

        }
    }
}
const handleChange=(newValue:string)=>{
    setCode(newValue);
    
}
function saveCompnent(){
// check if the project name is not empty
if(inputName.trim()===""){
  toast.error("Please enter a component name");
  inputRef.current?.focus();
  return ;

}
// check if code is not empty
if(code.trim()===""){
  toast.error("Please enter code");
  aceEditorRef.current?.editor.focus();
  return ;

}

if(!selectedProject){
  toast.error("No project selected");
  return ;

}
if(!selectedComponent){
  // creating a new component
  const newComponent:Component={
    _id:uuidv4(),
    name:inputName,
    code:code,
    isFavorite:false,
    createdAt:new Date().toISOString().split('T')[0],
    projectName:selectedProject.name,

  }
  // check if the component name already exists in the current project
  if(selectedProject.components.some((component)=>component.name.toLowerCase()===inputName.toLowerCase())){
    toast.error("Component name already exists in this project");
    return;

  }
  addNewComponent(newComponent);
  setSelectedComponent(newComponent)
  toast.success("New component created successfully");
  formatCode(newComponent.code)
}else{
  // updating an existing compnent
  const updatedComponent:Component={
    ...selectedComponent,
    name:inputName,
    code:code,

  }
  // check if the newn name conflicts 
  if(selectedProject.components.some((component)=>
  component._id!==selectedComponent._id && 
  component.name.toLowerCase()===inputName.toLowerCase()
  )){
    toast.error("Component new already exists in this project");
    return ;

  }
  updateExistingComponent(updatedComponent);
  setSelectedComponent(updatedComponent);
  toast.success("Component updated successfully");

}


}
async function addNewComponent(newComponent:Component){

  if(!selectedProject){
    toast.error("No project selected");
    return;
  }
  try {
    const response=await fetch(
      `/api/projects?projectId=${selectedProject._id}`,
      {
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          action:"addComponent",
          component:newComponent,
        }),
      }
    );
    if(!response.ok){
      throw new Error("Failed to add component")
    }
    const updatedProject=await response.json();
      const updatedAllProjects=allProjects.map((project)=>
    project._id===selectedProject._id?updatedProject.project:project
    );
    setSelectedProject(updatedProject.project);
    setAllProjects(updatedAllProjects);
    toast.success("Component added successfully");

  } catch (error) {
    console.error("Error adding component:",error);
    toast.error("Failed to add component");
  }

}
async function updateExistingComponent(updatedComponent:Component){
 
  if(!selectedProject){
    toast.error("No project selected");
    return ;
  }

  try {
    const response=await fetch(
      `/api/projects?projectId=${selectedProject._id}&componentId=${updatedComponent._id}`,
      {
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          action:"updateComponent",
          component:updatedComponent,

        }),

      }
    );
    if(!response.ok){
      throw new Error("Failed to update component");

    }
    const updatedProject=await response.json();
      const updatedAllProjects=allProjects.map((project)=>
    project._id === selectedProject._id ? updatedProject.project:project
    );
    setSelectedProject(updatedProject.project)
    setAllProjects(updatedAllProjects);
    toast.success("Component updated successfully");
  } catch (error) {
    console.error("Error updating component:",error);
    toast.error("Failed to update component");

  }
}
function copyTheCode(){
  //copy the code to clipboard
  setCopySuccess(true);
  toast.success("Code copied to clipboard");
  setTimeout(()=>{
    navigator.clipboard.writeText(code);
    setCopySuccess(false);

  },1400)

}
function updateTheFavoriteState(){
  if(selectedComponent!==null && 
     allProjects!==null &&
     selectedProject!==null

  ){
    // update the isFavorite state in the selected component
    const updatedComponent={
      ...selectedComponent,
      isFavorite:!selectedComponent.isFavorite,
    };
    // update the components array in the selectedProject
    const updatedComponents=selectedProject.components.map((component)=>
    component._id === selectedComponent._id ? updatedComponent:component
    );
    const updatedSelectedProject={
      ...selectedProject,
      components:updatedComponents,

    }
    // update the selectedProject in the allProjects
    const updatedAllProjects=allProjects.map((project)=>
    project._id === selectedProject._id ? updatedSelectedProject : project
    );
    // update all the states
    setSelectedComponent(updatedComponent);
    setSelectedProject(updatedSelectedProject);
    setAllProjects(updatedAllProjects);

  }else{
    console.error("Selected component, project, or all projects is null");
  }
}
// when the component is first rendered,focus on the input and format the code
//and the empty the fields

useEffect(()=>{
  if(openComponentEditor){
    inputRef.current?.focus();
    if(!selectedComponent){
      resetEditor();

    }else{
      setInputName(selectedComponent.name);
      setCode(selectedComponent.code);
      if(editorInstanceRef.current){
        editorInstanceRef.current.setValue(selectedComponent.code,-1);
        //format the code after setting it
        formatCode(selectedComponent.code);

      }
    }
  }else{
         resetEditor();

  }

},[openComponentEditor,selectedComponent]);
const resetEditor = () => {
  setCode("");
  setInputName("");
  if(editorInstanceRef.current){
    editorInstanceRef.current.setValue("",-1);

  }
};

const [isZoom,setIsZoom]=useState(false);
const scope = { React };
  return (
    <div 
     style={{display: openComponentEditor?"flex":"none"}}
     className={`w-[96%] h-[735px] max-sm:h-[90%] max-sm:flex-col border-slate-100 flex-row overflow-hidden ${darkTheme?"bg-slate-950":"bg-white"} absolute left-1/2 top-2 rounded-2xl shadow-md -translate-x-1/2 z-50`}
    >
    {/* left part */}
  
     {isZoom?( <div className={` w-3/5 max-sm:w-full h-full`}> <div className={` border border-slate-200  rounded-md relative mt-1`}>
        <span onClick={()=>setIsZoom(!isZoom)} className='absolute top-0.5 left-[750px] cursor-pointer z-10 text-gray-400 '><SettingsOverscanOutlinedIcon/></span>
           
          <AceEditor
          ref={aceEditorRef}
          onLoad={(editorInstance)=>{
            editorInstanceRef.current=editorInstance;
          }}
          mode="jsx"
          theme={isDay ? "github" : "monokai"}
          onChange={handleChange}
          name="jsxEditor"
          value={code}
          editorProps={{$blockScrolling:true}}
          setOptions={{
            enableBasicAutocompletion:true,
            enableLiveAutocompletion:true,
            enableSnippets:true,
            showLineNumbers:true,
            tabSize:2,

          }}
          fontSize={14}
          width='100%'
          height="800px"

          />
        </div></div>):( <div className={` w-3/5 max-sm:w-full h-full`}>
       {/* header */}
       <div className='flex justify-between items-center pt-7 px-8'>
        <div className='flex items-center gap-2'>
            {/* category icon */}
            <div className={` ${darkTheme?"bg-slate-900":"bg-sky-200"} w-[30px] h-[30px]  rounded-full flex items-center justify-center`}>
                <FormatShapes sx={{fontSize:17}} className='text-sky-400 text-[17px]'/>

            </div>
            {/* Category Header */}
            <span className={`${darkTheme?"text-slate-200":"text-slate-900"} font-semibold`}>Component Editor</span>

        </div>
        <CloseIcon 
        onClick={()=>{
          setOpenComponentEditor(false);
          setSelectedComponent(null);
          resetEditor();//Reset the input name
        }

        }
        
        sx={{fontSize:16}}
        className='text-slate-400 text-[18px] cursor-pointer'
        />
       </div>
       {/* input name */}
       <div className='flex flex-col gap-2 pt-14 px-8'>
        {/* input label */}
        <div className='flex gap-3'>
            <span className={`${darkTheme?"text-slate-200":"text-slate-900"} flex gap-1 items-center text-[13px]`}>
                
                <span>Component Name</span>
            </span>
            <div>
                <Checkbox icon={<FavoriteBorder sx={{fontSize:19}} className='text-slate-500'/>}
                checkedIcon={<FavoriteIcon className="text-sky-500"/>}
                onChange={updateTheFavoriteState}
                checked={selectedComponent?.isFavorite}
                />
                
            </div>
        </div>
        {/* Input */}
        <div className='flex gap-3'>
            <input 
             ref={inputRef}
            placeholder='Enter Component Name...' 
            className={`${darkTheme?"bg-slate-900 text-slate-200 outline-none":"border outline-none bg-sky-50"} p-[10px] text-[12px] w-full rounded-md `}
           
            value={inputName}
            onChange={(e)=>setInputName(e.target.value)}

            />
        </div>
       </div>
       {/* Input Code */}
       <div className='flex flex-col gap-2 pt-6 px-8'>
        <div className='flex justify-between'>
            {/* Input Label */}
            <div className='flex gap-3'>
            <span className={`${darkTheme?"text-slate-200":"text-slate-900"} flex gap-1 items-center text-[13px]`}>
                <CodeIcon className="text-[15px] font-bold"/>
                 <span>JSX Code</span>
            </span>
            <IconButton
            onClick={copyTheCode}
            
            >
             {!copySuccess ?(
              <ContentCopy sx={{fontSize:17}} className={`${darkTheme?"text-slate-200":"text-slate-900"}`}/>
             ):(
              <DoneAll sx={{fontSize:17}} className={`${darkTheme?"text-slate-200":"text-slate-900"}`}/>
             )}
            </IconButton>
            </div>
            <Toggle/>
            <button
            onClick={saveCompnent}
            className='bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 rounded-md transition-all '
            >
                <Save sx={{fontSize:17}}/>

            </button>
        </div>
        <div className={` border border-slate-200  rounded-md relative mt-1`}>
        <span onClick={()=>setIsZoom(!isZoom)} className='absolute top-0.5 left-[668px] cursor-pointer z-10 text-gray-400 '><SettingsOverscanOutlinedIcon/></span>
           
          <AceEditor
          ref={aceEditorRef}
          onLoad={(editorInstance)=>{
            editorInstanceRef.current=editorInstance;
          }}
          mode="jsx"
          theme={isDay ? "github" : "monokai"}
          onChange={handleChange}
          name="jsxEditor"
          value={code}
          editorProps={{$blockScrolling:true}}
          setOptions={{
            enableBasicAutocompletion:true,
            enableLiveAutocompletion:true,
            enableSnippets:true,
            showLineNumbers:true,
            tabSize:2,

          }}
          fontSize={14}
          width='100%'
          height="440px"

          />
        </div>
       </div>
      </div>)}
      {/* Right Part */}
      <div className={`bg-slate-50 w-2/5 max-sm:w-full max-sm:border-t border-l max-sm:mt-5 border-slate-100 h-full`}>
      
      
       <LiveProvider code={code} noInline={false} scope={scope} language='jsx'>
        <div className='tailwind'>
           <LiveError className="rounded-lg border-gray-200 p-4 text-red-600"/>
             <LivePreview className="rounded-lg border-gray-200  p-4"/>
        </div>
        
       </LiveProvider>
      </div>
    </div>
  )
}

export default ComponentEditor
function Toggle(){
  const {isDayObject:{isDay,setIsDay},darkThemeObject:{darkTheme}}=UseAppContext()
  const toggleTheme = () => {
    setIsDay(!isDay);
  };
  return (
    <div onClick={toggleTheme} className={`${darkTheme?"bg-slate-800":"bg-sky-100"} absolute rounded-full transition-all duration-500 ease-in-out  top-50 left-[640px] cursor-pointer flex p-1 gap-2 items-center`}>
      <div
        className={`absolute w-[22px] h-[22px] ${darkTheme?"bg-slate-950":"bg-white"} rounded-full transition-transform duration-500 ease-in-out ${
          isDay ? 'translate-x-[26px]' : 'translate-x-0'
        }`}
      ></div>
     <span  className={` flex items-center  rounded-full text-sky-500 w-[20px] h-[20px] justify-center z-10`}><DarkModeIcon sx={{fontSize:17}}/></span>
     <span  className={` w-[20px] h-[20px]  text-yellow-400 rounded-full text-center flex items-center justify-center z-10`}><LightModeIcon sx={{fontSize:17}}/></span>
    </div>
  )
}




