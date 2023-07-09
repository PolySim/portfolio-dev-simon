import { IntroductionStyled, Presentation } from "@/styled";

export default function Introduction(): JSX.Element {
  return (
    <IntroductionStyled>
      <div>
        <img src="/me.png" alt="Simon Desdevises" />
      </div>
      <Presentation>
        <p>Welcome, I am</p>
        <p>SIMON</p>
        <div>Fullstack developpeur</div>
      </Presentation>
    </IntroductionStyled>
  );
}
