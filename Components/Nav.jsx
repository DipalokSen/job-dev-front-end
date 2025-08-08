"use client"
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { LuNetwork } from 'react-icons/lu'
import { useState } from 'react'
import { useEffect } from 'react'





const Nav = () => {
  
  
  
  const [bgNav, setbgNav] = useState(false);


useEffect(() => {
  const handle=()=>{
    if(window.scrollY >= 90){

      setbgNav(true);
    }
    else{
      setbgNav(false);
    }  
  }



    window.addEventListener('scroll', handle);

    return ()=>window.removeEventListener('scroll', handle);

  
}, []);

  
  
  return (
    <div className={`w-full transition-all duration-1000 h-[12vh] ${bgNav?"bg-white shadow-md":"bg-transparent"} fixed top-0 left-0 z-50`}>

        <div className='flex items-center justify-between h-full w-[92%] mx-auto '>


            <div className="flex items-center sm:space-x-20">
                
                <div className="flex items-center space-x-2">

                    <div className='w-10 h-10 bg-cyan-800 flex items-center justify-center rounded-full flex-col'>
                        <LuNetwork className='w-8 h-8 text-white'/>
                    </div>

                   <h1 className='text-cyan-800 font-bold md:text-2xl hidden sm:block'>CyberJob</h1>

                </div>

          

          <div className='hidden lg:flex items-center space-x-10'>

              {NavLinks.map((link)=>(
                <Link href={link.url} key={link.id} className='text-cyan-800 font-semibold hover:text-cyan-600 transition-all duration-300'>
                  
                  <p>{link.label}</p>

                  </Link>
              ))}

            </div>

            </div>




            



         <div className='flex items-center space-x-4'>

            <button className='py-2.5 px-8 text-xs md:text-sm bg-gray-100 hover:bg-gray-300  rounded-sm transition-all duration-1000'>Login/register</button>
            <button className='py-2.5 px-8 text-xs md:text-sm hidden sm:block bg-cyan-600 hover:bg-cyan-800  rounded-sm transition-all duration-1000'>Job post</button>

            {/* darkbutton */}
            <HiBars3BottomRight className='w-8 h-8 text-black cursor-pointer lg:hidden'/>

         </div>








           


        </div>
      
    </div>
  )
}

export default Nav
