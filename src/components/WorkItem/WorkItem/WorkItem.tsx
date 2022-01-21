import React from "react";
import Image from "next/image";

// styled component
import {
  Layout,
  LoginLayout,
  ImageContainer,
  LoginButton,
} from "./WorkItem.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

//tempdata

import { WorkItemData } from "utils/tempData/WorkItem";

import ICImage from "assets/png/IC.png";

// -----------------------------------------------------------
import { WorkItemProps } from "types/components/Work";

const WorkItem: React.FC<WorkItemProps> = ({ image, detail, login }) => {
  if (login) {
    return (
      <LoginLayout>
        <ImageContainer>
          <Image width={50} height={30} src={ICImage.src}></Image>
        </ImageContainer>
        <Text
          padding="28px 0px 0px 0px "
          fWeight={600}
          fSize={24}
          fColor="white"
        >
          LOGIN using Stoic Wallet
        </Text>
        <Row justifyContent="flex-end">
          <LoginButton>Log in</LoginButton>
        </Row>
      </LoginLayout>
    );
  }
  return (
    <Layout>
      <ImageContainer>
        <Image width={20} height={30} src={image.src}></Image>
      </ImageContainer>
      <Text padding="28px 0px 0px 0px " fWeight={600} fSize={14}>
        {detail}
      </Text>
    </Layout>
  );
};

export default WorkItem;
