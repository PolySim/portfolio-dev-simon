import { NavIntoProjectStyle } from "@/styled.ts";
import { useState } from "react";

export default function NavIntoProject({
  element,
}: {
  element: HTMLElement | null;
}): JSX.Element {
  const [firstPage, setFirstPage] = useState<boolean>(true);
  const handleScroll = (element: HTMLElement | null, left: boolean) => {
    if (element) {
      left ? (element.scrollLeft = 400) : (element.scrollLeft = 0);
      left ? setFirstPage(false) : setFirstPage(true);
    }
  };

  return (
    <NavIntoProjectStyle $firstPage={firstPage}>
      <div onClick={() => handleScroll(element, false)}>
        <svg viewBox="0 0 24 24">
          <path d="m13.83 19a1 1 0 0 1 -.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28l-4.47 5.36 4.32 5.36a1 1 0 0 1 -.78 1.64z" />
        </svg>
      </div>
      <div onClick={() => handleScroll(element, true)}>
        <svg viewBox="0 0 24 24">
          <path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" />
        </svg>
      </div>
    </NavIntoProjectStyle>
  );
}
