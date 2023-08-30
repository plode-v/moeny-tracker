import React from 'react'
import { currencyFormat } from '@/lib/utils'

const Amount = () => {
  return (
    <div className='lg:ml-0 m-2 mr-0 rounded-lg h-[3rem] 3xl:h-1/6 flex items-center bg-neutral-50'>
        <h1 className='text-[1.5rem] sm:text-[2rem] 3xl:text-[3.5rem] font-bold ml-3 3xl:ml-5 text-black'>
            {/* TODO: dynamic number and currency */}
            {currencyFormat(12019.98)}
        </h1>
    </div>
  )
}

export default Amount