import { Container } from "@/styled";
import Introduction from "./Introduction";
import NavBar from "./NavBar";
import { useState } from "react";

export default function App(): JSX.Element {
  const [sectionViewing, setSectionViewing] = useState<number>(0);

  return (
    <>
      <NavBar
        sectionViewing={sectionViewing}
        setSectionViewing={setSectionViewing}
      />
      <Container>
        <Introduction />
      </Container>
    </>
  );
}
