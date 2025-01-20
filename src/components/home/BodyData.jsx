import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'
import { OverviewHeader } from './OverviewHeader'
import { LineChart } from './LineChart'
import { TrafficDL } from './TrafficDL'
import { OverviewHeaderData } from '../../utils/data/apiData'
import { TimeDrop } from '../common/TimeDrop'

export const BodyData = () => {
  return (
    <div className=' dark:text-white'>
      <div className='flex justify-between'>
        <h2 className='text-lg font-medium '>Overview</h2>
        <div>
          <TimeDrop/>
        </div>
      </div>
      {/* overview header */}
      <OverviewHeader 
      OHeaderData={OverviewHeaderData} 
      color1={"bg-bg2"} 
      color2={"bg-bg3"}
      color3={"text-[#1C1C1C]"}
      color4={"text-[#1C1C1C]"}
      color5={"text-[#1C1C1C]"}
      />

      {/* line chart */}
      <LineChart/>

      {/* Traffic By Device & Location */}
       <TrafficDL/>

    </div>
  )
}


