import { SkillStyle, SkillsStyle } from "@/styled";
import skills from "./skills";
import { useRef } from "react";

export default function Skills({
  phoneMode,
}: {
  phoneMode: boolean;
}): JSX.Element {
  const containerRef = useRef<HTMLElement>(null);

  const handleScroll = (element: HTMLElement | null, left: boolean) => {
    if (element) {
      left ? (element.scrollLeft = 400) : (element.scrollLeft = 0);
    }
  };

  return (
    <SkillsStyle ref={containerRef}>
      <div>
        {phoneMode ? (
          <h3 onClick={() => handleScroll(containerRef.current, true)}>
            Scroll right to Backend and Tools
          </h3>
        ) : (
          <h3>Frontend</h3>
        )}
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
        {phoneMode ? (
          <h3 onClick={() => handleScroll(containerRef.current, false)}>
            Scroll left to Frontend
          </h3>
        ) : (
          <h3>Backend and Tools</h3>
        )}
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
