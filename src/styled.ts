import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  scroll-snap-type: y mandatory;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const IntroductionStyled = styled.section`
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;

  > div:nth-of-type(1) {
    display: flex;
    align-items: end;
    width: 22rem;
    height: 30rem;
    border-radius: 200px 200px 0 0;
    background: linear-gradient(
      180deg,
      rgba(145, 47, 86, 0.4220281862745098) 0%,
      rgba(54, 31, 39, 1) 100%
    );
    box-shadow:
      rgba(145, 47, 86, 0.4220281862745098) 0 50px 100px -20px,
      rgba(54, 31, 39, 1) 0px 30px 60px -30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 200px 200px 0 0;
    }

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

const presentationInfinite = keyframes`
  0% {
    transform: translateY(24px);
  }
  45%, 50% {
    transform: translateY(-24px);
  }
  95%, 100% {
    transform: translateY(24px);
  }
`;

const nameGradient = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 400%;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(243, 239, 245, 0.4);
  animation: ${presentationInfinite} 3s infinite ease-in-out;

  > p:nth-of-type(1) {
    font-size: 40px;
    font-weight: 600;
  }

  > p:nth-of-type(2) {
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 12px;
    font-size: 112px;
    background: linear-gradient(
      90deg,
      #ff0000,
      #ffff00,
      #ff00f3,
      #0033ff,
      #ff00c4,
      #ff0000
    );
    background-size: 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${nameGradient} 10s linear infinite;
  }

  > div {
    font-size: 19px;
    border-radius: 12px;
    background-color: rgba(33, 33, 33, 0.7);
    padding: 12px 24px;
  }
`;

export const NavBarStyle = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);

  font-size: 24px;
  color: #f3eff5;
  border-radius: 12px;
`;

export const NavBarPhoneStyle = styled.div<{ $open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0f0f0f;
  z-index: 1000;
  font-size: 24px;
  color: #f3eff5;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.$open ? "translateX(0)" : "translateX(-100%)"};

  // Cross
  > div:nth-of-type(1) {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.$open ? "translateX(0)" : "translateX(100vw)"};

    > span {
      position: absolute;
      background-color: #f1f1f1;
      height: 2px;
      width: 50px;
      transition:
        transform 0.3s ease-out,
        opacity 0.1s ease-out;
    }

    > span:nth-of-type(1) {
      transform: ${(props) =>
        props.$open ? "translateY(0) rotate(135deg)" : "translateY(-10px)"};
    }

    > span:nth-of-type(2) {
      opacity: ${(props) => (props.$open ? "0" : "1")};
    }

    > span:nth-of-type(3) {
      transform: ${(props) =>
        props.$open ? "translateY(0) rotate(-135deg)" : "translateY(10px)"};
    }
  }

  // Sections
  > div:nth-of-type(2) {
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 12px;
    font-size: 60px;
    text-align: center;
  }
`;

export const Section = styled.section<{ $selected: boolean }>`
  cursor: pointer;
  ${(props) =>
    props.$selected
      ? "background: linear-gradient( 90deg, hsla(329, 91%, 65%, 1) 0%, hsla(350, 91%, 65%, 1) 100% );\n" +
        "    -webkit-background-clip: text;\n" +
        "    background-clip: text;\n" +
        "    -webkit-text-fill-color: transparent;"
      : ""}
`;

export const BackgroundHover = styled.span<{ width: number; position: number }>`
  position: absolute;
  left: 0;
  transform: ${(props) => `translateX(${props.position}px)`};
  transition: all 0.3s ease-in;
  height: 100%;
  width: ${(props) => `${props.width}px`};
  background-color: rgba(33, 33, 33, 0.7);
  border-radius: 12px;
`;

export const SectionNavBar = styled.div<{
  selected: boolean;
  last: "true" | "false";
}>`
  color: ${(props) => (props.selected ? "hsla(350, 91%, 65%, 1)" : "#fff")};
  transition: color 0.15s ease-in;
  cursor: pointer;
  padding: 12px 12px;
  margin-right: ${(props) => (props.last === "true" ? "0" : "12px")};
  border-radius: 12px;
  z-index: 10;
`;

