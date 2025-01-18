import React from 'react'
import { cn } from '../../utils/lib/cn'

export const Container = ({className, children}) => {
  return (
    <div className={cn("max-w-[1440px] mx-auto px-4",className)}>
      {children}
    </div>
  )
}
