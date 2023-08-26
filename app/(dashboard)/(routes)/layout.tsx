import React from 'react'
import Sidebar from '@/app/components/Sidebar'
import Nav from '@/app/components/Nav'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex'>
      <div>        
        <Sidebar />
      </div>
      <div className='w-full'>
        <Nav />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout