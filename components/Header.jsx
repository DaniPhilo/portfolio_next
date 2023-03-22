import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
    return (
        <header className="flex w-full border-b border-border-color">
            <div className="relative w-1/3 py-4 px-8 border-r border-border-color hover:text-hover-text cursor-pointer after:absolute after:bottom-0 after:left-0 after:bg-orange-accent after:w-full after:h-1 after:transform after:origin-left after:scale-x-0 after:duration-1000 hover:after:scale-x-100">
                daniel-carrasco
            </div>
            <nav className="w-full">
                <ul className="flex justify-start w-full">
                    <NavLink path={"/"} text={"_hello"} />
                    <NavLink path={"/about"} text={"_about-me"} />
                    <NavLink path={"/projects"} text={"_projects"} />
                    <NavLink path={"/contact"} text={"_contact-me"} customStyle={"ml-auto border-l border-r-0"} />
                </ul>
            </nav>
        </header>
    )
}
