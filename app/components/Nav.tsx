'use client'
import React from 'react'
import { Skeleton } from '@mui/material'

const Nav = () => {

  return (
    <nav className='h-[60px] border w-full flex justify-between'>
        <div className='flex'>
            <span className='border w-[100px]'>Logo</span>
            <h1 className='items-end flex ml-5 text-[1.8rem] font-bold text-neutral-50'>
                {/* TODO: Change to dynamic name */}
                Hello Plode
            </h1>
        </div>
        <div className='border flex'>
            {/* TODO: Change to dynamic login button */}
            <div className='h-full aspect-square bg-neutral-400 rounded-full'>
                {/* TODO: Add auth */}
            </div>
            <div className='flex items-center px-5'>
                <button className='bg-red-500 text-white w-[80px] h-[40px] rounded-full'>logout</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav