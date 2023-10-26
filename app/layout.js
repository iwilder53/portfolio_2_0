import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Y Bagaria Portfolio',
  description: 'Portfolio site, showcasing my skills and past projects',
  keywords: ['Yashkumar Bagaria', 'Yashkumar', 'Bagaria', 'Y Bagaria', 'Yashkumar Rajkumar Bagaria', 'Next.js', 'React', 'JavaScript'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
