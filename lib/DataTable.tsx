import { PaymentType } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { currencyFormat } from "./utils";
import { BiTrash } from "react-icons/bi"

export const columns: ColumnDef<PaymentType>[] = [
    {
      accessorKey: "time",
      header: "Time",
      cell: ({ row }) => (
        <div>{row.getValue("time")}</div>
      )
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        return <div>{currencyFormat(Number(row.getValue("amount")))}</div>
      }
    },
    {
      accessorKey: "category",
      header: "Categories",
      cell: ({ row }) => {
        return <div>{row.getValue("category")}</div>
      }
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <div className='lowercase truncate text-ellipsis w-max'>{row.getValue("description")}</div>
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const action = row.original;

        // FIXME: work on delete from database
        const handleClick = () => {
          console.log(action)
        }

        return (
          <div className="text-end bg-black text-lg cursor-pointer justify-center flex w-0" onClick={handleClick}>
            <BiTrash />
          </div>
        )
      }
    }
  ]