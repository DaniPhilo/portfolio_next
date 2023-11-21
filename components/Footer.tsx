import Image from "next/image"
import Link from "next/link"
import LinkedinIcon from '@/assets/linkedin-icon.svg'
import GitHubIcon from '@/assets/github-icon.svg'

const Footer = () => {
    return (
        <footer className='w-full flex justify-start items-center border-t border-line-color rounded'>
            <div className='max-w-[300px] p-2 lg:p-4 border-r border-r-line-color'>
                <p>find me in:</p>
            </div>
            <div className='h-full flex'>
                <Link href={"https://github.com/DaniPhilo"} target='_blank' className='w-[40px] lg:w-[60px] flex justify-center items-center p-2 lg:p-4 border-r border-line-color'>
                    <Image
                        src={GitHubIcon}
                        alt=''
                        className='w-full'
                    />
                </Link>
                <Link href={"https://www.linkedin.com/in/daniel-carrasco-casado/"} target='_blank' className='w-[40px] lg:w-[60px] h-full flex justify-center items-center p-2 lg:p-4 border-r border-line-color'>
                    <Image
                        src={LinkedinIcon}
                        alt=''
                        className='w-full'
                    />
                </Link>
            </div>
        </footer>
    )
}

export default Footer