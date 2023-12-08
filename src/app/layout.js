import { Poppins } from 'next/font/google'
import { CartContextProvider } from '@/context/CartContext'
import './globals.css'
import Navbar from '@/components/Navbar'
import Clock from '@/components/Clock'

const poppins = Poppins({ subsets: ['latin'], weight: '400',})

export const metadata = {
  title: 'E-commerce web app',
  description: 'An E-commerce web app built with Next.js and styled-components',
}

export default function RootLayout({ children }) {
  return (
    <CartContextProvider>
      <html lang="en">
        <body className={poppins.className} style={{paddingBottom: 65}}>
          <Navbar />
          {children}
          <Clock />
        </body>
      </html>
    </CartContextProvider>
  )
}
