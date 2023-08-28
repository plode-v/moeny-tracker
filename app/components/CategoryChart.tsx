import React from 'react'
import { currencyFormat } from '../lib/utils'
import { LinearProgress, LinearProgressClasses, linearProgressClasses, styled } from '@mui/material'

const CategoryChart = () => {

    const amountUsed = [
        {
            id: 1,
            amount: 807,
            category: "Groceries",
            budget: 1000,
            color: "#FFA500"
        },
        {
            id: 2,
            amount: 65,
            category: "Gas",
            budget: 300,
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
            amount: 450.72,
            category: "Food",
            budget: 300,
            color: "maroon"

        },
        {
            id: 6,
            amount: 450.72,
            category: "Food",
            budget: 300,
            color: "maroon"

        },
        {
            id: 7,
            amount: 450.72,
            category: "Food",
            budget: 300,
            color: "maroon"

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
    <div className='w-1/3 m-2 mt-4 mr-4 lg:mr-0 rounded-lg bg-neutral-50 overflow-auto'>
        <h1 className='lg:my-5 lg:mx-3 font-bold lg:text-[1.5rem] m-2'>
            Categories
        </h1>
        <div className='flex flex-col items-between'>
            {amountUsed.map((expense) => (
                <div key={expense.id} className='h-[70px] flex items-center mx-4 my-2 rounded-lg border-2 cursor-pointer' onClick={handleModal}>
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
    </div>
  )
}

export default CategoryChart