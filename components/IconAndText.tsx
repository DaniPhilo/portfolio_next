import Image from "next/image"
import Link from "next/link"

interface IconAndTextProps {
    link?: string,
    icon: string,
    text: string
}

const IconAndText = ({ link, icon, text }: IconAndTextProps) => {
    return (
        <div>
            {
                link ?
                    <Link href={link} className="w-full flex items-start gap-4 break-all hover:text-highlight-text" target="_blank">
                        <Image
                            src={icon}
                            width={20}
                            height={20}
                            alt=""
                        />
                        <p>{text}</p>
                    </Link>
                    :
                    <div className="w-full flex items-start gap-4 break-all">
                        <Image
                            src={icon}
                            width={20}
                            height={20}
                            alt=""
                        />
                        <p>{text}</p>
                    </div>

            }
        </div>
    )
}

export default IconAndText