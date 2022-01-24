// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  .gridMerge {
    grid-column: span 2;
  }
  padding-top: 150px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  justify-content: center;
`;
