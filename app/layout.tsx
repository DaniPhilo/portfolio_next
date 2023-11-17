import NavLink from '@/components/NavLink';
import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';

import LinkedinIcon from '@/assets/linkedin-icon.svg'
import LinkedinIconWhite from '@/assets/linkedin-icon-white.svg'
import GitHubIcon from '@/assets/github-icon.svg'
import GitHubIconWhite from '@/assets/github-icon-white.svg'

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
      <body className={`${font.className} w-screen h-screen bg-background-fill p-4 overflow-hidden`}>
        <div className='w-full h-full grid grid-rows-[3.5rem_1fr_3.5rem] bg-primary text-primary-text border border-line-color rounded'>

          <header className='w-full flex justify-start items-center border-b border-line-color rounded'>
            <div className='max-w-[300px] grow p-4 border-r border-r-line-color'>
              <p>daniel-carrasco</p>
            </div>
            <nav>
              <ul className='flex justify-start items-center'>
                <NavLink path='/' text='_hello' />
                <NavLink path='/about-me' text='_about-me' />
                <NavLink path='/projects' text='_projects' />
                <NavLink path='/contact-me' text='_contact-me' />
              </ul>
            </nav>
          </header>

          <main className='min-h-full'>
            {children}
          </main>

          <footer className='w-full flex justify-start items-center border-t border-line-color rounded'>
            <div className='max-w-[300px] p-4 border-r border-r-line-color'>
              <p>find me in:</p>
            </div>
            <div className='h-full flex'>
            <Link href={"https://github.com/DaniPhilo"} target='_blank' className='w-[60px] h-full flex justify-center items-center p-4 border-r border-line-color'>
                <Image
                  src={GitHubIcon}
                  alt=''
                  className='w-full'
                />
              </Link>
              <Link href={"https://www.linkedin.com/in/daniel-carrasco-casado/"} target='_blank' className='w-[60px] h-full flex justify-center items-center p-4 border-r border-line-color'>
                <Image
                  src={LinkedinIcon}
                  alt=''
                  className='w-full'
                />
              </Link>
            </div>
          </footer>

        </div>
      </body>
    </html>
  )
}
