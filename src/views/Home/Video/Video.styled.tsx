// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: 230px 0px 0px 0px;

  @media screen and (max-width: 1024px) {
    padding: 180px 0px 0px 0px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    padding: 150px 0px 0px 0px;
  }

  @media screen and (max-width: 425px) {
    padding: 120px 0px 0px 0px;
  }
`;
export const PlayerContainer = styled.div`
  background: rgba(14, 10, 29, 0.4);
  width: 550px;
  height: 380px;
  border-radius: 20px;
  @media screen and (max-width: 1200px) {
    width: 500px;
    height: 350px;
  }
  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 280px;
  }
  @media screen and (max-width: 900px) {
    width: 80vw;
    height: calc(80vw * 0.7);
    margin-top: 50px;
  }
  @media screen and (max-width: 425px) {
    width: 90vw;
    height: calc(90vw * 0.7);
    margin-top: 50px;
  }
`;
