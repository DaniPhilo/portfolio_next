"use client"
import { Project } from "@/interfaces/project"
import ProjectCard from "./ProjectCard"
import ProjectTags from "./ProjectTags"
import { useEffect, useState } from "react"

interface ProjectContainerProps {
    projects: Project[]
}

const ProjectContainer = ({ projects }: ProjectContainerProps) => {

    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.tags.some(tag => selectedTags.includes(tag))))
        }
    }, [selectedTags]);

    return (
        <div className="w-full h-full lg:flex overflow-y-scroll">
            <ProjectTags projects={projects} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <div className="w-full h-full p-4 lg:p-6 flex flex-wrap justify-center lg:justify-start lg:content-start gap-6 lg:overflow-y-auto">
                {
                    filteredProjects.map((project, i) => {
                        return (
                            <ProjectCard key={i} project={project} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectContainer