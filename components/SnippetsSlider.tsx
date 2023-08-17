"use client"
import { useEffect, useRef, useState } from "react";

const ITEM_WIDTH = 600;
const ITEM_HEIGHT = 150;
const PADDING_Y = 20;

const SnippetsSlider = ({ snippets }: { snippets: number[] }) => {

    const [animationOn, setAnimationOn] = useState(true);

    const selectedIndex = useRef(0);

    const el = useRef<HTMLDivElement>(null);

    const doSelect = (targetIndex: number) => {
        const children = Array.from(el.current!.children) as HTMLDivElement[];
        selectedIndex.current = targetIndex;

        // Update snippets scale and opacity relatively to their ditances from the selected snippet
        children.forEach((el: HTMLDivElement, index) => {
            if (index === targetIndex - 2) {
                el.style.transform = "scale(0.9)";
                el.style.opacity = "0.25";
            }
            else if (index === targetIndex - 1) {
                el.style.transform = "scale(1)";
                el.style.zIndex = "0";
                el.style.opacity = "0.5";
            }
            else if (index === targetIndex + 1) {
                el.style.transform = "scale(1)";
                el.style.zIndex = "0";
                el.style.opacity = "0.5";
            }
            else if (index === targetIndex + 2) {
                el.style.transform = "scale(0.9)";
                el.style.opacity = "0.25";
            }
            else if (index === targetIndex) {
                el.style.transform = "scale(1.15)";
                el.style.zIndex = "1";
                el.style.opacity = "1";
            }
            else {
                el.style.transform = "scale(0.9)";
                el.style.zIndex = "0";
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
    }, [animationOn])

    return (
        <div 
        ref={el} 
        className={`relative h-full mx-auto transition-all duration-700`} style={{ width: ITEM_WIDTH }}
        onMouseEnter={() => setAnimationOn(false)}
        onMouseLeave={() => setAnimationOn(true)}
        >
            {
                snippets.map((snippet, index) => {
                    return (
                        <div
                            key={index}
                            className={`absolute left-0 w-full p-4 bg-line-color transition-all duration-700 ease-out origin-center rounded-xl`}
                            style={{
                                // width: ITEM_WIDTH,
                                height: ITEM_HEIGHT,
                                top: (ITEM_HEIGHT + PADDING_Y) * index,
                                opacity: Math.abs(-selectedIndex.current - (-index)) === 1 ?
                                    "0.5"
                                    : Math.abs(-selectedIndex.current - (-index)) === 2 ?
                                        "0.25"
                                        : 1
                            }}
                            onClick={(e) => doSelect(index)}
                        >
                            {"Item " + snippet}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SnippetsSlider