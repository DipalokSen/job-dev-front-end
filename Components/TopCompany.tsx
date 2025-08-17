"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from './Heading';

import "react-multi-carousel/lib/styles.css";
import { companies } from '@/constant/constant';
import TopCompanyCard from './TopCompanyCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TopCompany = () => {
  return (
    <div className='pt-12 pb-11'>

        <Heading 
          heading='Top Company Registered'
          subheading="Some of the companies we've helped recruit excellent applicants over the years."
          />

          <div className='w-[80%] mx-auto mt-16'>

            <Carousel
 
  showDots={true}
  responsive={responsive}
  
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}

>

    
  {companies.map((company)=>{
    return <TopCompanyCard key={company.id} company={company}/> 
    
        
    
  })}
</Carousel>;


          </div>
      
    </div>
  )
}

export default TopCompany
