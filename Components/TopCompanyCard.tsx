import React from 'react'
import Heading from './Heading';
import { GrLocation } from 'react-icons/gr';

type Props={
    company: {
    id: number;
    image: string;
    name: string;
    location: string;
    position: string;
    }
}

const TopCompanyCard = ({company}:Props) => {
  return (
    <div className='p-6 dark:bg-gray-800 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300 m-3 '>
      
       <img src={company.image} alt="" width={100} height={100} className='mx-auto object-cover'/>


       <h1 className='text-center mt-4'>{company.name}</h1>

       <div className='flex items-center space-x-1 mx-auto justify-center mt-2 text-sm '>
        <GrLocation/>
        <p>{company.location}</p>
       </div>


       <div className='px-6 py-2 bg-blue-100 mt-4 text-center rounded-lg hover:bg-blue-500 dark:bg-gray-600'>{company.position}</div>

    </div>
  )
}

export default TopCompanyCard
