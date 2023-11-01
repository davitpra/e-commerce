import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400',})

export const metadata = {
  title: 'E-commerce web app',
  description: 'An E-commerce web app built with Next.js and styled-components',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
