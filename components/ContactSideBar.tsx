"use client"

import Image from "next/image"
import ChevronSelected from "../assets/chevron-white-filled.svg"
import EmailSvg from "../assets/email.svg"
import PhoneSvg from "../assets/phone.svg"
import ExternalLinkSvg from "../assets/external-link.svg"
import IconAndText from "./IconAndText"

const ContactSideBar = () => {
    return (
        <div className="border-r border-r-line-color">
            <div className="w-full flex gap-4 p-2 border-b border-line-color text-highlight-text">
                <Image
                    src={ChevronSelected}
                    width={20}
                    height={20}
                    alt=""
                />
                contacts
            </div>
            <div className="w-full py-4 px-2 space-y-2">
                <IconAndText icon={EmailSvg} text="daniel.carrasco.dev@gmail.com" />
                <IconAndText icon={PhoneSvg} text="+34 680923983" />
            </div>
            <div className="w-full flex gap-4 p-2 border-y border-line-color text-highlight-text">
                <Image
                    src={ChevronSelected}
                    width={20}
                    height={20}
                    alt=""
                />
                find-me-also-in
            </div>
            <div className="w-full py-4 px-2 space-y-2">
                <IconAndText link="https://github.com/DaniPhilo" icon={ExternalLinkSvg} text="GitHub" />
                <IconAndText link="https://www.linkedin.com/in/daniel-carrasco-casado/" icon={ExternalLinkSvg} text="LinkedIn" />
            </div>
        </div>
    )
}

export default ContactSideBar