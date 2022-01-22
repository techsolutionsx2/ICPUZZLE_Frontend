import React from "react";

// styled component
import { Layout, ImageContainer } from "./Hero.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

// -----------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout>
      <ImageContainer></ImageContainer>
    </Layout>
  );
};

export default Hero;
