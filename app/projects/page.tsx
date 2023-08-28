import ProjectContainer from "@/components/ProjectContainer";
import ProjectTags from "@/components/ProjectTags";
import { projects } from "@/helpers/projects";

const ProjectPage = () => {
    return (
        <div className="h-full">
            <ProjectContainer projects={projects} />
        </div>
    )
}

export default ProjectPage