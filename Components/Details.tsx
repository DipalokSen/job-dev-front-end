"use client"
import React from 'react'
import Heading from './Heading'
import { categoryData } from '@/constant/constant'
import JobCard from './JobCard'

const Details = () => {
  return (
    <div className='pb-11 pt-12'>
      
      <Heading heading={'Popular Job Categories'} subheading={'2020 jobs live - 293 added today.'}/>

      <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-7'>

      {categoryData.map((category,index)=>{
  
        return (
          
           <JobCard category={category} key={category.id}/>

        )

      })}

      </div>
    </div>
  )
}

export default Details
