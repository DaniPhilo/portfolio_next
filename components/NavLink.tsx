"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
    path: string,
    text: string
}

const NavLink = ({ path, text }: NavLinkProps) => {

    const pathName = usePathname();
    console.log(pathName === path);
    

    return (
        <li>
            <Link href={path} className={`p-4 border-r border-r-line-color hover:text-highlight-text hover:border-b hover:border-b-accent-color hover:border-b-2 ${pathName === path ? "text-highlight-text border-b border-b-accent-color border-b-2" : ""}`}>{text}</Link>
        </li>
    )
}

export default NavLink