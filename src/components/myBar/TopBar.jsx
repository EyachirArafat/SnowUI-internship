import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from 'react-icons/tb'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { IoSunnyOutline } from 'react-icons/io5';
import { MdHistory } from 'react-icons/md';
import { GoBell } from 'react-icons/go';
import SearchIcon from '@mui/icons-material/Search';
import { cn } from '../../utils/lib/cn';


export const TopBar = ({toggleLeftSidebar, toggleRightSidebar, TBclass}) => {
  return (
    <header className={cn('px-7 py-5 border-b fixed top-0 md2:left-[15%] md2:w-[65%] w-[100%] bg-white  z-10',TBclass)}>
      <div className='flex justify-between sm:items-center items-start'>
        <div className='flex md:flex-row flex-col justify-start md:items-center gap-2'>
          <button onClick={toggleLeftSidebar}>
            <TbLayoutSidebarLeftCollapse 
              size={22} 
              className='cursor-pointer md2:inline-block hidden'
            />
          </button>
          <FaRegStar size={22} className='cursor-pointer'/>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/Dashboards" >
                <span className='sm:text-base text-[12px] '>Dashboards</span>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/dashboards/default/"
              >
                <span className='sm:text-base text-[12px] '>Default</span>
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <div className='flex md:items-center md:flex-row flex-col-reverse gap-2'>
          <div className='p-1 sm:inline hidden rounded-lg bg-bg1 text-nowrap'>
          <SearchIcon/>
          <input type="text" className='focus:ring-0 focus:outline-0 bg-bg1 ' placeholder='search...'/>
          </div>
          
          <div className='flex items-center gap-2 justify-end'>
          <IoSunnyOutline size={22} className='cursor-pointer'/>
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

