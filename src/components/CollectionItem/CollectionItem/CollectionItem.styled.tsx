// styled system
import styled from "styled-components";

// -------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  height: 450px;
  background: white;
  border-radius: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  :hover {
    margin-top: -20px;
  }
`;
export const LayoutComing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 450px;
  border-radius: 20px;

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
    top: -4px;
    left: -4px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
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
    background-color: #202124;
  }

  transition: all 0.3s;
  :hover {
    margin-top: -20px;
  }
`;

export const MainImageContainer = styled.div`
  img {
    border-radius: 20px;
  }
  border-radius: 20px;
  width: 100%;
  height: 270px;
`;
export const SubImageContainer = styled.div`
  img {
    border-radius: 50px;
  }
  margin-top: -35px;
  width: 70px;
  height: 70px;

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
    filter: blur(3px);
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    opacity: 1;
    border-radius: 50%;
  }
`;
