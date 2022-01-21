import React from "react";

// styled component
import {
  Layout,
  SearchNumber,
  SearchNFT,
  HighToLow,
  LowToHigh,
  NFTList,
  ViewMore,
} from "./Explorer.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";
//tempdata

import { NFTItemData } from "utils/tempData/NFTItem";

// -----------------------------------------------------------

const Explorer: React.FC = () => {
  return (
    <Layout>
      <Text>Explorer</Text>
      <Row>
        <SearchNumber>
          
        </SearchNumber>
        <SearchNFT></SearchNFT>
        <HighToLow></HighToLow>
        <LowToHigh></LowToHigh>
      </Row>
      <NFTList></NFTList>
      <ViewMore></ViewMore>
    </Layout>
  );
};

export default Explorer;
