import { ProjectsStyle } from "@/styled";
import project from "./projects";
import Project from "./Project";
import NavIntoProject from "@/components/Projects/navIntoProject.tsx";
import { useRef } from "react";

export default function Projects({
  phoneMode,
  visible,
}: {
  phoneMode: boolean;
  visible: boolean;
}): JSX.Element {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <ProjectsStyle ref={containerRef}>
      {phoneMode && visible ? (
        <NavIntoProject element={containerRef.current} />
      ) : (
        <></>
      )}
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
