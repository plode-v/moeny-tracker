import React from 'react'
import { currencyFormat } from '../lib/utils'

const Amount = () => {
  return (
    <div className='m-2 ml-4 mt-4 rounded-lg h-1/6 flex items-center bg-neutral-50'>
        <h1 className='text-[3.5rem] font-semibold ml-5 text-black'>
            {/* TODO: dynamic number and currency */}
            {currencyFormat(12019.98)}
        </h1>
    </div>
  )
}

export default Amount