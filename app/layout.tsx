import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import clsx from 'clsx'

const noto = Noto_Sans_Thai({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'emfarm - พัฒนาซอฟต์แวร์ทันสมัยและมีประสิทธิภาพสูง',
  description: 'emfarm พัฒนาซอฟต์แวร์และ SaaS ที่ทันสมัยและมีประสิทธิภาพสูง เช่น แพลตฟอร์มจัดการหอพัก แพลตฟอร์มบริหารสถานศึกษา และแพลตฟอร์ม cloud storage',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
