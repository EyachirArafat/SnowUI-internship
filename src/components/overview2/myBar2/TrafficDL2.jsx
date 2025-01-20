import React from 'react'
import { TrafficByDevice2 } from './TrafficByDevice2'
import { TrafficByLocation2 } from './TrafficByLocation2'
import { DotHorizontal } from '../../common/DotHorizontal'


export const TrafficDL2 = () => {
  return (
    <div className='py-6'>
      <div className='grid sm:grid-cols-2 gap-4 '>
        <div className='sm:col-span-1 dark:bg-bg5/5 bg-bg1  rounded-xl sm:p-6 p-2 col-span-2 overflow-x-auto'>
        <div className='flex justify-between flex-wrap'>
          <h3 className="font-semibold text-[#007AFF] text-t14  mb-6">Traffic by Device</h3>
          <DotHorizontal className="h-5 p-1"/>
        </div>
          <TrafficByDevice2/>
        </div>
        <div className='sm:col-span-1 dark:bg-bg5/5 bg-bg1 rounded-xl sm:p-6 p-2 col-span-2 overflow-x-auto'>
        <div className='flex justify-between flex-wrap'>
          <h3 className="font-semibold text-[#34C759] text-t14  mb-6">Traffic by Location</h3>
          <DotHorizontal className="h-5 p-1"/>
        </div>
          <TrafficByLocation2/>
        </div>
      </div>
    </div>
  )
}
