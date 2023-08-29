import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const currencyFormat = (amount: number) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency"
  });

  return formatter.format(amount);

}