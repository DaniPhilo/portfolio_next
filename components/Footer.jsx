import Link from "next/link";
import GithubIcon from "./icons/GitHubIcon.jsx";
import LinkedInIcon from "./icons/LinkedInIcon.jsx";

export default function Footer() {
    return (
        <footer className="flex justify-start items-center border-t border-border-color">
            <div className="p-4 border-r border-border-color">
                find me in:
            </div>
            <Link href={"https://www.linkedin.com/in/daniel-carrasco-casado/"} className="p-4 border-r border-border-color">
                <LinkedInIcon />
            </Link>
            <Link href={"https://github.com/DaniPhilo"} className="p-4 border-r border-border-color">
                <GithubIcon />
            </Link>
        </footer>
    )
}
