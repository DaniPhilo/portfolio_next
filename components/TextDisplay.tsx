import { useEffect, useRef, useState } from 'react';
import BioText from './BioText';
import ExperienceText from './ExperienceText';

function countLines(ref: React.RefObject<HTMLDivElement>) {
    const div = ref.current;
    if (div) {
        const elementHeight: number = div.offsetHeight;
        const lineHeight: number = parseInt(window.getComputedStyle(div).lineHeight);
        const lines: number = Math.round(elementHeight / lineHeight);
        console.log(lines);

        return lines
    }

    return 0;
}

interface TextDisplayProps {
    section: string
}

const TextDisplay = ({ section }: TextDisplayProps) => {

    const textRef = useRef<HTMLDivElement>(null);
    const [numArray, setNumArray] = useState<number[]>([]);
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        const lines = countLines(textRef);
        const array = Array.from(Array(lines + 1).keys());
        setNumArray(array);
    }, [windowWidth, section]);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className='flex justify-start items-start gap-6'>
            <div className='min-w-[50px] flex flex-col'>
                {
                    numArray.map(num => (
                        <div key={num} className='flex justify-between'>
                            <span>{num + 1}</span>
                            {
                                section === "bio" &&
                                <span>
                                    {num === 0 ?
                                        "/**"
                                        : num === numArray.length - 1 ?
                                            "*/"
                                            : "*"}
                                </span>
                            }
                        </div>
                    )
                    )
                }
            </div>
            <div ref={textRef}>
                {
                    section === "bio" ?
                        <BioText />
                        :
                        section === "experience" ?
                            <ExperienceText />
                            : ""
                }
            </div>

            <div></div>
        </div>
    )
}

export default TextDisplay