"use client";
import React from 'react'
import { UseAppContext } from '../ContextApi';
import { CgComponents } from "react-icons/cg";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
function page() {
  const router = useRouter();
  const handleClick = () => {
    // Navigate to the home page when div is clicked
    router.push('/');
  };
  return (
    <div className='min-h-screen bg-gray-900 text-gray-400'>
   <div onClick={handleClick} className=' cursor-pointer pt-2 pl-3'><Logo/></div>
      <div className=' text-2xl uppercase tracking-widest text-center  bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mt-[25px]'>terms of service</div>
      <div className='flex justify-center items-center sticky w-full'>
        <div className=' w-[750px] h-[600px] overflow-auto  bg-gray-800 mt-[50px] rounded-md p-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-gray-950'>


<h3 className='text-white mt-7'>1. Acceptance of Terms</h3>
<p className='pl-5 pt-1.5'>By using Reuify, you agree to be bound by these terms. If you do not agree, please do not use the app.</p>

<h3 className='text-white mt-7'>2. User Responsibilities</h3>
<p className='pl-5 pt-1.5'>Users are responsible for the content they create or store using the app. Any illegal or harmful content is prohibited.</p>

<h3 className='text-white mt-7'>3. Intellectual Property</h3>
<p className='pl-5 pt-1.5'>All content provided by Reuify is the intellectual property of Altamash Naseem. Unauthorized use, reproduction, or distribution is prohibited.</p>

<h3 className='text-white mt-7'>4. Limitation of Liability</h3>
<p className='pl-5 pt-1.5'>Reuify is provided "as is" without warranties of any kind. We are not liable for any damages or losses resulting from your use of the app.</p>

<h3 className='text-white mt-7'>5. Termination</h3>
<p className='pl-5 pt-1.5'>We reserve the right to terminate or suspend your account if you violate any of these terms.</p>

<h3 className='text-white mt-7'>6. Changes to Terms</h3>
<p className='pl-5 pt-1.5'>We may update these terms from time to time. Continued use of the app after changes means you accept the new terms.</p>

<h3 className='text-white mt-7'>7. Contact</h3>
<p className='pl-5 pt-1.5'>If you have any questions about these Terms of Service, please contact us at altamashnaseem7@gmail.com.</p>


        </div>
      </div>
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
            <p className="text-gray-400 text-sm">Copyright © 2024 ReUIfy, Inc. All rights reserved.</p>
             
            </div>
          <div className="lg:ml-[100px] pt-2 pl-8">
            <h5 className="text-white font-semibold mb-1">Legal</h5>
                 <div><Link href="/privacy" className="text-sm text-gray-400 hover:text-sky-400">Privacy</Link></div>
                 <div><Link href="/services" className="text-sm text-gray-400 hover:text-sky-400">Term of Service</Link></div>
          </div>
           <div className="lg:ml-[50px] lg:p-0 p-2 pt-8 ">
           <h5 className="text-white font-semibold mb-2">Follow Us</h5>
          <div className="flex gap-5"><Link href="facebook" className="text-gray-400 hover:text-sky-400"><FacebookOutlinedIcon/></Link>
          <Link href="twitter" className="text-gray-400 hover:text-sky-400"><XIcon/></Link>
          <Link href="instagram" className="text-gray-400 hover:text-sky-400"><InstagramIcon/></Link></div>
           </div>
           <div className="text-white font-semibold lg:mb-2 lg:pt-0 lg:p-0 pt-8 p-2 ">
           <h5 className="text-white font-semibold mb-2">Contact Us</h5>
            <p className="text-gray-400 text-sm text-rose-700">altamashnaseem7@gmail.com</p>
           </div>

      </div>
    </div>
  )
}
function Logo() {
  
  return (
    <div className="flex gap-2 items-center  ">
      <CgComponents className='text-sky-400 text-[32px]' />
      {/* App Name */}
      <div className='flex gap-1 text-[22px]'>
        <span className={`text-white font-medium  text-[22px]`}>RE<span className={`text-slate-200 text-[28px] `}>UI</span>FY</span>
        {/* <span className='text-slate-600 font-medium'>shelf</span> */}
      </div>




    </div>

  )
}

export default page