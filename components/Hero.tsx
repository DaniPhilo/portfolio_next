"use client"
import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Hero = () => {

    const customClass = "bg-background-fill"
    return (
        <div className="flex flex-col justify-center items-start 2xl:gap-14 text-md">
            <div>
                <p className="text-lg text-highlight-text">Hi all, I am</p>
                <h1 className="text-headline-medium 2xl:text-headline text-highlight-text">Daniel Carrasco</h1>
                <p className="text-subheadline-medium 2xl:text-subheadline text-secondary-purple">&gt; Full-stack Developer</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <p>// complete the game to continue</p>
                <p>// you can also see it on my Github page</p>
                
                <div className='flex gap-2 font-semibold'>
                    <span className='text-secondary-purple'>const</span>
                    <span className='text-accent-turquoise'>gitHubLink</span>
                    <span className='text-highlight-text'>=</span>
                    <div>
                        <span className='text-accent-red'>"</span>
                        <Link
                            href={"https://github.com/DaniPhilo"}
                            className='text-accent-red underline underline-offset-4'
                        >
                            https://github.com/DaniPhilo
                        </Link>
                        <span className='text-accent-red'>"</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero