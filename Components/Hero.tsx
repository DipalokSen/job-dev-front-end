import React from 'react'
import Jobportal from './Jobportal'

const Hero = () => {
  return (
    <div className='relative flex flex-col justify-center w-full h-screen '>
       

       <div className='w-[90%]  md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        
        
<div className='text'>
<h1 className='text-3xl md:text-6xl font-bold'>Join us & Explore Thousands of Jobs</h1>
         <p className='font-medium mt-3'>Find Jobs, Employment & Career Opportunities</p>

         <Jobportal/>

         <div className='flex items-center w-full mt-5 gap-4'>
          <span className='font-bold'>Popular Searches :</span>
          <span className='text-gray-500'>Designer , Developer , Web , IOS , PHP , Senior , Engineer,</span>
         </div>
</div>
         

         <div className='img  hidden mx-auto xl:block'>

          <img src="/images/hero.png" alt="" />
         </div>
        
        
        </div>



    </div>
  )
}

export default Hero
