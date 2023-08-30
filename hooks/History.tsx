import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

interface TransactionHistoryProps {
    type: string,
    amount: number,
    category: string,
    description: string,
    time: string
}

const History = ({type, amount, category, description, time}: TransactionHistoryProps) => {

  return (
    <Table>
        
    </Table>
  )
}

export default History