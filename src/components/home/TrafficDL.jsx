import React from 'react'
import { TrafficByDevice } from './TrafficByDevice'
import { TrafficByLocation } from './TrafficByLocation'

export const TrafficDL = () => {
  return (
    <div className='pt-6'>
      <div className='grid sm:grid-cols-2 gap-4 '>
        <div className='sm:col-span-1 bg-bg1 rounded-xl sm:p-6 p-2 col-span-2 overflow-x-auto'>
        <h3 className="font-semibold text-t14  mb-6">Traffic by Device</h3>
          <TrafficByDevice/>
        </div>
        <div className='sm:col-span-1 bg-bg1 rounded-xl sm:p-6 p-2 col-span-2 overflow-x-auto'>
          <h3 className="font-semibold text-t14  mb-4">Traffic by Location</h3>
          <TrafficByLocation/>
        </div>
      </div>
    </div>
  )
}
