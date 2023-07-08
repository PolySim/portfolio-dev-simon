import { BackgroundHover, NavBarStyle, SectionNavBar } from "@/styled";
import sections from "./sections";
import { NavBarProps } from "@/type";
import { useState } from "react";
import hoverPosition from "./hoverPosition";

export default function NavBar({
  sectionViewing,
  setSectionViewing,
}: NavBarProps): JSX.Element {
  const [sectionHover, setSectionHover] = useState<number>(-1);

  return (
    <NavBarStyle onMouseLeave={() => setSectionHover(-1)}>
      {sections.map((section, i) => (
        <SectionNavBar
          selected={sectionViewing === i}
          last={sections.length === i + 1 ? "true" : "false"}
          onClick={() => setSectionViewing(i)}
          onMouseEnter={() => setSectionHover(i)}
          key={section.name}
        >
          {section.name}
        </SectionNavBar>
      ))}
      {sectionHover === -1 ? (
        <></>
      ) : (
        <BackgroundHover
          width={sections[sectionHover].width}
          position={hoverPosition(sectionHover)}
        />
      )}
    </NavBarStyle>
  );
}
