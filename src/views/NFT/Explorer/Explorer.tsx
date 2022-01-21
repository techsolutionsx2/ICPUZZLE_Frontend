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
  SearchNumberInput,
  SearchNFTInput,
} from "./Explorer.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";
import { MarketItem } from "components/NFTItem";

//assets
import { IoSearch } from "react-icons/io5";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

//tempdata

import { NFTItemData } from "utils/tempData/NFTItem";

// -----------------------------------------------------------

const Explorer: React.FC = () => {
  return (
    <Layout>
      <Text fWeight={800} fSize={50}>
        Explorer
      </Text>
      <Row justifyContent="center" gap={30} padding="80px 0px 0px 0px ">
        <SearchNumber>
          <IoSearch />
          <SearchNumberInput placeholder="Mint Number" />
        </SearchNumber>
        <SearchNFT>
          <IoSearch />
          <SearchNFTInput placeholder="search" />
        </SearchNFT>
        <HighToLow>
          <AiOutlineArrowUp />
          <Text padding="0px 0px 0px 10px">High to Low</Text>
        </HighToLow>
        <LowToHigh>
          <AiOutlineArrowDown />
          <Text padding="0px 0px 0px 10px">Low to High</Text>
        </LowToHigh>
      </Row>
      <NFTList>
        {NFTItemData.map((item, index) => {
          return <MarketItem key={index} data={item}></MarketItem>;
        })}
      </NFTList>
      <ViewMore>View more</ViewMore>
    </Layout>
  );
};

export default Explorer;
