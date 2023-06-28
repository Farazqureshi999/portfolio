import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'] ,weight:['300','400','500','600','700'],variable:'--font-poppins'})

export const metadata = {
  title: 'Faraz Qureshi',
  description: 'Frontend Developer | Shaping the Web With React, Nextjs & Javascript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
