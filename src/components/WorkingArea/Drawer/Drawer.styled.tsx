// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  position: relative;
  height: 100%;
  border: 0.6rem;
  width: 40px;
  min-height: 140px;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Iconlayout = styled.div<{ flag?: boolean }>`
  background: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  cursor: pointer;
  top: -50px;
  left: 20px;
  transition: 0.2s;
  ${({ flag }) =>
    flag
      ? `
  transform: translateX(-50%) rotate(180deg);
`
      : `
        transform: rotate(0deg) translateX(-50%);
`};
`;
export const MenuIconlayout = styled.div`
  background: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;
