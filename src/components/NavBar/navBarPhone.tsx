import { NavBarPhoneStyle, Section } from "@/styled.ts";
import sections from "@/components/NavBar/sections.ts";
import { useState } from "react";
import { NavBarProps } from "@/type.ts";

export default function NavBarPhone({
  sectionViewing,
  setSectionViewing,
}: NavBarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavBarPhoneStyle $open={isOpen}>
      <div onClick={() => setIsOpen((curr) => !curr)}>
        <span />
        <span />
        <span />
      </div>

      <div>
        {sections.map((section, index) => (
          <Section
            $selected={index === sectionViewing}
            key={section.name}
            onClick={() => {
              setIsOpen(false);
              setSectionViewing(index);
            }}
          >
            {section.name}
          </Section>
        ))}
      </div>
    </NavBarPhoneStyle>
  );
}
