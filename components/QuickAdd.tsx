import React from 'react'
import { Tabs, TabsTrigger, TabsContent, TabsList } from './ui/tabs'
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'

const QuickAdd = () => {
  return (
    // FIXME: change tabs bg-color
    <div className='w-1/2 m-2 mr-4 lg:mr-0 mb-4 rounded-lg bg-neutral-50'>
      <Tabs defaultValue='Expense' className='w-full'>
        <TabsList className='grid grid-cols-2 w-full'>
          <TabsTrigger value='Expense'>Expense</TabsTrigger>
          <TabsTrigger value='Income'>Income</TabsTrigger>
        </TabsList>
        <TabsContent value='Expense'>
          <Card>
            <CardHeader>
              <CardTitle>Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <Label>Amount
                <Input placeholder='$1200' title='Amount' />
              </Label>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
  </div>
  )
}

export default QuickAdd