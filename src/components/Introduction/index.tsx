import { IntroductionStyled, Presentation } from "@/styled";

export default function Introduction(): JSX.Element {
  return (
    <IntroductionStyled>
      <div>
        <img src="/me.png" alt="Simon Desdevises" />
      </div>
      <Presentation>
        <p>Bienvenue, je suis</p>
        <p>SIMON</p>
        <div>Fullstack developpeur</div>
      </Presentation>
    </IntroductionStyled>
  );
}
