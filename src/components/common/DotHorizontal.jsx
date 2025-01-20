import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { cn } from '../../utils/lib/cn'

export const DotHorizontal = ({className}) => {
  return (
    <div className={cn('dark:bg-bg5/15 bg-black/5 rounded-xl flex justify-center items-center  cursor-pointer', className)}>
      <HiOutlineDotsHorizontal />
    </div>
  )
}

