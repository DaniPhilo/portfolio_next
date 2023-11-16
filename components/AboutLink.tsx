"use client"
import Image from "next/image"
import ChevronGray from "../assets/chevron-gray.svg"
import ChevronSelected from "../assets/chevron-selected.svg"

interface AboutLinkProps {
    section: string,
    setSection: React.Dispatch<React.SetStateAction<string>>,
    path: string,
    text: string,
    img: string
}

const AboutLink = ({ section, setSection, path, text, img }: AboutLinkProps) => {

    const handleClick = (section: string) => {
        setSection(section);
    }

    return (
        <li className={`w-fit flex justify-start items-center gap-2 cursor-pointer ${section === path ? "text-highlight-text" : "text-primary-text"}`} onClick={() => handleClick(path)}>
            <Image
                src={section === path ? ChevronSelected : ChevronGray}
                width={20}
                height={20}
                className={`${section === path ? "rotate-90" : ""}`}
                alt=""
            />
            <Image src={img} alt="" width={20} height={20} />
            <span>{text}</span>
        </li>
    )
}

export default AboutLink