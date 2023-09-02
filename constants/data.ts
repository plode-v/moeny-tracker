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

export const data = [
    {
        id: 1,
        amount: 102.12,
        category: "Food",
        type: "Expense",
        description: "Momo shabu",
        time: dateString
    },
    {
        id: 2,
        amount: 1000,
        category: "Bills",
        type: "Expense",
        description: "July 2023 Rent",
        time: dateString
    },
    {
        id: 3,
        amount: 1229.12,
        category: "Paycheck",
        type: "Income",
        description: "Aug Paycheck",
        time: dateString
    },
    {
        id: 4,
        amount: 430.21,
        category: "Shopping",
        type: "Expense",
        description: "YSL wallet",
        time: dateString
    }
]