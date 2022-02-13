// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div<{ flag?: boolean }>`
  width: 270px;
  height: 270px;
  padding: 25px;

  @media screen and (max-width: 700px) {
    width: 300px;
    height: 200px;
  }

  ${({ flag }) =>
    flag
      ? `position: relative;
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
    top: -5px;
    left: -5px;
    z-index: -1;
    filter: blur(3px);
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    opacity: 1;
    border-radius: 20px;
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
    background-color: white;
  }`
      : `border-radius: 20px;
  background: white;`}
`;
export const LoginLayout = styled.div`
  width: 270px;
  height: 270px;
  padding: 25px;

  @media screen and (max-width: 700px) {
    width: 300px;
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
    top: -5px;
    left: -5px;
    z-index: -1;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    opacity: 1;
    border-radius: 20px;
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
    background-color: black;
  }
`;
export const ImageContainer = styled.div<{ flag?: boolean }>`
  width: 90px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ flag }) =>
    flag
      ? `border-radius: 50%;background-color: black;`
      : `position: relative;
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
    top: -5px;
    left: -5px;
    z-index: -1;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    opacity: 1;
    border-radius: 50%;
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
    background-color: black;
  }`}
`;
