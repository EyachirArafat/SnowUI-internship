import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from 'react-icons/tb'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { IoSunnyOutline } from 'react-icons/io5';
import { MdHistory } from 'react-icons/md';
import { GoBell } from 'react-icons/go';
import SearchIcon from '@mui/icons-material/Search';




function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export const TopBar = ({toggleLeftSidebar}) => {
  return (
    <div className='px-7 py-5 border-b '>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center gap-2'>
          <button onClick={toggleLeftSidebar}>
            <TbLayoutSidebarLeftCollapse 
              size={22} 
              className='cursor-pointer '
            />
          </button>
          <FaRegStar size={22} className='cursor-pointer'/>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Dashboards
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/dashboards/default/"
              >
                Default
              </Link>
              {/* <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography> */}
            </Breadcrumbs>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='p-1 rounded-lg bg-bg1 group'>
          <SearchIcon/>
          <input type="text" className='focus:ring-0 focus:outline-0 bg-bg1 ' placeholder='search...'/>
          </div>
          
          <IoSunnyOutline size={22} className='cursor-pointer'/>
          <MdHistory size={22} className='cursor-pointer'/>
          <GoBell size={22} className='cursor-pointer'/>
          <TbLayoutSidebarRightCollapse size={22} className='cursor-pointer'/>
        </div>

      </div>
    </div>
  )
}










