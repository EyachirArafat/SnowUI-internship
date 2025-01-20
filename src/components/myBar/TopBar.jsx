import React, { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from 'react-icons/tb'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { MdHistory } from 'react-icons/md';
import { GoBell } from 'react-icons/go';
import SearchIcon from '@mui/icons-material/Search';
import { cn } from '../../utils/lib/cn';


export const TopBar = ({toggleLeftSidebar, toggleRightSidebar, TBclass, BCPath1, BCPath2}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <header className={cn('px-7 py-5 border-b dark:border-b-bg5/10 fixed top-0 w-full  dark:text-white z-30 shadow-md',TBclass)} >
      <div className='flex justify-between sm:items-center items-start'>
        <div className='flex md:flex-row flex-col justify-start md:items-center gap-2'>
          <button onClick={toggleLeftSidebar}>
            <TbLayoutSidebarLeftCollapse 
              size={22} 
              className='cursor-pointer md:inline-block hidden'
            />
          </button>
          <FaRegStar size={22} className='cursor-pointer'/>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/Dashboards" >
                <span className='sm:text-base text-[12px] dark:text-white'>{BCPath1}</span>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/dashboards/default/"
                className='dark:text-white'
              >
                <span className='sm:text-base text-[12px] dark:text-white'>{BCPath2}</span>
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <div className='flex md:items-center md:flex-row flex-col-reverse gap-2'>
          <div className='p-1 sm:inline hidden rounded-lg bg-bg1 dark:bg-bg5/15 dark:text-white text-nowrap'>
          <SearchIcon/>
          <input type="text" className='focus:ring-0 focus:outline-0 bg-bg1 dark:bg-bg5/0 dark:text-white' placeholder='search...'/>
          </div>
          
          <div className='flex items-center gap-2 justify-end'>
          <button onClick={handleDarkModeToggle}>
              {isDarkMode ? (
                <IoMoonOutline size={22} className="cursor-pointer" />
              ) : (
                <IoSunnyOutline size={22} className="cursor-pointer" />
              )}
            </button>
          <MdHistory size={22} className='cursor-pointer'/>
          <GoBell size={22} className='cursor-pointer'/>
          <button onClick={toggleRightSidebar}>
            <TbLayoutSidebarRightCollapse 
            size={22} 
            className='cursor-pointer md2:inline-block hidden'
            />
          </button>
          </div>
        </div>

      </div>
    </header>
  )
}

