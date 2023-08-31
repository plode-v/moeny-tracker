import React from 'react'
import { currencyFormat } from '@/lib/utils'
import { LinearProgress, linearProgressClasses, styled } from '@mui/material'
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'

const CategoryChart = () => {

    const amountUsed = [
        {
            id: 1,
            amount: 407,
            category: "Groceries",
            budget: 600,
            color: "#FFA500"
        },
        {
            id: 2,
            amount: 81.23,
            category: "Transportation",
            budget: 150,
            color: "navy"
        },
        {
            id: 3,
            amount: 450.72,
            category: "Food",
            budget: 300,
            color: "maroon"

        },
        {
            id: 4,
            amount: 60,
            category: "Subscriptions",
            budget: 70,
            color: "pink"

        },
        {
            id: 5,
            amount: 418.14,
            category: "Travel",
            budget: 450,
            color: "red"

        },
        {
            id: 6,
            amount: 113.38,
            category: "Shopping",
            budget: 120,
            color: "purple"

        },
        {
            id: 7,
            amount: 5000,
            category: "Investment",
            budget: 5000,
            color: "green"

        }
    ]

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
        alert("Modal")
    }

  return (
    <ScrollArea className='w-1/3 ml-2 mb-1 mt-2 mr-4 lg:mr-0 rounded-lg bg-neutral-50 overflow-auto category'>
        <h1 className='2xl:my-5 2xl:mx-3 font-bold lg:text-[1.5rem] m-2'>
            Categories
        </h1>
        <div className='flex flex-col items-between'>
            {amountUsed.map((expense) => (
                <div key={expense.id} className='h-[70px] flex items-center mx-4 my-1 2xl:my-2 rounded-lg border-2 cursor-pointer' onClick={handleModal}>
                    <div className='flex flex-col h-full w-2/3'>
                        <div className='flex h-full gap-2 items-center'>
                            <div className="h-1/2 aspect-square  ml-2 rounded-full" style={{backgroundColor: expense.color}} />
                            <h1 className='font-semibold'>
                                {expense.category}
                            </h1>
                        </div>
                        <div className='h-full ml-2 grid items-start'>
                            {/* <div className='h-3/4 w-full border' /> */}
                            <BorderLinearProgress value={expense.amount < expense.budget ? expense.amount / expense.budget * 100 : 100} variant='determinate' />
                        </div>
                    </div>
                    <div className='w-1/3 mx-2 items-end flex flex-col'>
                        {/* TODO: show amount used / budget */}
                        <div>
                            {currencyFormat(expense.amount)} / 
                        </div>
                        <div>
                            {currencyFormat(expense.budget)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </ScrollArea>

  )
}

export default CategoryChart