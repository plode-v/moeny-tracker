import React from 'react'
import { currencyFormat } from '@/lib/utils'
import { categories, data } from "@/constants/data"

import { Progress } from './ui/progress'
import { Button } from "./ui/button"
import { ScrollArea } from './ui/scroll-area'

type CategoryExpenses = { [key: string]: number };

const CategoryChart = () => {

    // FIXME: show category details on click (modal)
    const handleModal = () => {
        alert("modal detail")
    }

    const categoryExpenses: CategoryExpenses = {}

    data.forEach((expense) => {
        if (!categoryExpenses[expense.category]) {
            categoryExpenses[expense.category] = 0
        }
        categoryExpenses[expense.category] += expense.amount;

    })

    // FIXME: work on this button
    const handleAddCategory = () => {
        alert("Add category")
    }

  return (
    <ScrollArea className='w-1/3 ml-2 mb-1 mt-2 mr-4 lg:mr-0 rounded-lg bg-neutral-50 overflow-auto'>
        <div className='2xl:my-5 2xl:mx-3 m-2 flex justify-between items-center'>
            <h1 className=' font-bold lg:text-[1.5rem]'>Categories</h1>

            {/* FIXME: change button to framework icon */}
            <Button className='h-10 aspect-square'>+</Button>
        </div>
        <div className='flex flex-col items-between'>
            
            {/* Categories */}
            {categories.map((cat) => (
                <div key={cat.id} className='h-[70px] flex items-center mx-4 my-1 2xl:my-2 rounded-lg border-2 cursor-pointer' onClick={handleModal}>
                    <div className='flex flex-col h-full w-2/3'>
                        <div className='flex h-full gap-2 items-center'>
                            <div className="h-1/2 aspect-square ml-2 rounded-full" style={{backgroundColor: cat.color}} />
                            <h1 className='font-semibold'>{cat.title}</h1>
                        </div>
                        <div className='h-full ml-2 grid items-start'>
                            <Progress value={categoryExpenses[cat.title] < cat.budget ? categoryExpenses[cat.title] / cat.budget * 100 : (!categoryExpenses[cat.title] ? 0 : 100)} className='bg-gray-300' />
                        </div>
                    </div>
                    <div className='w-1/3 mx-2 items-end flex flex-col'>
                        <div className='w-1/3 mx-2 items-end justify-between flex flex-col text-end'>
                            <p className=''>Remaining:</p>
                            <p>{currencyFormat(Number((cat.budget - (categoryExpenses[cat.title]) || cat.budget).toFixed(2)))}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </ScrollArea>
  )
}

export default CategoryChart