// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  width: 100%;

  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 170px 0px 178px;

  position: relative;
`;
export const EmailInputContainer = styled.div`
  display: flex;
  width: 250px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(6, 0, 41, 0.2);
`;
export const EmailInput = styled.input`
  width: 200px;
  background: rgba(0, 0, 0, 0);
  border: none;
  margin-left: 5px;
  font-size: 16px;
  outline: none;
`;

export const SignUpButton = styled.div`
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

  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 9px;
  color: #ffffff;

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
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
    border-radius: 15px;
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
    border-radius: 15px;
    background-color: #202124;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  min-width: 120px;
  min-height: 150px;
`;

export const Contact = styled.div`
  position: absolute;
  bottom: 0px;
  left: 170px;
`;
