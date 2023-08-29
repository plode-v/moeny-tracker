import React from 'react'
import DateRangePicker from './DateRangePicker'
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from "recharts"

const ColumnChart = () => {

  const data = [
    {
      date: "March",
      Food: 300,
      Rent: 2400,
      Groceries: 1000,
      Bills: 1500
    },
    {
      date: "April",
      Food: 400,
      Rent: 2400,
      Groceries: 1000,
      Bills: 1500
    },
    {
      date: "May",
      Food: 1200,
      Rent: 2400,
      Groceries: 1000,
      Bills: 1500
    },
    {
      date: "June",
      Food: 450,
      Rent: 2400,
      Groceries: 1000,
      Bills: 1500
    },
    {
      date: "July",
      Food: 900,
      Rent: 2400,
      Groceries: 1000,
      Bills: 1500
    }
  ]

  return (
    <div className='m-2 ml-4 lg:ml-0 rounded-lg h-5/6 bg-neutral-50'>
      <div className='w-full flex justify-end p-2'>
        <DateRangePicker />
      </div>
      <div className='flex items-start h-full w-full'>
        {/* TODO: Dynamic Data from database */}
        {/* TODO: Can adjust date range */}
        <ResponsiveContainer width='100%' height='80%' className='bg-transparent'>
            <BarChart 
              width={400}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 20,
                bottom: 5,
                left: 20
              }}
            >
              <CartesianGrid strokeDasharray="100 0" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='Food' fill='#fcba03' stackId='a' />
              <Bar dataKey='Rent' fill='#8e2bcc' stackId='a' />
              <Bar dataKey='Groceries' fill='#cc2b8e' stackId='a' />
              <Bar dataKey='Bills' fill='#2bcc48' stackId='a' />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ColumnChart