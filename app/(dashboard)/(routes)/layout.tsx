'use client'
import React from 'react'
import Nav from '@/components/Nav'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
      <div className='w-full flex justify-center h-screen bg-slate-900'>
        <div className='w-full lg:w-3/4 3xl:w-1/2'>
          <Nav />
          {children}
        </div>
      </div>
  )
}

export default DashboardLayout