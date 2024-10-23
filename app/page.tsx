"use client";
import { CgComponents } from "react-icons/cg";
import { GrStorage } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { useUser } from "@clerk/nextjs";
import { MenuItem } from "./ContextApi"
import { UseAppContext } from '@/app/ContextApi';
import grainImage from "./assests/grain.jpg"
import Link from 'next/link';
import StarImage from "./assests/star.svg"
import OrbitCta from "./components/OrbitCta";
import pic1 from "./assests/pic1.jpg";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolLight, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import {PageWrapper} from "./PageWrapper"
import {AnimationEffect} from "./AnimationEffect"
import {UserButton} from "@clerk/nextjs";




function Page() {
  return (
    <div className="bg-gray-900">
      <Navbar/>
      {/* <PageWrapper><CTAsection/></PageWrapper> */}
      <CTAsection/>
      <CodeTemplate/>
      <Features/>
      <Flexy/>
    
    </div>
  )
}
function Flexy(){
  return(
    <div className="bg-gray-950 px-4 pb-16 pt-4 mt-60 relative shadow-[0px_0px_100px_90px_rgba(3,7,18,1)]">
      <div className="grid lg:grid-cols-4 grid-cols-2 ">
          <div className="p-2 lg:p-0">
            <Logo/>
            <p className="text-gray-400 text-sm">Copyright © 2024 ReUify, Inc. All rights reserved.</p>
            </div>
          <div className="lg:ml-[100px] pt-2 pl-8">
            <h5 className="text-white font-semibold mb-1">Legal</h5>
                 <div><Link href="/privacy" className="text-sm text-gray-400 hover:text-sky-400">Privacy</Link></div>
                 <div><Link href="/services" className="text-sm text-gray-400 hover:text-sky-400">Term of Service</Link></div>
          </div>
           <div className="lg:ml-[50px] lg:p-0 p-2 pt-8 ">
           <h5 className="text-white font-semibold mb-2">Follow Us</h5>
          <div className="flex gap-5"><Link href="https://www.facebook.com/profile.php?id=100083373912821" className="text-gray-400 hover:text-sky-400"><FacebookOutlinedIcon/></Link>
          <Link href="https://x.com/0fficialaltamax" className="text-gray-400 hover:text-sky-400"><XIcon/></Link>
          <Link href="https://www.instagram.com/alt_amax/" className="text-gray-400 hover:text-sky-400"><InstagramIcon/></Link></div>
           </div>
           <div className="text-white font-semibold lg:mb-2 lg:pt-0 lg:p-0 pt-8 p-2 ">
           <h5 className="text-white font-semibold mb-2">Contact Us</h5>
            <p className="text-gray-400 text-sm text-indigo-900">altamashnaseem7@gmail.com</p>
           </div>
             
      </div>
    </div>
  )
}

function CodeTemplate() {

  const codestring = ` <div className="flex w-[600px] h-[280px] bg-white mr-[500px] rounded-md z-50 p-3">
  <div className="w-[400px] h-[260px]  rounded-md">
    <img src={pic1.src} alt="italy" className="w-full h-full rounded-md"/>
  </div>
  <div className="w-full">
    <div className="text-lg font-semibold text-gray-900 flex justify-center items-center">Fontana di Trevi</div>
    <div className="text-md text-gray-900 flex justify-center items-center">Trevi Fountain</div>
    <div className="text-sm  text-gray-600 flex justify-center items-center">Rome,Italy</div>
    <div className="text-gray-400 flex justify-center items-center px-7 mt-2">It is an 18th-century fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi.it is the largest Baroque fountain in the city and one of the most famous fountains in the world</div>
  </div>
</div>` 
  
  return (
    <div className="flex justify-center items-center lg:mb-[370px] mb-[200px] mt-[10px] lg:mt-[250px] relative " >
      <div className="absolute w-[450px] h-[440px] lg:w-[600px] lg:h-[550px] text-white bg-white/10 z-40 rounded-md lg:ml-[500px] overflow-auto px-12 border border-gray-600">
        <div className="w-full h-full">
          <SyntaxHighlighter
            language={"javascript"}
            style={atomOneDark}
            wrapLines={false}
            wrapLongLines={false}
            customStyle={
              { height: "100%",backgroundColor: '#111827'  }
               
            }
          >
            {codestring}

          </SyntaxHighlighter>
        </div>
      </div>
      <div className="flex w-[470px] h-[330px] mt-[550px] lg:mt-[20px] lg:w-[600px] lg:h-[280px] bg-white lg:mr-[590px] rounded-md z-50 lg:p-3 p-2 ">
        <div className="lg:w-[400px] lg:h-[260px] w-[300px] h-[310px]  rounded-md">
          <img src={pic1.src} alt="italy" className="w-full h-full rounded-md" />
        </div>
        <div className="w-full">
          <div className="text-lg font-semibold text-gray-900 flex justify-center items-center">Fontana di Trevi</div>
          <div className="text-md text-gray-900 flex justify-center items-center">Trevi Fountain</div>
          <div className="text-sm  text-gray-600 flex justify-center items-center">Rome,Italy</div>
          <div className="text-gray-400 flex justify-center items-center px-7 mt-2">It is an 18th-century fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi.it is the largest Baroque fountain in the city and one of the most famous fountains in the world</div>
        </div>
      </div>
    </div>
  )
}

function Features() {
  const features = [
    {
      id: 1,
      name: "Centralized Component Library",
      icon: <GrStorage className="text-sky-500 text-[32px]" />,
      description: "Organise all your react component in a centralized library.easy browse,search and access your saved components whenever you need."
      
    },
    {
      id: 2,
      name: "Reusable Components",
      icon: <IoLogoWebComponent className="text-sky-500 text-[32px]" />,
      description: "create and edit your components directly within our intuitive editor,write jsx code with syntax highlighting and instant previews",
      
    },
    {
      id: 3,
      name: "Version Control and History",
      icon: <FaHistory className="text-sky-500 text-[32px]" />,
      description: "Track changes and maintain different versions of your components.Revert to previous versions if needed and keep a history of modifications."
    }
  ];
  return (
    
    <section className="features-section pb-6 ">
      <AnimationEffect>
      <div className="mx-auto px-4">
        <h2 className="text-2xl uppercase font-semibold tracking-widest text-center  bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent pb-8">Key Features</h2>
        <div className="mt-7 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-8 ">
          {
            features.map((feature, index) => (
            
                <div             
              key={index}
                className="p-6  rounded-lg shadow-lg flex flex-col items-center z-10 backdrop-blur-sm bg-white/10"
              >
                <div className="w-20 h-20 rounded-full items-center justify-center flex bg-gray-900 ">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mt-6 text-center">
                  {feature.name}
                </h3>
                <p className="text-gray-400 text-[16px] text-center mt-2 w-[80%] "> {feature.description}</p>

              </div>
            
            ))
          }
        </div>
      </div>
      </AnimationEffect>
    </section>
  )

}


function Navbar() {
  const {user}=useUser();

  return (

    <div className='flex justify-between p-[8px] pt-4 px-6 max-sm:flex-col max-sm:items-center'>
      <Logo />
      {/* <MenuNavbar /> */}
       <div className="flex gap-2 ">
       <Buttons />
       {user?<ProfileAccount/>:""}
       </div>
    </div>
  );
}
function ProfileAccount(){
  return (
      <div className="flex gap-3 items-center items-center z-20 lg:mt-2 sm:mt-0">
          <div className="w-[36px] h-[37px] flex items-center justify-center rounded-full pb-2">
            <UserButton/>

          </div>
      </div>
  )
}

function CTAsection() {
  const {user}=useUser();
  const { darkThemeObject: { darkTheme },openProjectWindowObject:{setOpenProjectWindow} } = UseAppContext();
  return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <div className="lg:py-36 py-24 md:py-48 relative z-0 overflow-x-clip">                                                                                                                     
      <div className="absolute inset-0 size-[850px] rounded-full border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5" ></div>
      <div className="absolute inset-0 size-[1050px] rounded-full border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5" ></div>
      <div className="absolute inset-0 size-[1250px] rounded-full border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5" ></div>
      <OrbitCta size={800} rotation={-72}>
        <img src={StarImage.src} alt="Star" className=" size-28 opacity-80 filter invert opacity-20" />
      </OrbitCta>
      <OrbitCta size={600} rotation={3}>
        <img src={StarImage.src} alt="Star" className=" size-12 opacity-80 filter invert opacity-70" />
      </OrbitCta>
      <OrbitCta size={700} rotation={98}>
        <img src={StarImage.src} alt="Star" className=" size-8 opacity-60 filter invert opacity-70" />
      </OrbitCta>
      <OrbitCta size={430} rotation={-14}>
        <img src={StarImage.src} alt="Star" className=" size-8 opacity-60 filter invert opacity-20" />
      </OrbitCta>
      <OrbitCta size={440} rotation={79}>
        <img src={StarImage.src} alt="Star" className=" size-5 opacity-60 filter invert opacity-70" />
      </OrbitCta>
      <OrbitCta size={530} rotation={178}>
        <img src={StarImage.src} alt="Star" className=" size-10 opacity-60 filter invert opacity-70" />
      </OrbitCta>
      <div><OrbitCta size={710} rotation={144}>
        <img src={StarImage.src} alt="Star" className=" size-14 opacity-60 filter invert opacity-90" />
      </OrbitCta>
        <OrbitCta size={720} rotation={85}>
          <img src={StarImage.src} alt="Star" className="rounded-full size-3 filter invert opacity-60" />
        </OrbitCta>
        <OrbitCta size={520} rotation={-41}>
          <img src={StarImage.src} alt="Star" className=" size-2 rounded-full filter invert opacity-60" />
        </OrbitCta>
        <OrbitCta size={700} rotation={-15}>
          <img src={StarImage.src} alt="Star" className=" size-3 rounded-full filter invert opacity-80" />
        </OrbitCta>
        <div className='flex flex-col items-center gap-6 mx-16 '>

         <AnimationEffect>
         <h1 className={`text-center font-extrabold text-5xl max-md:text-5xl font-poppins tracking-tight ${darkTheme ? "text-white" : "text-slate-900"}`}>Build and Store <span className={`${darkTheme ? "text-white" : "text-sky-400"} `}>Components</span>  <span className="block">
            Using JSX Code with Tailwind
          </span></h1>
         </AnimationEffect>
           <AnimationEffect>          <p className={`max-sm:w-full font-poppins text-center font-normal text-xl text-gray-400 w-[650px] leading-8 `}> <span className='text-sky-500'>Build and store your custom components</span>, ready to <span className='text-sky-500'>reuse</span> whenever you need them. save time by using components from our growing library. Start exploring <span className='text-sky-500'>today!</span></p>
           </AnimationEffect>
         {user? <Link href="/dashboard">
          <AnimationEffect><button onClick={()=>setOpenProjectWindow(true)} className='bg-white text-gray-900 rounded-md p-[7px] px-4 hover:opacity-80 font-medium  text-xl relative z-30'>
            Get started
          </button></AnimationEffect>
          </Link>: <Link href="/sign-up">
          <AnimationEffect><button onClick={()=>setOpenProjectWindow(true)} className='bg-white text-gray-900 rounded-md p-[7px] px-4 hover:opacity-80 font-medium  text-xl relative z-30'>
            Get started
          </button></AnimationEffect>
          </Link>}
        </div>
      </div>
    </div>
  )
}



