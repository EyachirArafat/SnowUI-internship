import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'
import { OverviewHeader } from '../home/OverviewHeader'
import { OverviewHeaderData } from '../../utils/data/apiData'
import { LineChart2 } from './myBar2/LineChart2'
// import LineChart from '../Icons'
import { TrafficDL2 } from './myBar2/TrafficDL2'

export const BodyData2 = () => {
  return (
    <div className=' dark:text-white'>
      {/* overview header */}
      <OverviewHeader OHeaderData={OverviewHeaderData} color1={"bg-OVHGradient1"} color2={"bg-OVHGradient2"}/>

      {/* line chart */}
      <LineChart2/>

      {/* Traffic By Device & Location */}
       <TrafficDL2/>

    </div>
  )
}


