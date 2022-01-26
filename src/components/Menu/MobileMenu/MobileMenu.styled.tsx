// styled system
import styled from "styled-components";

//Framer motion
import { motion } from "framer-motion";
// -------------------------------------------------------

export const Container = styled.div`
  height: 400px;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const UlContainer = styled(motion.div)`
  position: absolute;
  top: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
`;

export const MotionUl = styled(motion.div)`
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const MotionLl = styled(motion.div)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  width: 200px;
  height: 30px;
  padding: 15px;
  font-weight: 800;
  font-size: 18px;
`;

export const MotionNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  justify-content: center;
`;

export const MotionDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 38px;
  right: 35px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;
