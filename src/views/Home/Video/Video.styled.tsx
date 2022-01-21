// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: 230px 0px 0px 0px;
  & > *:not(:last-child) {
    margin-right: 130px;
  }
`;
export const PlayerContainer = styled.div`
  background: rgba(14, 10, 29, 0.1);
  width: 550px;
  height: 380px;
  border-radius: 20px;
`;
