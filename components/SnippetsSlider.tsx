"use client"
import { getGists } from "@/services/api-calls";
import { useEffect, useRef, useState } from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, vs2015, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const ITEM_WIDTH = 600;
const ITEM_HEIGHT = 150;
const PADDING_Y = 5;

const SnippetsSlider = () => {

    const [snippets, setSnippets] = useState<any[]>([]);

    useEffect(() => {
        getGists()
        .then(res => setSnippets(res));
    },[]);

    const [animationOn, setAnimationOn] = useState(true);

    const selectedIndex = useRef(0);

    const el = useRef<HTMLDivElement>(null);

    const doSelect = (targetIndex: number) => {        
        const children = Array.from(el.current!.children) as HTMLDivElement[];
        selectedIndex.current = targetIndex;

        // Update snippets scale and opacity relatively to their ditances from the selected snippet
        children.forEach((el: HTMLDivElement, index) => {
            if (index === targetIndex - 2 || index === targetIndex + 2) {
                el.style.transform = "scale(0.7)";
                el.style.zIndex = "2";
                el.style.opacity = "0.25";
            }
            else if (index === targetIndex - 1 || index === targetIndex + 1) {
                el.style.transform = "scale(0.8)";
                el.style.zIndex = "2";
                el.style.opacity = "0.5";
            }
            else if (index === targetIndex) {
                el.style.transform = "scale(1)";
                el.style.zIndex = "9";
                el.style.opacity = "1";
            }
            else {
                el.style.transform = "scale(0.7)";
                el.style.zIndex = "2";
                el.style.opacity = "0";
            }
        })

        // Update container position
        const height = ITEM_HEIGHT + PADDING_Y;
        el.current!.style.transform = `translateY(calc(50% - ${height * targetIndex + height * 0.5}px))`;
    }

    const autoScroll = () => {        
        if (selectedIndex.current === snippets.length - 1) {
            doSelect(0);
        } else {
            doSelect(selectedIndex.current + 1);
        }
    }

    useEffect(() => {
        // If mouse is not hovering, autoscroll
        const intervalId = animationOn ? setInterval(autoScroll, 2000) : undefined;
        return () => clearInterval(intervalId);
    }, [animationOn, snippets])

    return (
        <div
            ref={el}
            className={`relative w-full h-full mx-auto transition-all duration-700`}
            onMouseEnter={() => setAnimationOn(false)}
            onMouseLeave={() => setAnimationOn(true)}
        >
            {
                snippets.map((snippet, index) => {
                    return (
                        <div
                            key={index}
                            className={`absolute left-0 w-full p-2 bg-background-fill transition-all duration-700 ease-out origin-center rounded-xl overflow-y-auto cursor-pointer snippet-scrollbar`}
                            style={{
                                // width: "500px",
                                height: ITEM_HEIGHT,
                                top: (ITEM_HEIGHT + PADDING_Y) * index,
                                opacity: Math.abs(-selectedIndex.current - (-index)) === 1 ?
                                    "0.5"
                                    : Math.abs(-selectedIndex.current - (-index)) === 2 ?
                                        "0.25"
                                        : 1,
                                transform: selectedIndex.current === index ? "scale(1)" : "scale(0.8)"
                            }}
                            onClick={(e) => doSelect(index)}
                        >
                            <SyntaxHighlighter 
                            language="javascript" 
                            style={atomOneDark}
                            customStyle={{backgroundColor: "transparent", fontSize: "0.7em"}}
                            >
                                {snippet.data.files[Object.keys(snippet.data.files) as any].content}
                            </SyntaxHighlighter>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SnippetsSlider