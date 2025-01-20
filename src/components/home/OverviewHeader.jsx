import React from 'react'
import { OverviewHeaderData } from '../../utils/data/apiData'
import { div } from 'framer-motion/client'

export const OverviewHeader = () => {
  return (
    <div className='pt-4 pb-7'>
      <div className='grid md:grid-cols-4 gap-7 sm:grid-cols-2 grid-cols-1'>
      {OverviewHeaderData.map((headerData, id)=>(
        <div key={id} className={`p-6 rounded-xl group cursor-pointer ${id%2 === 0 ? "bg-bg2":"bg-bg3"}`}>
          <h1 className='text-t14 hover:scale-105 transition-all duration-200 dark:text-black'>{headerData.header}</h1>
          <div className='flex justify-between flex-wrap items-center pt-4'>
            <p className='text-[#1C1C1C] text-2xl font-semibold hover:scale-105 transition-all duration-200'>{headerData.users}</p>
            <div className='flex gap-1 items-center hover:scale-105 transition-all duration-200 dark:text-black'>
              <p>{headerData.percentage}</p>
              <p>{headerData.parameter}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
