import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"

const formSchema = z.object({
    amount: z.number().min(1, {
        message: "Amount must be greater than 0"
    }),
    category: z.string().min(1, {
        message: "Category must be selected"
    }),
    
})