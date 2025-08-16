import React from 'react'
import { BsBookmark } from 'react-icons/bs'



type Props={
    job: {
    id: string,
    image: string,
    name: string,
    location: string,
    position: string,
        
    }
}




const FeaturedJobCard = ({job}:Props) => {
  return (
    <div className='p-8 dark:bg-gray-800 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300 relative '>
      
      <div className='absolute w-6 h-6 rounded-full flex flex-col items-center top-4 right-4 cursor-pointer'>
        <BsBookmark className='w-4 h-4'/>
      </div>
      
    </div>
  )
}

export default FeaturedJobCard
