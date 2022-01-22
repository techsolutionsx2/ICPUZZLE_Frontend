// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  margin-top: 120px;
`;

export const NFTList = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-gap: 30px;
  justify-content: center;
`;
export const Button = styled.div`
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  animation-duration: 2s;

  width: 150px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
    border-radius: 25px;
  }
  :hover::before {
    filter: blur(3px);
    animation: "glowing" 6s linear forwards 1;
    animation-iteration-count: infinite;
    transition: opacity 0.85s ease-in-out;
  }
  ::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 25px;
    background-color: #202124;
  }
`;
