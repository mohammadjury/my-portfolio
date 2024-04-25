import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import ProjectCard from "./ProjectCard";
import IMG1 from "../../../public/JurlyStoreImg.png";
import IMG2 from "../../../public/nodejs.png";
import IMG3 from "../../../public/C-Sharp.png";

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
            <ProjectCard
              projectTitle="Jurly E-commerce Store"
              projectDescription="This project utilizes ReactJS, C# / ASP.NET, SQL and Bootstrap to create a dynamic and scalable e-commerce platform."
              Repo="https://github.com/mohammadjury/jurly-store"
              projectImg={IMG1.src}
            />
            <ProjectCard
              projectTitle="Eco Track API"
              projectDescription="employing Node.js and RESTful APIs to establish a sophisticated environmental monitoring solution."
              projectImg={IMG2.src}
              Repo="https://github.com/mohammadjury/EcoTrack"
            />
            <ProjectCard
              projectTitle="Game Store API"
              projectDescription="Backend for a game store application, providing endpoints to manage games and genres. built using C# ASP.NET."
              projectImg={IMG3.src}
              Repo="https://github.com/mohammadjury/asp.net-backend-api"
            />
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
