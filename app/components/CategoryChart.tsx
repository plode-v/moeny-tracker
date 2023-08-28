import React from 'react'
import { currencyFormat } from '../lib/utils'

const CategoryChart = () => {

    const amountUsed = [
        {
            id: 1,
            amount: currencyFormat(870.1),
            category: "Groceries",
            budget: currencyFormat(1000),
            color: "orange"
        },
        {
            id: 2,
            amount: currencyFormat(250.65),
            category: "Gas",
            budget: currencyFormat(300),
            color: "blue"
        }
    ]


    const handleModal = () => {
        // TODO: show category details on click (modal)
    }

  return (
    <div className='w-1/3 m-2 mt-4 mr-4 rounded-lg bg-neutral-50'>
        <h1 className='my-5 mx-3 font-bold text-[1.5rem]'>
            Categories
        </h1>
        <div className='flex flex-col items-between'>
            {amountUsed.map((expense) => (
                <div key={expense.id} className='h-[70px] flex items-center mx-4 my-2 rounded-lg border-2 cursor-pointer hover:scale-105 duration-[50ms]'>
                    <div className='flex flex-col h-full'>
                        <div className='flex h-full items-center gap-2'>
                            <div className="h-1/2 aspect-square border ml-2 rounded-full" style={{backgroundColor: expense.color}} />
                            <h1 className='font-semibold'>
                                {expense.category}
                            </h1>
                        </div>
                        <div className='h-full ml-2'>
                            <div className='h-3/4 w-[13rem] border' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryChart