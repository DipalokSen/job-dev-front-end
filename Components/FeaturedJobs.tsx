import React from 'react'
import Heading from './Heading'
import FeaturedJobCard from './FeaturedJobCard'
import { CompanyData } from '@/constant/constant'

const FeaturedJobs = () => {
  return (
    <div className='pt-14 pr-14'>

        <Heading 
          heading='Featured Jobs'
          subheading    ='Explore the latest job opportunities in various categories.' 
          />

          <div className="w-[90%] sm:w-[80%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-3 bg-purple-500">
            {
                CompanyData.map((job)=>{
                    return (
                        <div key={job.id} className='p-4'>
                            <FeaturedJobCard job={job} />
                        </div>
                    )
                })
            }
          </div>



      
    </div>
  )
}

export default FeaturedJobs
