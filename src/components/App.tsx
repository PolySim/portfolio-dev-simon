import { Container } from "@/styled";
import Introduction from "./Introduction";
import NavBar from "./NavBar";
import { useEffect, useRef, useState } from "react";
import ArrowNav from "./ArrowNav";
import Skills from "./Skills";
import { HandleScroll } from "@/type";
import { useScrolling } from "react-use";
import Projects from "./Projects";
import Contact from "./Contact";
import Encrypt from "@/components/Encrypt";
import NavBarPhone from "@/components/NavBar/navBarPhone.tsx";

export default function App(): JSX.Element {
  const [sectionViewing, setSectionViewing] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useScrolling(containerRef);
  const [windowWiwth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const element = containerRef.current;
    if (element && !isScrolling) {
      element.scrollTop = sectionViewing * window.innerHeight;
    }
  }, [sectionViewing, isScrolling]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWiwth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWiwth]);

  const handleScroll: HandleScroll = (element) => {
    if (element) {
      setSectionViewing(Math.round(element.scrollTop / window.innerHeight));
    }
  };

  return (
    <>
      {windowWiwth > 1000 ? (
        <NavBar
          sectionViewing={sectionViewing}
          setSectionViewing={setSectionViewing}
        />
      ) : (
        <NavBarPhone
          sectionViewing={sectionViewing}
          setSectionViewing={setSectionViewing}
        />
      )}

      <Container
        ref={containerRef}
        onScroll={() => handleScroll(containerRef.current)}
      >
        <Introduction />
        <Skills />
        <Encrypt />
        <Projects />
        <Contact />
      </Container>

      <ArrowNav
        setSectionViewing={setSectionViewing}
        last={sectionViewing === 4 && !isScrolling}
      />
    </>
  );
}
