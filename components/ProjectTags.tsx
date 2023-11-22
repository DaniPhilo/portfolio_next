"use client"
import { useEffect, useState } from "react"
import { Project } from "@/interfaces/project"
import Image from "next/image"
import Checkbox from "@/assets/checkbox.svg"
import Chevron from "@/assets/chevron-white-filled.svg"

interface ProjectTagsProps {
    projects: Project[],
    selectedTags: string[],
    setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
}

const ProjectTags = ({ projects, selectedTags, setSelectedTags }: ProjectTagsProps) => {

    const [showFilters, setShowFilters] = useState<boolean>(true);
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const uniqueTags = projects.reduce((acc: string[], curr) => {
            const holdAcc = [...acc];
            curr.tags.forEach(tag => !holdAcc.includes(tag) && holdAcc.push(tag));
            return holdAcc
        }, []);
        setTags(uniqueTags);
    }, []);

    const handleOnClick = (tag: string) => {
        setSelectedTags(prev => {
            return prev.includes(tag) ? prev.filter(str => str !== tag) : [...prev, tag]
        })
    }
    return (
        <div className="lg:min-w-[300px] border-r border-r-line-color">
            <div className="w-full flex gap-4 py-2 px-4 lg:px-6 border-b border-line-color" onClick={() => setShowFilters(prev => !prev)}>
                <Image
                    src={Chevron}
                    alt=""
                    className={`${showFilters ? "" : "rotate-[-90deg]"}`}
                />
                <p className="text-highlight-text">projects</p>
            </div>
            <div className={`flex flex-col justify-start items-start gap-2 p-4 lg:p-6 ${!showFilters && "hidden"}`}>
                {
                    tags.map((tag, i) => {
                        const isSelected = selectedTags.includes(tag);

                        return (
                            <div key={tag} className="w-fit flex gap-2 items-center" onClick={() => handleOnClick(tag)}>
                                {
                                    isSelected ?
                                        <Image src={Checkbox} alt="" width={20} height={20} />
                                        :
                                        <div className="w-5 h-5 border border-line-color rounded cursor-pointer"></div>
                                }
                                <label
                                    htmlFor={tag}
                                    className={`${isSelected && "text-highlight-text"} cursor-pointer`}
                                >
                                    {tag}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectTags