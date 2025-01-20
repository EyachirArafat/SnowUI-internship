import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'
import { OverviewHeader } from '../home/OverviewHeader'
import { OverviewHeaderData } from '../../utils/data/apiData'
import { LineChart2 } from './myBar2/LineChart2'
// import LineChart from '../Icons'
import { TrafficDL2 } from './myBar2/TrafficDL2'
import { ProductTrafficChart } from './myBar2/ProductTraffic'
import ProjectTable from './myBar2/Projects'

export const BodyData2 = () => {
  return (
    <div className=' dark:text-white'>
      {/* overview header */}
      <OverviewHeader 
      OHeaderData={OverviewHeaderData} 
      color1={"bg-OVHGradient1"} 
      color2={"bg-OVHGradient2"}
      color3={"text-white"}
      color4={"text-white"}
      color5={"text-white"}
      />

      {/* line chart */}
      <LineChart2/>

      {/* Traffic By Device & Location */}
       <TrafficDL2/>

      {/* Product Traffic*/}
       <ProductTrafficChart/>

      {/* Projects */}
       <ProjectTable/>

    </div>
  )
}


