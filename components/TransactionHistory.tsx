import React from 'react'
import History from "@/hooks/History"

const TransactionHistory = () => {

  const data = [
    {
      id: 1,
      type: "Expense",
      amount: 1200,
      category: "Rent",
      description: "July 2023 rent",
      time: '2023-Aug-29'
    },
    {
      id: 2,
      type: "Income",
      amount: 10000,
      category: "Paycheck",
      description: "Aug 1 paycheck",
      time: '2023-Aug-11'
    },
    {
      id: 3,
      type: "Expense",
      amount: 90.21,
      category: "Groceries",
      description: "Tops",
      time: '2023-Aug-10'
    }
  ]

  return (
    <div className='w-1/2 m-1 ml-4 lg:ml-0 mb-4 rounded-lg bg-neutral-50'>
          Transactions History
          {data.map(element => (
            <History 
              key={element.id}
              type={element.type}
              amount={element.amount}
              category={element.category}
              description={element.description}
              time={element.time}
            />
          ))}
    </div>
  )
}

export default TransactionHistory