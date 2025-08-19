import React from 'react'
import { BiCheck } from 'react-icons/bi'

const Info = () => {
  return (
    <div className='pb-12 pr-12'>

     <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
        <img src="/images/a.png" alt="Hero Images" width={700} height={700} />
       <div className='flex flex-col gap-6 items-start'>
       <h1 className='text-5xl font-bold '>Get applications from the world best talents.</h1>
       <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
        <div className='flex gap-2 items-center'>
            <BiCheck className='text-4xl text-red-500'/>
            <p>Bring to the table win-win survival</p>
        </div>

        <div className='flex gap-2 items-center'>
            <BiCheck className='text-4xl text-red-500'/>
            <p>Bring to the table win-win survival</p>
        </div>



     


        <div className='flex gap-2 items-center'>
            <BiCheck className='text-4xl text-red-500'/>
            <p>But I must explain to you how all this</p>
        </div>


        <div className='px-12 py-3 rounded-xl bg-blue-800 text-white'>Post a job</div>


       </div>
       
     </div>

    


    </div>

  )
}

export default Info
