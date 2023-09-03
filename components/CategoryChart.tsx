import React, { useState } from 'react'
import { currencyFormat } from '@/lib/utils'
import { LinearProgress, linearProgressClasses, styled } from '@mui/material'
import { ScrollArea } from './ui/scroll-area'
import { categories, data } from "@/constants/data"
import { cn } from '@/lib/utils'

import { Progress } from './ui/progress'

type CategoryExpenses = { [key: string]: number };

const CategoryChart = () => {

    const [progress, setProgress] = useState<number>();


    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 200],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
        }
    }))


    const handleModal = () => {
        // TODO: show category details on click (modal)
        alert()
    }

    const categoryExpenses: CategoryExpenses = {}

    data.forEach((expense) => {
        if (!categoryExpenses[expense.category]) {
            categoryExpenses[expense.category] = 0
        }
        categoryExpenses[expense.category] += expense.amount;

    })

  return (
    <ScrollArea className='w-1/3 ml-2 mb-1 mt-2 mr-4 lg:mr-0 rounded-lg bg-neutral-50 overflow-auto category'>
        <h1 className='2xl:my-5 2xl:mx-3 font-bold lg:text-[1.5rem] m-2'>Categories</h1>
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