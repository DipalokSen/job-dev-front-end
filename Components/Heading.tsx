import React from 'react'

type Props={
    heading:string;
    subheading:string;
}

const Heading = ({heading,subheading}:Props) => {
  return (
    <div >
      <h1 className='text-center text-black text-2xl font-bold dark:text-white'>{heading}</h1>
      <p className='text-center text-gray-400'>{subheading}</p>
    </div>
  )
}

export default Heading
