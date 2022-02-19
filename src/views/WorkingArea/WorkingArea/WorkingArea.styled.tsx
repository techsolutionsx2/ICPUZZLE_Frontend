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
