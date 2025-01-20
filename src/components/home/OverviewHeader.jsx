import React from 'react'

export const OverviewHeader = ({OHeaderData, color1, color2, color3, color4, color5}) => {
  return (
    <div className='pt-4 pb-7'>
      <div className='grid md:grid-cols-4 sm:gap-6 gap-4 sm:grid-cols-2 grid-cols-1'>
      {OHeaderData.map((headerData, id)=>(
        <div key={id} className={`p-6 rounded-xl group cursor-pointer ${id%2 === 0 ? color1 : color2}`}>
          <h1 className={`text-t14 hover:scale-105 transition-all duration-200 ${color3}`}>{headerData.header}</h1>
          <div className='flex justify-between flex-wrap items-center pt-4'>
            <p className={`text-2xl font-semibold hover:scale-105 transition-all duration-200 ${color4}`}>{headerData.users}</p>
            <div className={`flex gap-1 items-center hover:scale-105 transition-all duration-200 ${color5}`}>
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
