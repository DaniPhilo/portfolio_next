import Link from "next/link";

export default function NavLink({ path, text, customStyle = false }) {
    return (
        <li className={`relative py-4 px-8 border-r border-border-color hover:text-hover-text cursor-pointer  after:absolute after:bottom-0 after:left-0 after:bg-orange-accent after:w-full after:h-1 after:transform after:origin-left after:scale-x-0 after:duration-500 hover:after:scale-x-100 ${customStyle ? customStyle : ''}`}>
            <Link href={path}>{text}</Link>
        </li>
    )
}
