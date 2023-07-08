import { Container } from "@/styled";
import Introduction from "./Introduction";
import NavBar from "./NavBar";
import { useEffect, useRef, useState } from "react";
import ArrowNav from "./ArrowNav";
import Skills from "./Skills";
import { HandleScroll } from "@/type";
import { useScrolling } from "react-use";

export default function App(): JSX.Element {
  const [sectionViewing, setSectionViewing] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useScrolling(containerRef);

  useEffect(() => {
    const element = containerRef.current;
    if (element && !isScrolling) {
      element.scrollTop = sectionViewing * window.innerHeight;
    }
  }, [sectionViewing, isScrolling]);

  const handleScroll: HandleScroll = (element) => {
    if (element) {
      setSectionViewing(Math.round(element.scrollTop / window.innerHeight));
    }
  };

  return (
    <>
      <NavBar
        sectionViewing={sectionViewing}
        setSectionViewing={setSectionViewing}
      />

      <Container
        ref={containerRef}
        onScroll={() => handleScroll(containerRef.current)}
      >
        <Introduction />
        <Skills />
      </Container>

      <ArrowNav setSectionViewing={setSectionViewing} />
    </>
  );
}
