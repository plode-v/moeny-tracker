import React, { useState } from 'react';
import { format, subDays } from 'date-fns'
import { DateRange } from 'react-day-picker'

import { Popover, PopoverTrigger, PopoverContent } from './ui/popover'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'

const DateRangePicker = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  
  const [date, setDate] = useState<DateRange | undefined> ({ from: subDays(new Date(),7), to: new Date()})

  return (
    <div className={cn("grid gap-2", className)}>
      {/* TODO: Have presets of week, month, year */}
      <Popover>
        <PopoverTrigger asChild>
          <Button className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")} variant='outline'>
            {date?.from ? (
              date.to? (
                <>
                  {format(date.from, "LLL d, y")} - {" "}
                  {format(date.to, "LLL d, y")}
                </>
              ) : (
                format(date.from, "LLL d y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar 
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            fromDate={date?.from}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DateRangePicker