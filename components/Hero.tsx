"use client"
import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Hero = () => {

    const customClass = "bg-background-fill"
    return (
        <div className="flex flex-col justify-center items-start gap-14">
            <div>
                <p className="text-lg text-highlight-text">Hi all, I am</p>
                <h1 className="text-headline text-highlight-text">Daniel Carrasco</h1>
                <p className="text-subheadline text-secondary-purple">&gt; Full-stack Developer</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <p>// complete the game to continue</p>
                <p>// you can also see it on my Github page</p>
                <Link href={"https://github.com/DaniPhilo"} className='hover:underline underline-offset-4 decoration-secondary-gray'>
                    <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={
                        {
                            backgroundColor: "#011627",
                            padding: "0"
                        }
                    }>
                        {`const githubLink = "https://github.com/example/url"`}
                    </SyntaxHighlighter>
                </Link>

            </div>
        </div>
    )
}

export default Hero