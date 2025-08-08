"use client"
import React from 'react'
import Nav from './Nav'
import MobileNAv from './MobileNAv'
import { useState } from 'react'

const ResponsiveNav = () => {
 
   const [showNav, setshowNav] = useState(false);

    const onNav = () => setshowNav(true);
    const offNav = () => setshowNav(false);
    
 
    return (
    <>
    <Nav openav={
        onNav}/>
    <MobileNAv showNav={showNav} closenav={offNav}/>
    
    </>
      
    
  )
}

export default ResponsiveNav
