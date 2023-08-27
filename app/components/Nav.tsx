'use client'
import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { Skeleton } from '@mui/material'

const Nav = () => {

    const { user } = useUser();

    const name = user?.firstName;

  return (
    <nav className='h-[60px] border w-full flex justify-between'>
        <div className='flex'>
            <span className='border w-[100px]'>Logo</span>
            <h1 className='items-end flex ml-5 text-[1.8rem] font-bold text-neutral-800'>{
                !name ? <Skeleton variant='text' animation="wave" width={200} /> : `Hello, ${name}`
            }</h1>
        </div>
        <div className='border'>
            <div className='h-[100px]'>
            {/* FIXME: increase size of UserButton */}
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    </nav>
  )
}

export default Nav