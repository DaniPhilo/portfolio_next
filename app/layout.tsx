import NavLink from '@/components/NavLink';
import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';


import LinkedinIconWhite from '@/assets/linkedin-icon-white.svg'

import GitHubIconWhite from '@/assets/github-icon-white.svg'
import NavMenu from '@/components/NavMenu';
import Footer from '@/components/Footer';

const font = Fira_Code({
  subsets: ['latin'],
  variable: "--font-fira-code"
});

export const metadata: Metadata = {
  title: 'Portfolio | Daniel Carrasco',
  description: 'Portfolio Daniel Carrasco Casado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} w-screen h-screen bg-background-fill p-2 lg:p-4 overflow-hidden`}>
        <div className='w-full h-full grid grid-rows-[2.5rem_1fr_2.5rem] lg:grid-rows-[3.5rem_1fr_3.5rem] bg-primary text-primary-text border border-line-color rounded'>

          <NavMenu />

          <main className='min-h-full'>
            {children}
          </main>

          <div className='hidden lg:block'>
            <Footer />
          </div>

        </div>
      </body>
    </html>
  )
}
