import React from 'react'
import Heading from './Heading'
import { plan } from '@/constant/constant'
import PlanCard from './PlanCard'

const Pricing = () => {
  return (
    <div className='pb-12 pr-12'>
        

         <Heading heading='Pricing Packages' subheading='Lorem ipsum dolor sit amet elit, sed do eiusmod tempor.'/>


         <div className='w-[80%] mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3'>


           {plan.map((item)=>{
            return (
              <PlanCard key={item.plan_id} item={item}/>
            )
           })}

         </div>



    </div>
  )
}

export default Pricing
