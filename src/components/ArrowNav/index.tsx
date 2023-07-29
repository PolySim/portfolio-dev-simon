import { ArrowDown } from "@/styled";
import React from "react";

export default function ArrowNav({
  last,
  setSectionViewing,
}: {
  last: boolean;
  setSectionViewing: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const handleClick = () => {
    setSectionViewing((curr) => (curr === 4 ? 4 : curr + 1));
  };

  return (
    <ArrowDown onClick={handleClick} $last={last}>
      <svg width="72px" height="72px" viewBox="0 0 24 24" fill="none">
        <path
          id="Vector"
          d="M12 7V17M12 17L16 13M12 17L8 13"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ArrowDown>
  );
}
