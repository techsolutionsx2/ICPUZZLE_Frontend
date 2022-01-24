import React from "react";

//Styled Component
import { MotionLl } from "./MobileMenu.styled";

// -----------------------------------------------------------

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item, toggle, index, setBookmark }: any) => {
  const style = {
    border: `2px solid ${colors[index]}`,
    color: `${colors[index]}`,
  };
  const clickItem = () => {
    toggle();
    setBookmark(item.replace(/\s/g, ""));
  };
  return (
    <MotionLl
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={clickItem}
      style={style}
    >
      {item}
    </MotionLl>
  );
};
