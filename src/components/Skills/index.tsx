import { SkillStyle, SkillsStyle } from "@/styled";
import skills from "./skills";

export default function Skills(): JSX.Element {
  return (
    <SkillsStyle>
      <div>
        <h3>Frontend</h3>
        <div>
          {skills.frontend.map((skill) => (
            <SkillStyle background={skill.background} key={skill.name}>
              <div>
                <img src={skill.path} alt={skill.name} />
              </div>
              <div />
            </SkillStyle>
          ))}
        </div>
      </div>
      <div>
        <h3>Backend and tools</h3>
        <div>
          {skills.backend.map((skill) => (
            <SkillStyle background={skill.background} key={skill.name}>
              <div>
                <img src={skill.path} alt={skill.name} />
              </div>
              <div />
            </SkillStyle>
          ))}
        </div>
      </div>
    </SkillsStyle>
  );
}
