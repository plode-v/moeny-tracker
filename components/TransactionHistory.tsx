import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { currencyFormat } from '@/lib/utils'
import { data, PaymentType } from '@/constants/data'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import  { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from './ui/dropdown-menu'

export const columns: ColumnDef<PaymentType>[] = [
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => (
      <div>{row.getValue("time")}</div>
    )
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return <div>{currencyFormat(Number(row.getValue("amount")))}</div>
    }
  },
  {
    accessorKey: "category",
    header: "Categories",
    cell: ({ row }) => {
      return <div>{row.getValue("category")}</div>
    }
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div className='lowercase truncate text-ellipsis w-max'>{row.getValue("description")}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => <div className='text-end bg-black text-white w-min '>Trash</div>
  }
]

const TransactionHistory = () => {

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })


  const handleClick = () => {
    alert("Transaction History")
  }

  const handleTrash = () => {
    alert("trash")
  }


  return (
    // FIXME: show modal onClick on each transaction
    <ScrollArea className='w-3/5 m-1 ml-4 lg:ml-0 mb-4 rounded-lg bg-neutral-50 p-2'>
        <h1 className='text-lg font-bold p-2'>Transaction History</h1>
        <div className='flex justify-between'>
          <Input 
            placeholder='Search...'
            value={(table.getColumn("description")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn('description')?.setFilterValue(event.target.value)}
            // FIXME: fix corners borders on focus
            className='max-x-sm w-2/3 ml-2 focus-visible:ring-0'
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default">
                Columns <ChevronDown className=' ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className='capitalize cursor-pointer focus:ring-0 focus-within:outline-none'
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {!header.isPlaceholder && flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow 
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell 
                    colSpan={columns.length}
                    className='h-24 text-center'
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
    </ScrollArea>
  )
}

export default TransactionHistory