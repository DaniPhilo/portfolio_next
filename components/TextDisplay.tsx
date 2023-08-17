import SyntaxHighlighter from 'react-syntax-highlighter';
import { bioText } from "../helpers/texts"
import { useEffect, useRef, useState } from 'react';

function useCountLines(ref: React.RefObject<HTMLDivElement>) {
    const divs = ref.current?.children as HTMLCollection | null;
    if (divs) {
        const totalLines: number = [...divs].reduce((acc, curr) => {
            const elementHeight: number = curr.offsetHeight;
            const lineHeight: number = parseInt(window.getComputedStyle(curr).lineHeight);
            const lines: number = Math.round(elementHeight / lineHeight);
            console.log(lines);

            return acc + lines
        }, 0);
        return totalLines
    }

    return null;
}

const TextDisplay = () => {

    const textRef = useRef<HTMLDivElement>(null);
    const [numArray, setNumArray] = useState<number[]>([]);
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        const lines = useCountLines(textRef);
        const array = Array.from(Array(lines + 1 || 0).keys());
        setNumArray(array);
    }, [windowWidth]);

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
        <div className='grid grid-cols-[50px_1fr] gap-x-4'>
            <div className='flex flex-col'>
                {
                    numArray.map(num => (
                        <div key={num} className='flex justify-between'>
                            <span>{num + 1}</span>
                            <span>
                                {num === 0 ?
                                    "/**"
                                    : num === numArray.length - 1 ?
                                        "*/"
                                        : "*"}
                            </span>
                        </div>
                    )
                    )
                }
            </div>
            <div ref={textRef}>
                {bioText.map((text, i) => {
                    return (
                        <SyntaxHighlighter
                            key={i}
                            language='htmlbars'
                            wrapLongLines
                            customStyle={{
                                backgroundColor: "#011627",
                                color: "#607B96",
                                padding: "24px 0 0 0",
                                overflow: "hidden"
                            }}
                        >
                            {text}
                        </SyntaxHighlighter>
                    )
                })}

            </div>

            <div></div>
        </div>
    )
}

export default TextDisplay