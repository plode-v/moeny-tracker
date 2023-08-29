import React from 'react'
import { Tabs, TabsTrigger, TabsContent, TabsList } from './ui/tabs'

const QuickAdd = () => {
  return (
    <div className='w-1/2 m-2 mr-4 lg:mr-0 mb-4 rounded-lg bg-neutral-50'>
      <Tabs defaultValue='Expense' className='w-full dark'>
        <TabsList className='grid grid-cols-2 w-full'>
          <TabsTrigger value='Expense'>Expense</TabsTrigger>
          <TabsTrigger value='Income'>Income</TabsTrigger>
        </TabsList>
        <TabsContent value='Expense'>

        </TabsContent>

      </Tabs>
  </div>
  )
}

export default QuickAdd