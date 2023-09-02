import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from './ui/scroll-area'
import { currencyFormat } from '@/lib/utils'

const TransactionHistory = () => {

  const data = [
    {
      id: 1,
      type: "Expense",
      amount: 1200,
      category: "Rent",
      description: "July 2023 rent",
      time: new Date().getFullYear()
    },
    {
      id: 2,
      type: "Income",
      amount: 10000,
      category: "Paycheck",
      description: "Aug 1 paycheck",
      time: '2023-Aug-11'
    },
    {
      id: 3,
      type: "Expense",
      amount: 90.21,
      category: "Groceries",
      description: "Tops",
      time: '2023-Aug-10'
    },
    {
      id: 1,
      type: "Expense",
      amount: 1200,
      category: "Rent",
      description: "July 2023 rent",
      time: '2023-Aug-29'
    },
    {
      id: 2,
      type: "Income",
      amount: 10000,
      category: "Paycheck",
      description: "Aug 1 paycheck",
      time: '2023-Aug-11'
    },
    {
      id: 3,
      type: "Expense",
      amount: 90.21,
      category: "Groceries",
      description: "Tops",
      time: '2023-Aug-10'
    },
    {
      id: 1,
      type: "Expense",
      amount: 1200,
      category: "Rent",
      description: "July 2023 rent",
      time: '2023-Aug-29'
    },
    {
      id: 2,
      type: "Income",
      amount: 10000,
      category: "Paycheck",
      description: "Aug 1 paycheck",
      time: '2023-Aug-11'
    },
    {
      id: 3,
      type: "Expense",
      amount: 90.21,
      category: "Groceries",
      description: "Tops",
      time: '2023-Aug-10'
    },
    {
      id: 1,
      type: "Expense",
      amount: 1200,
      category: "Rent",
      description: "July 2023 rent",
      time: '2023-Aug-29'
    },
    {
      id: 2,
      type: "Income",
      amount: 10000,
      category: "Paycheck",
      description: "Aug 1 paycheck",
      time: '2023-Aug-11'
    },
    {
      id: 3,
      type: "Expense",
      amount: 90.21,
      category: "Groceries",
      description: "Tops",
      time: '2023-Aug-10'
    },
  ]

  return (
    // FIXME: show modal onClick on each transaction
    // FIXME: change to shadcn data table
    <ScrollArea className='w-3/5 m-1 ml-4 lg:ml-0 mb-4 rounded-lg bg-neutral-50 p-2'>
        <h1 className='text-lg font-bold p-2'>Transaction History</h1>
      <Table>
        <TableHeader className='hover:bg-transparent'>
          <TableRow>
            <TableHead className='text-left'>Time</TableHead>
            <TableHead className='text-left'>Type</TableHead>
            <TableHead className='text-left'>Amount</TableHead>
            <TableHead className='text-left'>Category</TableHead>
            <TableHead className='text-right'>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='text-[12px] 2xl:text-[16px]'>
          {data.map(money => (
            <TableRow key={money.id}>
              <TableCell className='border'>{money.time}</TableCell>
              <TableCell>{money.type}</TableCell>
              <TableCell>{currencyFormat(money.amount)}</TableCell>
              <TableCell>{money.category}</TableCell>
              <TableCell className='text-right text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px]'>{money.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}

export default TransactionHistory