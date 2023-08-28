"use client"
import {useState, useEffect} from "react"
import { Project } from "@/interfaces/project"

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const [imgUrl, setImgUrl] = useState<string>("");

    useEffect(() => {
      setImgUrl("bg-[url('" + project.img + "')]");
    }, [])
    

    return (
        <div className={`relative w-[500px] h-[300px] ${imgUrl} bg-cover bg-center bg-no-repeat overflow-hidden`}>
            <h3>{project.name}</h3>
        </div>
    )
}

export default ProjectCard