function Logo() {
  const { darkThemeObject: { darkTheme } } = UseAppContext();
  const { user } = useUser();
  return (
    <div className={` ${user?"mr-3":"mr-10"} flex gap-2 items-center `}>
      <CgComponents className='text-sky-600 text-[32px]' />
      {/* App Name */}
      <div className='flex gap-1 text-[22px]'>
        <span className={`${darkTheme ? "text-white" : "text-black"} font-medium  text-[22px]`}>RE<span className={`${darkTheme ? "text-slate-200" : "text-slate-900"} text-[28px] `}>UI</span>FY</span>
        {/* <span className='text-slate-600 font-medium'>shelf</span> */}
      </div>




    </div>

  )
}

function Buttons() {
  const { user } = useUser();

  const { darkThemeObject: { darkTheme } } = UseAppContext();


  return (
    <div className='flex gap-2  max-sm:mb-9 max-sm:w-full max-sm:mt-8 z-10'>
      {!user ? (
        <>
          <Link href="/sign-in">
            <button className='lg:mt-2 sm:mt-0 max-sm:w-full text-sm text-gray-950 bg-white  p-[8px] px-6 rounded-full hover:opacity-80'>
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className='lg:mt-2 sm:mt-0 max-sm:w-full text-sm  text-white bg-gray-700  p-[8px] px-6 rounded-full hover:opacity-60 '>
              Sign Up
            </button>
          </Link>
        </>
      ) : (
        <motion.div whileHover={{scale:1.1}}>
          <Link href='/dashboard'>
            <button className={`max-sm:w-full text-sm  ${darkTheme ? "text-gray-900 bg-white" : "bg-slate-900 text-slate-100"} lg:mt-2 sm:mt-0 p-[8px] px-4 rounded-full font-semibold cursor-pointer z-50 hover:opacity-80`}>your work</button>
          </Link>
        </motion.div>
      )}


    </div>
  )
}

function MenuNavbar() {
  const { openSideBarObject: { openSideBar, setOpenSideBar },
    openAllProjectsWindowObject: { openAllProjectsWindow, setOpenAllProjectsWindow },
    openAllComponentsWindowObject: { setOpenAllComponentsWindow },
    menuObject: { menu, setMenu }
  } = UseAppContext();

  const router = useRouter();

  
  function handleLinkClick(item: MenuItem) {
        
    
    setMenu((prevMenuItems) =>
      prevMenuItems.map((prevMenuItem) =>
        prevMenuItem.id === item.id ?
          { ...prevMenuItem, isSelected: true }


          : { ...prevMenuItem, isSelected: false }

      )
    )
    if (item.name === "About"){
      // setOpenAllProjectsWindow(true);
      router.push('/about');

    }
    if (item.name == "Contact"){
      // setOpenAllComponentsWindow(true);
    router.push('/services');

    }
    
    
  }
  return (
    <div className={`flex justify-center items-center fixed w-full z-10`}>
      <div className='flex gap-1 justify-center items-center p-0.5 border border-slate-600 rounded-full mr-12 backdrop-blur-sm bg-white/10 '>
        {menu.map((item, index) => (
          <div
            key={index}
            onClick={() => handleLinkClick(item)}
            className={`${item.isSelected ? "bg-white text-gray-900 hover:opacity-80" : "text-slate-400 hover:bg-gray-700 hover:text-slate-100"} text-sm font-semibold px-4 py-1.5 select-none cursor-pointer rounded-full flex items-center gap-2 transition duration-300`}
          >
            {item.name}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Page

