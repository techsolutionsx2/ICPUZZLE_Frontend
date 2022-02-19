// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div<{ flag: boolean }>`
  position: relative;
  width: 700px;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  ${({ flag }) =>
    flag &&
    `& > :last-child {
    margin-left: 30px;
  }`};
`;
export const IconLayout = styled.div<{ flag: boolean }>`
  height: 1.4rem;
  bottom: 0;
  cursor: pointer;
  transition: 0.2s;
  ${({ flag }) =>
    flag ? "transform: rotate(180deg);" : "transform: rotate(0deg)"};
`;
export const Excode = styled.div`
  padding: 5px 8px 5px 15px;
  border-radius: 10px;
  border: 1px solid white;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin-left: 20px;
  margin-right: 20px;
`;
export const ColorSelecter = styled.div<{ bgColor: string }>`
  width: 26px;
  height: 26px;
  min-height: 26px;
  min-width: 26px;

  margin: 0px 3px;

  cursor: pointer;

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
  ::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
    background-color: ${({ bgColor }) => (bgColor == "" ? "white" : bgColor)};
  }
`;
