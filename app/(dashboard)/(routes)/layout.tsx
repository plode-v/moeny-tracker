import React from 'react'
import Sidebar from '@/app/components/Sidebar'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex'>
      <Sidebar />
      {children}
    </div>
  )
}

export default DashboardLayout