import React from "react";

// styled component
import { Layout, NFTList, Button } from "./Hottest.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";
import { MarketItem } from "components/NFTItem";

//tempdata

import { NFTItemData } from "utils/tempData/NFTItem";

// -----------------------------------------------------------

const Hottest: React.FC = () => {
  return (
    <Layout>
      <Row
        justifyContent="space-between"
        alignItems="flex-end"
        padding="0px 200px"
      >
        <Text fWeight={800} fSize={50}>
          Hottest NFTs
        </Text>
        <Button>Explore</Button>
      </Row>
      <NFTList>
        {NFTItemData.map((item, index) => {
          return <MarketItem key={index} data={item}></MarketItem>;
        })}
      </NFTList>
    </Layout>
  );
};

export default Hottest;
