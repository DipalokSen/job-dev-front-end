import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'



type Props={
    showNav: boolean;
    closenav: () => void;
}
const MobileNAv = ({showNav,closenav}:Props) => {
  
  const navOpen= showNav ? "translate-x-0" : "translate-x-[100%]";
  
    return (
    <>
    <div className={`fixed ${navOpen} inset-0 transform transition-all duration-300 ease-in-out  z-[10000] bg-black opacity-70 right-0 h-screen w-full `}>
</div>
 
 <div className={`text-white fixed ${navOpen} bg-cyan-900 transition-all duration-1000 delay-300 w-[80%] sm:w-[80%] h-full justify-center flex flex-col right-0 gap-6 z-[10001]`}>

{NavLinks.map((link)=>(
    <Link key={link.id} href={link.url}>

     <p className='text-white border-b-[1.5px] w-fit text-2xl sm:text-[30px] ml-2.5 '>{link.label}</p>
    </Link>
      
))}
    

    <CgClose className='text-3xl absolute top-4 right-4 cursor-pointer' onClick={closenav}/>
 </div>
    </>

  )
}

export default MobileNAv
