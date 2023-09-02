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
import { data } from '@/constants/data'

const TransactionHistory = () => {

  const handleClick = () => {
    alert("Transaction History")
  }

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
            <TableRow key={money.id} className='cursor-pointer' onClick={handleClick}>
              <TableCell className='border-y'>{money.time}</TableCell>
              <TableCell className='border-y'>{money.type}</TableCell>
              <TableCell className='border-y'>{currencyFormat(money.amount)}</TableCell>
              <TableCell className='border-y'>{money.category}</TableCell>
              <TableCell className='text-right text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px] border-y'>{money.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}

export default TransactionHistory