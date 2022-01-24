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
      <Row
        justifyContent="flex-end"
        mWidth={300}
        responsive={{
          1200: { mWidth: 250 },
          900: { justifyContent: "center", mWidth: 900 },
        }}
      >
        <Col
          padding="10px 30px 0px 0px"
          mWidth={230}
          responsive={{ 900: { padding: "0px", mWidth: 900 } }}
        >
          <Text
            fWeight={800}
            fSize={50}
            lHeight={56}
            tAlign="center"
            responsive={{ 1024: { fSize: 40 }, 900: { fSize: 50 } }}
          >
            ICPuzzle
          </Text>
          <Text
            padding="9px 0px 0px 18px"
            fWeight={600}
            fSize={20}
            lHeight={28}
            tAlign="left"
            responsive={{
              1024: { fSize: 20 },
              900: { padding: "0px", tAlign: "center" },
            }}
          >
            Create, Solve, Play, Buy, Sell, Trade.
          </Text>
          <Row
            justifyContent="flex-end"
            padding="50px 18px 0px 0px"
            responsive={{ 900: { display: "none" } }}
          >
            <GoApp>Go to App</GoApp>
          </Row>
        </Col>
      </Row>
      <ImageContainer>
        <Image
          src={tempImage.src}
          alt="No Image"
          width={100}
          height={100}
          layout="fill"
        />
      </ImageContainer>
      <Row
        mWidth={300}
        padding="0px 0px 0px 40px"
        alignItems="center"
        justifyContent="flex-start"
        responsive={{ 1200: { mWidth: 230 } }}
      >
        <Col>
          <Text
            fWeight={600}
            fSize={25}
            lHeight={30}
            responsive={{ 1200: { fSize: 20 } }}
          >
            Built & hosted on
          </Text>
          <Text
            fWeight={800}
            fSize={25}
            lHeight={30}
            responsive={{ 1024: { fSize: 20 } }}
          >
            The Internet
          </Text>
          <Row gap={10}>
            <Text
              mode="span"
              fWeight={800}
              fSize={25}
              lHeight={30}
              responsive={{ 1024: { fSize: 20 } }}
            >
              Computer
            </Text>
            <Image src={IC.src} width={64} height={32} alt="No Image"></Image>
          </Row>
        </Col>
      </Row>
      <Row display="none" responsive={{ 900: { display: "block" } }}>
        <GoApp>Go to App</GoApp>
      </Row>
    </Layout>
  );
};

export default Hero;
