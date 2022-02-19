// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  position: relative;
  width: 1024px;
  max-width: 1024px;
  min-width: 1024px;
  height: 650px;
  max-height: 650px;
  min-height: 650px;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  border-radius: 20px;
`;
export const Canvas = styled.div``;

export const DrawerContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  z-index: 2;
`;
export const TitleContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 50px;
  z-index: 2;
`;
export const SidebarContainer = styled.div`
  position: absolute;
  width: 25%;
  height: 100%;
  right: 0;
  top: 0;
`;
export const ColorPickerContainer = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 15px;
  left: 0;
`;
export const MintButtonContainer = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 70px;
  left: 40px;
`;

export const MintButton = styled.div`
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

  width: 55px;
  height: 55px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  position: relative;
  z-index: 1;

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
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
    border-radius: 50%;
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
    border-radius: 50%;
    background-color: #202124;
  }
`;
