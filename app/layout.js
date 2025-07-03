import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dino Horn - Senior Full Stack Software Engineer',
  description: 'Professional resume of Dino Horn, Senior Full Stack Software Engineer with expertise in Next.js, React, Node.js, and AI technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}