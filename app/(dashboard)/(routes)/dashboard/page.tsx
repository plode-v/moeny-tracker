'use client'

import React from 'react'
import Amount from '@/app/components/Amount'
import ColumnChart from '@/app/components/ColumnChart'
import CategoryChart from '@/app/components/CategoryChart'

const Dashboard = () => {
  return (
    <div className='h-[calc(100%-60px)]'>
      <div className='flex h-1/2'>
        <div className='flex flex-col w-2/3'>
          <Amount />
          <ColumnChart />
        </div>
        <CategoryChart />
      </div>
      <div className='flex h-1/2'>
        <div className='w-1/2 m-2 ml-4 mb-4 rounded-lg bg-neutral-50'>
          Transactions History
        </div>
        <div className='w-1/2 m-2 mr-4 mb-4 rounded-lg bg-neutral-50'>
          Quick add
        </div>
      </div>
    </div>
  )
}

export default Dashboard