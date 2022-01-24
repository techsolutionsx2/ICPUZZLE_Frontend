// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  margin-top: 100px;

  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 57px;
  }
`;
export const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  img {
    border-radius: 50%;
  }
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
    top: -7px;
    left: -7px;
    background-size: 400%;
    z-index: -1;
    filter: blur(3px);
    width: calc(100% + 14px);
    height: calc(100% + 14px);
    opacity: 1;
    border-radius: 50%;
  }
`;
export const GoApp = styled.div`
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

  width: 140px;
  height: 50px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
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
    top: -3px;
    left: -3px;
    z-index: -1;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    opacity: 1;
    border-radius: 20px;
  }
  :hover::before {
    filter: blur(3px);
    background-size: 400%;
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
    border-radius: 20px;
    background-color: #202124;
  }
`;
