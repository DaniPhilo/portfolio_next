"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
    path: string,
    text: string
}

const NavLink = ({ path, text }: NavLinkProps) => {

    const pathName = usePathname();    

    return (
        <li className="p-2 border-b border-line-color lg:border-0">
            <Link href={path} className={`lg:p-4 lg:border-r border-r-line-color hover:text-highlight-text hover:border-b hover:border-b-accent-orange hover:border-b-2 ${pathName === path ? "text-highlight-text lg:border-b lg:border-b-accent-orange lg:border-b-2" : ""}`}>{text}</Link>
        </li>
    )
}

export default NavLink