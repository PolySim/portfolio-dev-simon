import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  scroll-snap-type: y mandatory;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
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
  }
`;

const presentationInfinite = keyframes`
	0%{
		transform: translateY(24px);
	}
	45%,50%{
		transform: translateY(-24px);
	}
	95%, 100%{
		transform: translateY(24px);
	}
`;

const nameGradient = keyframes`
	0%{
		background-position: 0;
	}
	100%{
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
  color: ${(props) => (props.selected ? "#de3c4b" : "#fff")};
  transition: color 0.15s ease-in;
  cursor: pointer;
  padding: 12px 12px;
  margin-right: ${(props) => (props.last === "true" ? "0" : "12px")};
  border-radius: 12px;
  z-index: 10;
`;

export const ArrowDown = styled.div`
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
  cursor: pointer;

  transition: all 0.3s ease-in;

  > svg {
    stroke: #f3eff5;
  }

  &:hover {
    background-color: #f3eff5;

    > svg {
      stroke: #000;
    }
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
    width: 500px;

    > p {
      font-family: "Bebas Neue", sans-serif;
      font-size: 96px;
    }

    > p:nth-of-type(2) {
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
    }

    // Social link
    > div {
      display: flex;
      justify-content: start;
      width: 100%;
      height: 50px;

      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 20px;
        width: 60px;
        height: 60px;
        margin-right: 48px;
        transition: 0.3s ease-in;

        &:hover {
          transform: translateY(-12px);

          > svg > path {
            transition-delay: 0.1s;
            fill: #0f0f0f;
          }
        }

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

        &:hover > div {
          opacity: 1;
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
`;

export const EmailStyle = styled.form`
  width: 500px;
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
    margin-top: 48px;
    width: 100%;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      width: 100%;
      font-size: 34px;
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
