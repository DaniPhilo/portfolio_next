"use client"
import {useState} from "react"

import Image from "next/image"
import NavLink from "./NavLink"
import HamburgerBtn from "@/assets/hamburger-btn.svg"
import Footer from "./Footer"

const NavMenu = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header className="w-full flex justify-between lg:justify-start items-center border-b border-line-color rounded">
            <div className='relative z-20 bg-primary max-w-[300px] grow p-2 lg:p-4 border-b border-b-line-color lg:border-r border-r-line-color'>
                <p>daniel-carrasco</p>
            </div>
            <Image 
                src={HamburgerBtn}
                alt=""
                className="relative z-20 mr-2 cursor-pointer lg:hidden"
                onClick={() => setOpenMenu(prev => !prev)}
            />
            <nav className={`absolute lg:static w-[calc(100%-16px)] h-[calc(100%-2.5rem-16px)] lg:h-[3.5rem] top-12 left-0 z-10 ml-2 translate-y-[-100%] duration-200 ${openMenu && "translate-y-0"} flex flex-col justify-between lg:translate-y-0 lg:w-[calc(100%-200px)] lg:m-0`}>
                <ul className='flex flex-col lg:flex-row justify-start lg:items-center lg:h-full'>
                    <NavLink path='/' text='_hello' />
                    <NavLink path='/about-me' text='_about-me' />
                    <NavLink path='/projects' text='_projects' />
                    <NavLink path='/contact-me' text='_contact-me' />
                </ul>
                <div className="lg:hidden">
                    <Footer />
                </div>
            </nav>
        </header>
    )
}

export default NavMenu