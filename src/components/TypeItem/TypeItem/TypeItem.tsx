import React, { useEffect, useState } from "react";
import Image from "next/image";
//Styled Component
import { Layout, ImageLayout } from "./TypeItem.styled";

//component
import Text from "components/Text";
import { Col, Row } from "components/Layout";

//Types

import { TypeItemProps } from "types/components/TypeItem";

//-------------------------------------------------------------

const TypeItem: React.FC<{ data: TypeItemProps }> = ({ data }) => {
  return (
    <Layout>
      <Row
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        mWidth={280}
        responsive={{ 1024: { mWidth: 200 } }}
      >
        <ImageLayout>
          <Image src={data.image} alt="No Image" layout="fill"></Image>
        </ImageLayout>
        <Text
          padding="30px 0px 0px 0px"
          tAlign="center"
          fWeight={600}
          fSize={30}
          responsive={{ 1024: { fSize: 20 } }}
        >
          {data.title}
        </Text>
        <Text
          padding="30px 0px 0px 0px"
          tAlign="center"
          fWeight={400}
          fSize={15}
          responsive={{ 1024: { fSize: 12 } }}
        >
          {data.detail}
        </Text>
      </Row>
    </Layout>
  );
};

export default TypeItem;
