import { SkillStyle, SkillsStyle } from "@/styled";
import skills from "./skills";

export default function Skills(): JSX.Element {
  return (
    <SkillsStyle>
      <div>
        <h3>Frontend</h3>
        <div>
          {skills.frontend.map((skill) => (
            <SkillStyle
              background={skill.background}
              name={skill.name}
              key={skill.name}
            >
              <div>
                <img src={skill.path} alt={skill.name} />
              </div>
              <a href={skill.doc} target="_blank" />
            </SkillStyle>
          ))}
        </div>
      </div>
      <div>
        <h3>Backend and tools</h3>
        <div>
          {skills.backend.map((skill) => (
            <SkillStyle
              background={skill.background}
              name={skill.name}
              key={skill.name}
            >
              <div>
                <img src={skill.path} alt={skill.name} />
              </div>
              <a href={skill.doc} target="_blank" />
            </SkillStyle>
          ))}
        </div>
      </div>
    </SkillsStyle>
  );
}
