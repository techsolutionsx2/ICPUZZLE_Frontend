// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0px 0px 0px;
`;

export const CollectionItems = styled.div`
  width: 100%;
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-gap: 50px;
  justify-content: center;
`;
