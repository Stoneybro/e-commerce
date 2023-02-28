import React, { useState } from 'react'
import {FiSearch, FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [toggle,setToggle]=useState(true)
  return (
    
    <div className='fixed w-full'>
        <div className='hidden lg:flex  py-2 px-4 items-center  border-black border-b-[1px] text-sm'>
            <div className="flex md:gap-3 lg:gap-6  flex-1 ">
                    <Link>New Arrivals</Link>
                    <Link>Women</Link>
                    <Link>Men</Link>
                    <Link>Explore</Link>
            </div>
            <div className=" flex-1 flex justify-center font-bold text-xl">BALENCIAGA</div>
            <div className="flex gap-6 flex-1 justify-end">
                <Link>Signup</Link>
                <Link>Login</Link>
            </div>
        </div>


        {/* MOBILE NAV BAR */}
                <div className="lg:hidden py-2 px-4 items-center  border-black border-b-[1px] text-sm relative ">
                        <button className='absolute left-4 top-3' onClick={()=>setToggle(!toggle)}> <FiMenu size={'1.6rem'} /></button>
                        <div className="flex justify-center font-bold text-2xl">BALENCIAGA</div>
        </div>

        {/* //////////////////////////// */}


        <div className="flex  py-2 px-4 border-b-[1px] border-black">
            <div className=' relative w-full'>
                   <div className='absolute '> <FiSearch size={'1.5rem'} /></div>
                <input type="text" name="search" id="search" placeholder='WHAT ARE YOU LOOKING FOR?' className='px-8 text-sm w-full outline-none' />
            </div>
           
        </div>
        <div className={ `flex overflow-hidden flex-col ${toggle&&'h-0 pointer-events-none '} lg:hidden ` }>
            <div className='flex flex-col'>
            <div className="py-[1.25rem] px-3 border-b-[1px] border-black">NEW ARRIVALS</div>
            <div className="py-[1.25rem] px-3 border-b-[1px] border-black">MEN</div>
            <div className="py-[1.25rem] px-3 border-b-[1px] border-black">WOMEN</div>
            <div className="py-[1.25rem] px-3 border-b-[1px] border-black">EXPLORE</div>
            </div>
          
            <div className='flex flex-col mt-32 text-sm' >
                <div className=" py-2 px-3"> LOGIN</div>
                <div className=" py-2 px-3"> LANGUAGE: ENGLISH</div>
                <div className=" py-2 px-3"> CLIENT SERVICES</div>
            </div>
        </div>
 
    </div>
  )
}

export default Navbar