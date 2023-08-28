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

    useEffect(() => {
        setImgUrl("bg-[url('" + project.img + "')]");
    }, [])


    return (
        <div className={`group relative w-[300px] xl:w-[400px] h-[200px] xl:h-[250px] ${imgUrl} bg-cover bg-center bg-no-repeat rounded overflow-hidden duration-500 hover:scale-[1.025] `}>
            <div className="lg:translate-y-[70%] xl:translate-y-[75%] h-full p-2 duration-500 lg:group-hover:translate-y-[0%] bg-[#01162788] lg:bg-transparent lg:bg-gradient-to-b from-transparent via-[#00000055] via-20% to-[#000000cc]">
                <h3 className="font-semibold lg:text-xl text-highlight-text">{project.name}</h3>
                <p className="text-accent-turquoise">{project.technologies.join(" | ")}</p>
                <p className="text-highlight-text text-xs lg:text-sm xl:text-lg">{project.description}</p>
            </div>
            <div className="absolute top-0 right-0 z-10 flex gap-2 p-2">
                <Link href={project.ghLink}>
                    <Image
                        src={GhIcon}
                        alt=""
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href={project.projectLink}>
                    <Image
                        src={LinkIcon}
                        alt=""
                        width={20}
                        height={20}
                    />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard