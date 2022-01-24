import React from "react";

// styled component
import { Layout, ItemList, CreateButton } from "./Create.styled";

// component

import Text from "components/Text";
import { Row, Col } from "components/Layout";
import { NFTItem } from "components/NFTItem";

// -----------------------------------------------------------

const Create: React.FC = () => {
  return (
    <Layout id="CreateownNFT">
      <Row justifyContent="flex-end" padding="70px 0px 0px 0px">
        <Row mWidth={550}>
          <Col>
            <Text fSize={38} fWeight={800}>
              Create Your Own NFTs, Solve Community Puzzles, Build, Solve,
              Trade.
            </Text>
            <Text fSize={23} fWeight={600} padding="18px 0px 0px 0px">
              An unique artistic NFT marketplace build with tools that provide
              users ability to digitally paint, customise, create NFTs using
              NFTs.
            </Text>
            <CreateButton>Create NFT</CreateButton>
          </Col>
        </Row>
      </Row>
      <Row justifyContent="flex-start">
        <ItemList>
          <NFTItem back="black" subBack="white" />
          <NFTItem back="white" subBack="black" />
          <NFTItem back="white" subBack="black" />
          <NFTItem back="black" subBack="white" />
        </ItemList>
      </Row>
    </Layout>
  );
};

export default Create;
