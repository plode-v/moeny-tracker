import React, { FormEventHandler, MouseEventHandler, useState } from 'react'
import { Tabs, TabsTrigger, TabsContent, TabsList } from './ui/tabs'
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { currencyFormat } from '@/lib/utils'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

const QuickAdd = () => {

  // Income states
  const [inAmount, setInAmount] = useState<number | string>()
  const [inDesc, setInDesc] = useState<string>('');
  const [inCategory, setInCategory] = useState<string>('');
  const [inType, setInType] = useState<string>('')
  
  const handleIncomeSubmit = (event: any) => {
    event.preventDefault();
    alert(`
      INCOME
      amount: ${inAmount}
      desc: ${inDesc}
      category: ${inCategory}
      typeL ${inType}
    `)
  };


  // expense states
  const [exAmount, setExAmount] = useState<string | number>()
  const [exDesc, setExDesc] = useState<string>('')
  const [exCategory, setExCategory] = useState()
  const [exType, setExType] = useState()

  const handleExpenseSubmit = (event: any) => {
    event.preventDefault();

    try {
      if (!exAmount) {
        alert("Amount cannot be empty");
      } else {
        alert("OK")
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // FIXME: change tabs bg-color
    // FIXME: change to shadcn form
    // TODO: remove input field outline on focus
    <div className='w-1/2 m-1 mr-4 lg:mr-0 mb-4 rounded-lg bg-neutral-50'>
      <Tabs defaultValue='Expense' className='w-full h-full pt-4 rounded-lg px-2'>
        <TabsList className='grid grid-cols-2 w-full bg-gray-500 text-white'>
          <TabsTrigger value='Expense'>Expense</TabsTrigger>
          <TabsTrigger value='Income'>Income</TabsTrigger>
        </TabsList>
        <TabsContent value='Expense' className='h-[90%]'>
          <Card className='bg-neutral-50 border-0 shadow-none h-full'>
            <CardHeader>
              <CardTitle>Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-1'>
                <Label>Amount</Label>
                <Input id='expense' placeholder={currencyFormat(1200)} type='number' onChange={e => setExAmount(e.target.value)} value={exAmount} />
              </div>
              <div className='py-2'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='Food'>Food</SelectItem>
                      <SelectItem value='Rent'>Rent</SelectItem>
                      <SelectItem value='Groceries'>Groceries</SelectItem>
                      <SelectItem value='Bills'>Bills</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder='Description' />
            </CardContent>
            <CardFooter className='flex justify-end'>
              <Button className='w-1/4' type='submit' onClick={handleExpenseSubmit}>Submit</Button>
            </CardFooter>
          </Card>
        </TabsContent>


        <TabsContent value='Income'>
          <Card className='bg-neutral-50 border-0 shadow-none'>
            <CardHeader>
              <CardTitle>Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-1'>
                <Label>Amount</Label>
                <Input id='income' placeholder={currencyFormat(1200)} type='number'  value={inAmount} onChange={e => setInAmount(e.target.value)} />
              </div>
              <div className='py-2 grid grid-cols-2 gap-2'>
                <Select required>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='Food'>Food</SelectItem>
                      <SelectItem value='Rent'>Rent</SelectItem>
                      <SelectItem value='Groceries'>Groceries</SelectItem>
                      <SelectItem value='Bills'>Bills</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select required>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='Cash'>Cash</SelectItem>
                      <SelectItem value='Transfer'>Transfer</SelectItem>
                      <SelectItem value='Credit Card'>Credit Card</SelectItem>
                      <SelectItem value='Paycheck'>Paycheck</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder='Description' maxLength={100} onChange={e => setInDesc(e.target.value)} value={inDesc} />
            </CardContent>
            <CardFooter className='flex justify-end'>
              <Button className='w-1/4' type='submit' onClick={handleIncomeSubmit}>Submit</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
  </div>
  )
}

export default QuickAdd