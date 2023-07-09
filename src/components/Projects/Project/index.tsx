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
        <div>{project.name}</div>
      </div>
    </ProjectStyle>
  );
}
