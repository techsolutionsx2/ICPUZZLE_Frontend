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

export const MenuItem = ({ item, toggle, index, setBookmark, pre }: any) => {
  const clickItem = () => {
    toggle();
    setBookmark(pre + item.replace(/\s/g, ""));
  };
  return (
    <MotionLl
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={clickItem}
    >
      {item}
    </MotionLl>
  );
};
