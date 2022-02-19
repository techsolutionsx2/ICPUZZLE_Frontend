import React from "react";
import Image from "next/image";

// styled component
import { Layout, ImageContainer } from "./Hero.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

//assets

import BackImage from "assets/png/mHero.png";

// -----------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout>
      <ImageContainer>
        <Image src={BackImage} alt="No Image" width={200} height={200}></Image>
      </ImageContainer>
    </Layout>
  );
};

export default Hero;
