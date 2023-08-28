'use client'

import React from 'react'
import { Amount, ColumnChart, CategoryChart, QuickAdd, TransactionHistory } from '@/app/components'

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
        <TransactionHistory />
        <QuickAdd />
      </div>
    </div>
  )
}

export default Dashboard