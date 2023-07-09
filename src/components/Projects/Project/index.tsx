import { ProjectStyle } from "@/styled";
import { ProjectProps } from "@/type";

export default function Project({
  project,
}: {
  project: ProjectProps;
}): JSX.Element {
  return (
    <ProjectStyle>
      <div>
        <div>
          <img src={project.imgPath} alt={project.name} />
        </div>
        <div>
          <h5>{project.name}</h5>
          <div>
            <a href={project.sourceCodePath} target="_blank">
              Source code
            </a>
            <a href={project.demoPath} target="_blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </ProjectStyle>
  );
}
