import ProjectCard from "../components/ProjectCard";


function ProjectPage() {
    return <div className="flex flex-col p-24">
        <span className="text-2xl font-semibold">Featured Projects</span>
        <ProjectCard></ProjectCard>
        <ProjectCard isRight={true}></ProjectCard>
        <ProjectCard></ProjectCard>

    </div>
}


export default ProjectPage;