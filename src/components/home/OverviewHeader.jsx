import React from 'react'
import { OverviewHeaderData } from '../../utils/data/apiData'
import { div } from 'framer-motion/client'

export const OverviewHeader = () => {
  return (
    <div className='pt-4 pb-7'>
      <div className='grid md:grid-cols-4 gap-7 sm:grid-cols-2 grid-cols-1'>
      {OverviewHeaderData.map((headerData, id)=>(
        <div key={id} className={`p-6 rounded-xl ${id%2 === 0 ? "bg-bg2":"bg-bg3"}`}>
          <h1 className='text-t14'>{headerData.header}</h1>
          <div className='flex justify-between items-center pt-4'>
            <p className='text-[#1C1C1C] text-2xl font-semibold'>{headerData.users}</p>
            <div className='flex gap-1 items-center'>
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
