import React, { useRef } from "react";

// Framer motion
import { useCycle } from "framer-motion";

//components

import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";

//Styled Components

import { MotionNav, MotionDiv, Container } from "./MobileMenu.styled";

// -----------------------------------------------------------

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 240px 60px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 240px 60px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <Container>
      <MotionNav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={100}
        ref={containerRef}
      >
        <MotionDiv variants={sidebar} />
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </MotionNav>
    </Container>
  );
};
export default MobileMenu;
