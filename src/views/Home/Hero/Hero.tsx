import Image from "next/image";
import React from "react";

// styled component
import { Layout, ImageContainer, GoApp } from "./Hero.styled";

// assets
import IC from "assets/png/IC.png";
import tempImage from "assets/png/temp.png";

// component

import Text from "components/Text";
import { Row, Col } from "components/Layout";

// -----------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout>
      <Row justifyContent="flex-end" mWidth={300}>
        <Col padding="5px 40px 0px 0px" mWidth={250}>
          <Text fWeight={800} fSize={52} lHeight={56}>
            ICPuzzle
          </Text>
          <Text
            padding="9px 0px 0px 18px"
            fWeight={600}
            fSize={21}
            lHeight={28}
            tAlign="left"
          >
            Create, Solve, Play. Buy, Sell, Trade.
          </Text>
          <Row justifyContent="flex-end" padding="50px 18px 0px 0px">
            <GoApp>Go to App</GoApp>
          </Row>
        </Col>
      </Row>
      <Row mWidth={500}>
        <ImageContainer>
          <Image
            src={tempImage.src}
            width={500}
            height={500}
            alt="No Image"
          ></Image>
        </ImageContainer>
      </Row>
      <Row
        mWidth={300}
        padding="0px 0px 0px 50px"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Col>
          <Text fWeight={600} fSize={26} lHeight={30}>
            Built & hosted on
          </Text>
          <Text fWeight={800} fSize={26} lHeight={30}>
            The Internet
          </Text>
          <Row gap={10}>
            <Text mode="span" fWeight={800} fSize={26} lHeight={30}>
              Computer
            </Text>
            <Image src={IC.src} width={64} height={32} alt="No Image"></Image>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Hero;
