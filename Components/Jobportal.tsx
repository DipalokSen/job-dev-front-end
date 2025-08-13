import React from 'react'
import { FaMap } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'

const Jobportal = () => {
  return (
    <div className=' w-full max-w-4xl mx-auto mt-7'>
      
    <div className='flex flex-col md:flex-row bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden'>


    <div className='flex items-center border-b md:border-b-0 md:border-r w-full md:w-1/2 px-4 py-3 md:p-5 gap-3'>

      <MdSearch className='text-xl text-gray-500'/>

      <input type="text" placeholder='Job Tittle Or Company' className='outline-0 '/>
    </div>

<div className='flex items-center border-b md:border-b-0 md:border-r w-full md:w-1/2 px-4 py-3 md:p-5 gap-3'>

      <FaMap className='text-xl  text-gray-500'/>

      <input type="text" placeholder='City Or Post Code' className='outline-0 '/>
    </div>



    <button className='bg-blue-600 text-white   text-center py-3 sm:py-6 w-full md:w-auto min-w-[144px] text-md font-bold'>Find-jobs</button>

    </div>
      
    </div>
  )
}

export default Jobportal
