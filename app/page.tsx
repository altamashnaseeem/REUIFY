"use client";
import { CgComponents } from "react-icons/cg";
import { GrStorage } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { useUser } from "@clerk/nextjs";

import Link from 'next/link';

  function Page(){
     return (
      <>
        <div className='bg-white pb-20  '>
      <Navbar/>
      <CTAsection/>
         </div>
         <Features/>
      </>
    
     )
  }
function Features(){
  const features=[
    {
      id:1,
      name:"Centralized Component Library",
      icon:<GrStorage className="text-sky-500 text-[32px]" />,
      description:"Organise all your react component in a centralized library.easy browse,search and access your saved components whenever you need."

    },
    {
      id:2,
      name:"Reusable Components",
      icon:<IoLogoWebComponent className="text-sky-500 text-[32px]" />,
      description:"create and edit your components directly within our intuitive editor,write jsx code with syntax highlighting and instant previews",

    },
    {
      id:3,
      name:"Version Control and History",
      icon:<FaHistory  className="text-sky-500 text-[32px]"/>,
      description:"Track changes and maintain different versions of your components.Revert to previous versions if needed and keep a history of modifications."
    }
  ];
  return(
    <section className="features-section bg-slate-50 py-12">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-slate-900">Key Features</h2>
         <div className="mt-12 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 gap-8 ">
     {
      features.map((feature,index)=>(
        <div key={index} 
        className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center "
        >
         <div className="w-20 h-20 rounded-full items-center justify-center flex bg-sky-100 ">
          {feature.icon}
         </div>
     <h3 className="text-lg font-semibold text-sky-500 mt-6 text-center text-slate-800">
      {feature.name}
     </h3>
     <p className="text-slate-700 text-[16px] text-center mt-2 w-[80%] "> {feature.description}</p>
         
        </div>
      ))
     }
         </div>
      </div>
    </section>
  )

}

 function Navbar() {
  return (
    
     <div className='flex justify-between p-[8px] px-6 max-sm:flex-col max-sm:items-center'>
     <Logo/>
     <Buttons/>
     
    </div> 
   
    
  
   
  );
}

function CTAsection(){
return (
  <div className='flex flex-col items-center gap-6 mx-16 mt-[120px]'>
    
  <h1 className=' text-center font-bold text-4xl font-poppins text-slate-900'>Build and Store <span className='text-sky-400'>Components</span> – Start Creating Today!</h1>
    <p className='max-sm:w-full font-poppins text-center font-normal text-xl text-slate-700 w-[650px] leading-8 '>Take your React projects to the next level with our easy-to-use platform. <span className='text-sky-500'>Build and store your custom components</span>, ready to <span className='text-sky-500'>reuse</span> whenever you need them. save time by using components from our growing library. Whether you’re new to <span className='text-sky-500'>React</span> or an experienced developer,our tool helps you create faster and smarter. Start exploring <span className='text-sky-500'>today!</span></p>
    <button className='bg-slate-900 rounded-md p-[10px] px-7 hover:opacity-80 font-medium text-white text-xl'>
      Get started
    </button>
</div>
)
}


 function Logo(){
  return (
    <div className="flex gap-2 items-center  ">
       <CgComponents className='text-sky-400 text-[32px]'/>
      {/* App Name */}
         <div className='flex gap-1 text-[22px]'>
         <span className='font-medium text-black text-[22px]'>RE<span className='text-[28px] text-slate-900'>UI</span>FY</span>
         {/* <span className='text-slate-600 font-medium'>shelf</span> */}
         </div>
        

     

    </div>

  )
}

function Buttons(){
 const {user}=useUser();


  
    
     return (
       <div className='flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8'>
       {!user?(
        <>
         <Link href="/sign-in">
          <button className=' max-sm:w-full text-sm  text-white bg-slate-900 p-[8px] px-6 rounded-md hover:opacity-80'>
           Sign In
          </button>
        </Link>
        <Link href="/sign-up">
        <button className='max-sm:w-full text-sm border border-slate-900 text-slate-900  p-[8px] px-6 rounded-md hover:opacity-60'>
           Sign Up
          </button>
        </Link>
        </>
       ):(
        <>
         <Link href='/dashboard'>
         <button className="max-sm:w-full text-sm  text-white bg-slate-900 p-[8px] px-6 rounded-md hover:opacity-80">dashboard</button>
         </Link>
        </>
       )}
        
        
       </div>
     )
}
export default Page

