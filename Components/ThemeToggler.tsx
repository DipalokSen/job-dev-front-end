"use client";
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';
const ThemeToggler = () => {
  
  const [mounted, setmounted] = useState(false);
  const{theme,setTheme,systemTheme}=useTheme()

  useEffect(() => {
    setmounted(true);
  }, []);
  
  if(!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  
    return (
    <button className='p-2 transition w-11 h-11 bg-blue-950 dark:bg-white rounded-full flex flex-col justify-center items-center text-white' onClick={()=>setTheme(currentTheme === "dark" ? "light" : "dark")}    >
     
     {currentTheme==="dark"?<BiSun/> : <BiMoon/>}
    </button>
  )
}

export default ThemeToggler
