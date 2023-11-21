"use client"
import Link from 'next/link';

const Hero = () => {

    return (
        <div className="w-full flex flex-col justify-center items-start 2xl:gap-14 text-md">
            <div className='mb-20 lg:m-0'>
                <p className="text-sm lg:text-lg text-highlight-text">Hi all, I am</p>
                <h1 className="text-headline-small lg:text-headline-medium 2xl:text-headline text-highlight-text leading-none lg:leading-normal">Daniel Carrasco</h1>
                <p className="text-subheadline-small lg:text-subheadline-medium 2xl:text-subheadline text-secondary-purple">&gt; Full-stack Developer</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 text-sm">
                {/* <p>// complete the game to continue</p> */}
                <p>// find my profile on GitHub</p>
                
                <div className='flex flex-wrap gap-2 font-semibold'>
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