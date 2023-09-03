export const categories = [
    {
        id: 1,
        title: "Food",
        color: "#32a852",
        budget: 200
    },
    {
        id: 2,
        title: "Groceries",
        color: "#327ba8",
        budget: 1000
    },
    {
        id: 3,
        title: "Transportation",
        color: "#e038de",
        budget: 300
    },
    {
        id: 4,
        title: "Bills",
        color: "#e0385f",
        budget: 3500
    },
    {
        id: 5,
        title: "Shopping",
        color: "#e0d038",
        budget: 1000
    }
]

const dateString = new Date().toLocaleDateString('en-US', { day: "numeric", month: "short", year: "numeric" });

export type PaymentType = {
    id: number,
    amount: number,
    category: string
    description: string,
    time: string,
    type: 'Income' | 'Expense'
  }

export const data: PaymentType[] = [
    {
        id: 1,
        amount: 102.12,
        category: "Food",
        description: "Momo shabu",
        time: dateString,
        type: "Expense"
    },
    {
        id: 2,
        amount: 1000,
        category: "Bills",
        description: "July 2023 Rent",
        time: dateString,
        type: "Expense"
    },
    {
        id: 3,
        amount: 1229.12,
        category: "Paycheck",
        description: "Aug Paycheck",
        time: dateString,
        type: "Income"
    },
    {
        id: 4,
        amount: 430.21,
        category: "Shopping",
        description: "YSL wallet",
        time: dateString,
        type: "Expense"
    }
]

