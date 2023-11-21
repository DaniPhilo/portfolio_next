"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SetStateAction } from "react"

interface NavLinkProps {
    path: string,
    text: string,
    setOpenMenu: React.Dispatch<SetStateAction<boolean>>
}

const NavLink = ({ path, text, setOpenMenu }: NavLinkProps) => {

    const pathName = usePathname();    

    return (
        <li className="p-2 border-b border-line-color lg:p-0 lg:border-0">
            <Link href={path} className={`lg:p-4 lg:border-r border-r-line-color hover:text-highlight-text hover:border-b hover:border-b-accent-orange hover:border-b-2 ${pathName === path ? "text-highlight-text lg:border-b lg:border-b-accent-orange lg:border-b-2" : ""}`} onClick={() => setOpenMenu(false)}>{text}</Link>
        </li>
    )
}

export default NavLink