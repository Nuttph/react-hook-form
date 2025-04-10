import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
const Foot = () => {
  return (
    <div className=' bg-[#333] text-white flex p-10 flex-col'>
      <div className='flex flex-row justify-center gap-[200px] text-[16px]'>
        <div className='font-bold text-[50px]'>Logo</div>
        <ul className='flex flex-col gap-3'>
          <li className='mb-2'>Sitemap</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='mb-2'>Socials</li>
          <li>Facebook</li>
          <li>LinkIn</li>
          <li>instagram</li>
          <li>twitter</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='mb-2'>Head Office</li>
          <li className='w-[500px]'>Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565</li>
          <li className='mt-2'>News letter</li>
          <li className='border-b-1 pb-2 w-[240px] flex flex-row justify-between'>
            <input type="text" className='outline-none' placeholder='Enter your email address' />
            <MdOutlineMailOutline className='w-[25px] h-[25px]'/>
          </li>
        </ul>
      </div>
      <div className='flex flex-row justify-between px-[150px] mt-[50px] pb-[10px]'>
        <div className='border-b-2 border-white pb-2'>
          contact@lift.agency 
        </div>
        <div className='border-b-2 border-white pb-2'>
          (123) 456-7890
        </div>
        <div className='text-[12px]'>
          © 2020 Lift Media. All rights reserved.
        </div>
      </div>   
    </div>
  )
}

export default Foot