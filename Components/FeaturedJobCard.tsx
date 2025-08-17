import React from 'react'
import { BiBriefcase } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'



type Props={
    job: {
    id: number,
    image: string,
    name: string,
    location: string,
    position: string,
    jobType: string,
    urgency: string,
        
    }
}




const FeaturedJobCard = ({job}:Props) => {
  return (
    <div className='p-8 dark:bg-gray-800 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300 relative '>
      
      <div className='absolute w-6 h-6 rounded-full flex flex-col items-center top-4 right-4 cursor-pointer'>
        <BsBookmark className='w-4 h-4'/>
      </div>

      <div className='flex items-center space-x-5'>
        <img src={job.image} alt="job" width={50} height={50}/>

        <div className='h'>
  
      <h1 className='text-base'>{job.name}</h1>
   <div className='flex items-center gap-4'>

 <div className='flex items-center gap-2 mt-4'>
        <BiBriefcase className='text-gray-500' />
        <p className='text-gray-500'>{job.position}</p>
      </div>


       <div className='flex items-center gap-2 mt-4'>
        <GrLocation className='text-gray-500' />
        <p className='text-gray-500'>{job.location}</p>
      </div>
   </div>
     
        </div>
      </div>


      <div className='flex items-center mt-4 gap-4 '>

    <div className= {`rounded-2xl px-6 py-1  text-xs text-center ${job.urgency==='Urgent'?'bg-red-400':'bg-green-400'}`}>
        {job.urgency}
    </div>

     <div className='rounded-2xl px-6 py-1 bg-blue-300 text-xs text-center'>
        {job.jobType}
    </div>


      </div>
      
    </div>
  )
}

export default FeaturedJobCard
