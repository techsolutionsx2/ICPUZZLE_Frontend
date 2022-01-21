import React from "react";
import Image from "next/image";

// styled component
import {
  Layout,
  LayoutComing,
  MainImageContainer,
  SubImageContainer,
} from "./CollectionItem.styled";

// component

import Text from "components/Text";
import { Col, Row } from "components/Layout";

//type

import { CollectionItemProps } from "types/components/Collection";

// -----------------------------------------------------------

const CollectionItem: React.FC<{ data: CollectionItemProps }> = ({ data }) => {
  if (data.coming) {
    return (
      <LayoutComing>
        <Col>
          <Text
            fWeight={600}
            fSize={18}
            lHeight={24}
            tAlign="center"
            fColor="white"
          >
            PuzzleVerse
          </Text>
          <Text
            fWeight={800}
            fSize={24}
            lHeight={28}
            padding="36px 0px 0px 0px"
            fColor="white"
          >
            COMING SOON!!!
          </Text>
        </Col>
      </LayoutComing>
    );
  }
  return (
    <Layout>
      <MainImageContainer>
        <Image
          className="CollectionMain"
          src={data.mImage.src}
          width={260}
          height={270}
        ></Image>
        <style jsx global>{`
          .CollectionMain {
            border-radius: 20px;
          }
        `}</style>
      </MainImageContainer>
      <SubImageContainer>
        <Image
          className="CollectionSub"
          src={data.sImage.src}
          width={100}
          height={100}
        ></Image>
        <style jsx global>{`
          .CollectionSub {
            border-radius: 50px;
          }
        `}</style>
      </SubImageContainer>
      <Text
        padding="12px 0px 0px 0px"
        fWeight={800}
        fSize={20}
        lHeight={22}
        tAlign="center"
      >
        {data.title}
      </Text>
      <Text
        padding="14px 0px 0px 0px"
        tAlign="center"
        fWeight={600}
        fSize={14}
        lHeight={22}
      >
        {data.subTitle}
      </Text>
      <Text tAlign="center" fWeight={600} fSize={14} lHeight={22}>
        {data.detail}
      </Text>
    </Layout>
  );
};

export default CollectionItem;
