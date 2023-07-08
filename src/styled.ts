import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  scroll-snap-type: y mandatory;
  width: 100vw;
  height: 100vh;
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
    background: rgb(145, 47, 86);
    background: linear-gradient(
      180deg,
      rgba(145, 47, 86, 0.4220281862745098) 0%,
      rgba(54, 31, 39, 1) 100%
    );

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
		background-position: 0%;
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
  animation: ${presentationInfinite} 3s infinite;

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