export const ArrowDown = styled.div<{ $last: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50px);
  z-index: 100;

  width: 86px;
  height: 86px;
  color: #f3eff5;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #f3eff5;
  cursor: ${(props) => (props.$last ? "auto" : "pointer")};
  opacity: ${(props) => (props.$last ? "0" : "1")};

  transition:
    all 0.3s ease-in,
    opacity 0.1s ease-in;

  > svg {
    stroke: #f3eff5;
  }

  &:hover {
    background-color: #f3eff5;

    > svg {
      stroke: #000;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SkillsStyle = styled.section`
  scroll-snap-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  h3 {
    color: #fff;
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    letter-spacing: 3px;
    margin-bottom: 48px;
  }

  @media screen and (max-width: 700px) {
    scroll-snap-type: x mandatory;
    overflow: scroll;
    scroll-behavior: smooth;
    justify-content: start;
    > div {
      color: #9c1a1c;
      scroll-snap-align: center;
      min-width: 100vw;
      margin-top: 50px;
    }

    h3 {
      text-align: center;
      margin-bottom: 24px;
    }
  }
`;

export const SkillStyle = styled.div<{ background: string; name: string }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 12px;
  position: relative;
  background: ${(props) => props.background};

  width: 120px;
  height: 120px;
  border-radius: 50%;

  transition: all 0.2s ease-in;

  &::after {
    content: "${(props) => props.name}";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 75%);
    opacity: 0;
    transition: all 0.2s ease-in;

    background-color: rgba(50, 50, 50, 0.4);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border-radius: 15px;

    width: max-content;
    padding: 10px 25px;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    color: #fff;
  }

  &:hover {
    transform: scale(90%);

    &::after {
      transform: translate(-50%, 50%);
      opacity: 1;
    }
  }

  > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background-color: hsla(0, 0%, 6%, 0.4);
    border-radius: 20px;
    width: 60%;
    height: 60%;

    img {
      width: 60%;
      height: 60%;
      object-fit: contain;
    }
  }

  > a {
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(40px);
    background: ${(props) => props.background};
    opacity: 0.25;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  @media screen and (max-width: 300px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProjectsStyle = styled.section`
  scroll-snap-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 75%;
    width: 400px;
  }

  @media screen and (max-width: 900px) {
    position: relative;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    justify-content: start;
    padding-top: 50px;
    box-sizing: border-box;
    > div {
      scroll-snap-align: center;
      min-width: 100vw;
      height: 100vh;
      justify-content: center;
    }
  }
`;

export const ProjectStyle = styled.div`
  position: relative;
  perspective: 2000px;
  perspective-origin: top;

  width: 100%;
  height: 35%;

  &:hover > div {
    transform: rotateY(180deg);
  }

  /* Card */

  > div {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-radius: 40px;
    box-shadow:
      rgba(255, 255, 255, 0.12) 0px -12px 30px,
      rgba(255, 255, 255, 0.12) 0px 4px 6px,
      rgba(255, 255, 255, 0.17) 0px 12px 13px,
      rgba(255, 255, 255, 0.09) 0px -3px 5px;

    > div {
      position: absolute;
      top: 0;
      left: 0;

      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;

      width: 100%;
      height: 100%;
      border-radius: 40px;

      > img {
        width: 100%;
        height: 100%;
        border-radius: 40px;
        object-fit: cover;
      }
    }

    /* Back */

    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: #912f56;
      font-family: "Poppins", sans-serif;
      transform: rotateY(180deg);

      h5 {
        color: #361f27;
        font-size: 24px;
      }

      > div {
        display: flex;
        width: 100%;
        justify-content: space-evenly;

        > a {
          padding: 12px 24px;
          border-radius: 15px;
          border: 2px solid #361f27;
          font-size: 16px;
          text-decoration: none;

          @media screen and (max-width: 900px) {
            font-size: 14px;
          }
        }

        > a:nth-of-type(1) {
          color: #361f27;
          font-weight: 500;
        }

        > a:nth-of-type(2) {
          background-color: #361f27;
          color: #912f56;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    height: 200px;
    justify-content: center;
    margin-bottom: 48px;
    > div {
      width: 75%;
      text-align: center;
    }
  }
`;

export const NavIntoProjectStyle = styled.span<{ $firstPage: boolean }>`
  display: flex;
  position: fixed;
  top: 28px;
  right: 50px;
  height: 50px;
  width: 124px;

  > div {
    height: 100%;
    width: 50px;
    transition: opacity 0.2s ease-out;

    > svg {
      height: 100%;
      width: 100%;
      fill: #f1f1f1;
    }
  }

  > div:nth-of-type(1) {
    opacity: ${(props) => (props.$firstPage ? "0.4" : "1")};
    margin-right: 24px;
  }

  > div:nth-of-type(2) {
    opacity: ${(props) => (props.$firstPage ? "1" : "0.4")};
  }
`;

export const ContactStyle = styled.section`
  scroll-snap-align: center;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: #fff;

  // Right part
  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: min(500px, fit-content);

    > p {
      font-family: "Bebas Neue", sans-serif;
      font-size: 96px;
    }

    > p:nth-of-type(2) {
      position: relative;
      margin-top: 12px;
      margin-bottom: 48px;
      background: linear-gradient(
        90deg,
        hsla(329, 91%, 65%, 1) 0%,
        hsla(350, 91%, 65%, 1) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      > span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(40px);
        opacity: 0.15;
        background: linear-gradient(
          90deg,
          hsla(329, 91%, 65%, 1) 0%,
          hsla(350, 91%, 65%, 1) 100%
        );
      }
    }

    // Social link
    > div {
      display: flex;
      justify-content: start;
      width: 100%;
      height: 50px;

      > div {
        height: max-content;
        width: 60px;
        margin-right: 48px;
        opacity: 1;

        &:hover {
          padding-bottom: 12px;
        }

        &:hover > a {
          transform: translateY(-12px);

          > svg > path {
            transition-delay: 0.1s;
            fill: #0f0f0f;
          }

          > div {
            opacity: 1;
          }
        }

        > a {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          border-radius: 20px;
          width: 60px;
          height: 60px;
          transition: 0.3s ease-in;

          // Background
          > div {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: 0.3s ease-in;
            background: linear-gradient(
              90deg,
              hsla(329, 91%, 65%, 1) 0%,
              hsla(350, 91%, 65%, 1) 100%
            );
            border-radius: 20px;
            z-index: -1;
          }

          > svg {
            height: 38px;
            width: 38px;

            > path {
              fill: #fff;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding-top: 24px;

    > div {
      width: 80%;

      > p {
        display: none;
      }

      > div {
        justify-content: space-around;

        > div {
          margin-right: 0;
          width: fit-content;

          > a {
            width: 40px;
            height: 40px;

            > svg {
              width: 24px;
              height: 24px;

              > path {
                transition-delay: 0.1s;
                fill: #0f0f0f;
              }
            }

            > div {
              border-radius: 12px;
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;

export const EmailStyle = styled.form`
  width: min(80%, 500px);
  font-size: 14px;

  /* Name & Email */

  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      width: 48%;
      opacity: 0.7;
      transition: opacity 0.15s ease-in-out;

      &:hover {
        opacity: 1;
      }

      > label {
        padding-left: 25px;
        margin-bottom: 12px;
      }

      > input {
        box-sizing: border-box;
        width: 100%;
        padding: 15px 25px;
        border-radius: 15px;
        background-color: #1e1e1e;
        border: none;
        caret-color: #fff;
        color: #fff;

        &:focus {
          outline: none;
        }
      }
    }
  }

  /* Message */

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    box-sizing: border-box;
    transition: opacity 0.15s ease-in-out;
    opacity: 0.7;
    width: 100%;
    height: 200px;

    &:hover {
      opacity: 1;
    }

    > label {
      padding-left: 25px;
      margin-bottom: 12px;
    }

    > textarea {
      box-sizing: border-box;
      width: 100%;
      padding: 15px 25px;
      border-radius: 15px;
      background-color: #1e1e1e;
      border: none;
      caret-color: #fff;
      color: #fff;
      height: 100%;
      text-align: start;
      resize: none;

      &:focus {
        outline: none;
      }
    }
  }

  /* Submit */

  > div:nth-of-type(3) {
    position: relative;
    margin-top: 48px;
    width: 100%;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        hsla(329, 91%, 65%, 1) 0%,
        hsla(350, 91%, 65%, 1) 100%
      );
      opacity: 0.1;
      filter: blur(40px);
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      width: 100%;
      font-size: 38px;
      padding: 12px 0;
      background-color: #1e1e1e;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      z-index: 10;
      overflow: hidden;

      &:hover > div {
        opacity: 1;
      }

      &:hover > p {
        -webkit-text-fill-color: #0f0f0f;
      }

      > div {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          hsla(329, 91%, 65%, 1) 0%,
          hsla(350, 91%, 65%, 1) 100%
        );
        opacity: 0;
        transition: 0.15s ease-in;
      }

      p {
        height: 38px;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 6px;
        background: linear-gradient(
          90deg,
          hsla(329, 91%, 65%, 1) 0%,
          hsla(350, 91%, 65%, 1) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        z-index: 10;
        transition: 0.15s ease-out;
      }
    }
  }
`;

export const MessageValid = styled.span<{ $isValid?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  opacity: 0.7;
  width: 100%;
  padding: 15px 25px;
  border-radius: 15px;
  background-color: ${(props) => (props.$isValid ? "#28a745" : "#dc3545")};
  margin-bottom: 24px;
`;

export const EncryptStyle = styled.section`
  scroll-snap-align: center;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 48px;

    // Input
    > div:nth-of-type(1) {
      position: relative;
      width: 90%;

      > input {
        box-sizing: border-box;
        width: 100%;
        outline: none;
        padding: 15px 48px 15px 25px;
        background-color: #f0f0f0;
        border-radius: 20px;
        border: none;
        font-size: 18px;
      }

      > button {
        position: absolute;
        height: 32px;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;

        > svg {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    opacity: 0.9;
    margin-bottom: 72px;

    > p {
      text-align: center;
      color: white;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 1000px) {
    padding-top: 50px;
    box-sizing: border-box;

    > div:nth-of-type(1) {
      margin-bottom: 24px;
    }

    > form {
      flex-direction: column;
      margin-bottom: 24px;
    }
  }
`;

const encryptToDecrypt = keyframes`
  50% {
    width: 53px;
    left: 3px;
  }
  50%, 51% {
    width: 53px;
    right: 3px
  }
  100% {
    left: 28px;
    width: 28px;
  }
`;

const decryptToEncrypt = keyframes`
  0% {
    left: 28px;
    width: 28px;
  }
  50% {
    width: 53px;
    left: 3px;
  }
  100% {
    left: 3px;
    width: 28px;
  }
`;

export const ButtonEncrypt = styled.div<{
  $encrypt: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 36px;
  border-radius: 20px;
  margin-left: 24px;
  background: linear-gradient(
    90deg,
    hsla(329, 91%, 65%, 1) 0%,
    hsla(350, 91%, 65%, 1) 100%
  );

  > svg {
    width: 20px;
    height: 20px;
  }

  > div {
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    border-radius: 14px;
    height: 28px;
    width: 28px;
    background-color: white;

    animation: ${(props) =>
        props.$encrypt ? encryptToDecrypt : decryptToEncrypt}
      0.5s ease-in-out forwards;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 24px;
  }
`;

export const MessageResultStyle = styled.div`
  position: relative;
  width: 80%;
  height: 200px;
  background: linear-gradient(
    90deg,
    hsla(329, 91%, 65%, 1) 0%,
    hsla(350, 91%, 65%, 1) 100%
  );
  color: white;
  border-radius: 20px;
  box-sizing: border-box;

  > h3 {
    padding: 10px 25px;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px 20px 0 0;
  }

  > p {
    padding: 10px 25px;
    word-wrap: break-word;
    overflow-y: scroll;
    max-height: 75px;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: -1;
    background: linear-gradient(
      90deg,
      hsla(329, 91%, 65%, 1) 0%,
      hsla(350, 91%, 65%, 1) 100%
    );
    opacity: 0.4;
    filter: blur(30px);
  }

  @media screen and (max-width: 1000px) {
    height: 300px;
  }
`;
