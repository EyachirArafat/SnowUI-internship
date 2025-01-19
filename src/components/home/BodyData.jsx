import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'
import { TopBar } from '../myBar/TopBar'
import { OverviewHeader } from './OverviewHeader'

export const BodyData = () => {
  return (
    <div>
      <TopBar BCPath1="Dashboards"
        BCPath2="Default"/>
      <div className='flex justify-between'>
        <h2 className='text-lg font-medium '>Overview</h2>
        <div>
        <FormControl fullWidth>
          <NativeSelect
            defaultValue="Today"
            inputProps={{
              name: 'time',
              id: 'uncontrolled-native',
            }}
          >
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="This-Week">This Week</option>
            <option value="This-Month">This Month</option>
            <option value="This-Year">This Year</option>
          </NativeSelect>
        </FormControl>
        </div>
      </div>
      {/* overview header */}
      <OverviewHeader/>

    </div>
  )
}


