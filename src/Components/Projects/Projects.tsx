import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <ScrollAnimation>
        <div className="container-fullscreen p-2 justify-center items-center flex flex-col">
          <h1
            id="projects"
            className="text-4xl font-semibold py-10 flex justify-center"
          >
            Projects
          </h1>
          <div className="container-fulls flex flex-wrap gap-2 justify-center px-2">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
