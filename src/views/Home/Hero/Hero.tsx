import Image from "next/image";
import React from "react";

// styled component
import { Layout, ImageContainer, GoApp, ICImageLayout } from "./Hero.styled";

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
            responsive={{
              1024: { fSize: 40 },
              900: { fSize: 50 },
              768: { fSize: 40 },
              375: { fSize: 30 },
            }}
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
              900: { padding: "30px 0px 0px 0px", tAlign: "center" },
              768: { padding: "20px 0px 0px 0px", fSize: 16 },
              375: { fSize: 14 },
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
        responsive={{
          1200: { mWidth: 230 },
          900: { padding: "0px", justifyContent: "center", mWidth: 900 },
        }}
      >
        <Col>
          <Text
            fWeight={600}
            fSize={25}
            lHeight={30}
            responsive={{
              1200: { fSize: 20 },
              900: { fSize: 25, tAlign: "center" },
              768: { fSize: 16 },
              375: { fSize: 14 },
            }}
          >
            Built & hosted on
          </Text>
          <Text
            fWeight={800}
            fSize={25}
            lHeight={30}
            responsive={{
              1024: { fSize: 20 },
              900: {
                padding: "20px 0px 0px 0px",
                fSize: 50,
                lHeight: 54,
                tAlign: "center",
              },
              768: { fSize: 40 },
              375: { fSize: 30 },
            }}
          >
            The Internet
          </Text>
          <Row
            gap={10}
            responsive={{
              900: { flexDirection: "column", alignItems: "center" },
            }}
          >
            <Text
              mode="span"
              fWeight={800}
              fSize={25}
              lHeight={30}
              responsive={{
                1024: { fSize: 20 },
                900: {
                  padding: "8px 0px 0px 0px",
                  fSize: 50,
                  lHeight: 54,
                  tAlign: "center",
                },
                768: { fSize: 40, lHeight: 40 },
                375: { fSize: 30, lHeight: 30 },
              }}
            >
              Computer
            </Text>
            <ICImageLayout>
              <Image src={IC.src} alt="No Image" layout="fill"></Image>
            </ICImageLayout>
          </Row>
        </Col>
      </Row>
      <Row
        display="none"
        justifyContent="center"
        responsive={{ 900: { display: "flex", padding: "70px 0px 0px 0px" } }}
      >
        <GoApp>Go to App</GoApp>
      </Row>
    </Layout>
  );
};

export default Hero;
