"use client"
import {useState} from "react"
import Image from "next/image"
import ChevronSelected from "../assets/chevron-white-filled.svg"
import EmailSvg from "../assets/email.svg"
import PhoneSvg from "../assets/phone.svg"
import ExternalLinkSvg from "../assets/external-link.svg"
import IconAndText from "./IconAndText"

interface AccordionStateInterface {
    contact: boolean,
    find_me: boolean
}

const ContactSideBar = () => {

    const [accordionOpen, setAccordionOpen] = useState<AccordionStateInterface>({contact: true, find_me: true});

    return (
        <div className="border-r border-r-line-color text-xs 2xl:text-base">
            <div className="flex gap-4 p-2 border-b border-line-color text-highlight-text" onClick={() => setAccordionOpen(prev => ({contact: !prev.contact, find_me: prev.find_me}))}>
                <Image
                    src={ChevronSelected}
                    width={20}
                    height={20}
                    alt=""
                />
                contacts
            </div>
            <div className={`w-full py-4 px-2 space-y-2 ${!accordionOpen.contact && "hidden"}`}>
                <IconAndText icon={EmailSvg} text="daniel.carrasco.dev @gmail.com" />
                <IconAndText icon={PhoneSvg} text="+34 680923983" />
            </div>
        <div className="w-full flex gap-4 p-2 border-y border-line-color text-highlight-text" onClick={() => setAccordionOpen(prev => ({contact: prev.contact, find_me: !prev.find_me}))}>
                <Image
                    src={ChevronSelected}
                    width={20}
                    height={20}
                    alt=""
                />
                find-me-also-in
            </div>
            <div className={`w-full py-4 px-2 space-y-2 ${!accordionOpen.find_me && "hidden"}`}>
                <IconAndText link="https://github.com/DaniPhilo" icon={ExternalLinkSvg} text="GitHub" />
                <IconAndText link="https://www.linkedin.com/in/daniel-carrasco-casado/" icon={ExternalLinkSvg} text="LinkedIn" />
            </div>
        </div>
    )
}

export default ContactSideBar