
"use client";
import React from 'react'
import { IconType } from 'react-icons';

import Tilt from 'react-parallax-tilt';



type Props = {
    category: {        
        
        id: number;
        categoryName: string,
            openPositions: string,
            icon: IconType,
}
}
const JobCard = ({category}:Props) => {
  return (
   <Tilt scale={1.6} transitionSpeed={1000}>

    <div className='p-6 dark:bg-gray-800 bg-gray-100 rounded-lg'>

      <div className='w-14 h-14 rounded-full bg-red-200 flex flex-col items-center justify-center mx-auto'>
        <category.icon className='text-4xl text-blue-500 text-center ' />
      </div>
         <h1 className='text-center mt-6 font-bold text-md dark:text-white'>{category.categoryName}</h1>
         <p className='text-center mt-4 text-gray-400'>{category.openPositions}</p>
    </div>

   </Tilt>
  )
}

export default JobCard
