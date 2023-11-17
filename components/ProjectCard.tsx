"use client"
import { useState, useEffect } from "react"
import { Project } from "@/interfaces/project"
import Image from "next/image"
import GhIcon from "../assets/github-icon.svg"
import LinkIcon from "../assets/external-link.svg"
import Link from "next/link"

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const [imgUrl, setImgUrl] = useState<string>("");

    // useEffect(() => {
    //     setImgUrl("bg-[url('" + project.img + "')]");
    // }, [])


    return (
        <Link href={project.projectLink} target="_black" style={{backgroundImage: `url('${project.img}')`}} className={`group relative z-0 w-[275px] h-[150px] 2xl:w-[350px] 2xl:h-[200px] bg-cover bg-center bg-no-repeat rounded overflow-hidden duration-500 hover:scale-[1.025]`}>
            <div className="translate-y-[78%] 2xl:translate-y-[81%] h-full p-2 duration-500 lg:group-hover:translate-y-[0%] lg:bg-gradient-to-b from-transparent via-[#00000099] via-20% to-[#000000cc]">
                <h3 className="font-semibold text-highlight-text 2xl:text-lg">{project.name}</h3>
                <p className="text-accent-turquoise text-sm 2xl:text-base">{project.technologies.join(" | ")}</p>
                <p className="max-h-[145px] 2xl:max-h-[140px] text-highlight-text text-xs 2xl:text-base overflow-y-auto project-scrollbar">{project.description}</p>
            </div>
            <div className="absolute top-0 right-0 z-10 flex gap-2 p-2">
                <Link href={project.ghLink} target="_blank">
                    <Image
                        src={GhIcon}
                        alt=""
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href={project.projectLink} target="_blank">
                    <Image
                        src={LinkIcon}
                        alt=""
                        width={20}
                        height={20}
                    />
                </Link>
            </div>
        </Link>
    )
}

export default ProjectCard