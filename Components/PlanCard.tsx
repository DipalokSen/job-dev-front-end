import React from 'react'
import { BiCheck } from 'react-icons/bi';


type Props={
    item: {
    plan_id: number;
    plan_name: string;
    price: number;
    job_postings: number;
    featured_jobs: number;
    display_duration_days: number;
    support_type: string;
    status: string;
    };
}

const PlanCard = ({item}:Props) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-12 py-12   m-4 hover:shadow-xl transition-shadow duration-300 relative mt-12 dark:bg-gray-700'>
      
     <div className={`absolute top-4 right-4 px-6 py-1.5 rounded-xl text-xs ${item.plan_name==='Standard'?"block":"hidden"} bg-green-700 text-white`}>Recomended</div>


      <h1 className='text-cyan-800 text-3xl'>{item.plan_name}</h1>
      <p className='mt-3'><span className='text-3xl font-bold'>${item.price}</span>/Monthly</p>

  <div className='mt-6'>




       <div className='flex items-center gap-3 '>
        <BiCheck className='text-3xl'/>
        <p className=''>1 Job Posting</p>

      </div>

      <div className='flex items-center gap-3 '>
        <BiCheck className='text-3xl'/>
        <p className=''>Premium Support 24/7</p>

      </div>



        <div className='flex items-center gap-3 '>
        <BiCheck className='text-3xl'/>
        <p className=''>0 featured job</p>

      </div>




       <div className='flex items-center gap-3 '>
        <BiCheck className='text-3xl'/>
        <p className=''>Job displayed for 20 days</p>

      </div>
  </div>

   <div className='px-8 py-2 rounded-xl bg-gray-400 hover:bg-blue-700 text-white text-center mt-8 dark:bg-white dark:text-black'>View Profile</div>

    </div>
  )
}

export default PlanCard
