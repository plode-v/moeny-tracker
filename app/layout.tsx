import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthContextProvider from "@/lib/firestore/auth-context"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Money Tracker',
  description: 'Budgeting and money tracking app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthContextProvider>
  )
}
