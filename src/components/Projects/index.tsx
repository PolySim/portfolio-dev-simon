import { ProjectsStyle } from "@/styled";
import project from "./projects";
import Project from "./Project";

export default function Projects(): JSX.Element {
  return (
    <ProjectsStyle>
      <div>
        {project.slice(0, 2).map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
      <div>
        {project.slice(2).map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </ProjectsStyle>
  );
}
