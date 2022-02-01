import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Styled component
import { Layout, ImageContainer, CreateButton } from "./Header.styled";

// Assets

import Logo from "assets/png/logo.png";

// Components

import Text from "components/Text";
import { Row } from "components/Layout";
import { MobileMenu } from "components/Menu";
import { Select } from "components/Select";
import { WalletConnect } from "components/Button";

// Bookmark Data

import { PageBookmarkData } from "utils/Data/Bookmark";

// -----------------------------------------------------------

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <Row alignItems="center" gap={8}>
        <ImageContainer
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src={Logo.src} alt="No Image" layout="fill" />
        </ImageContainer>
        <Text
          fSize={30}
          lHeight={30}
          fWeight={800}
          fColor="#000000"
          responsive={{ 1024: { fSize: 20, fWeight: 700 } }}
        >
          ICPuzzle
        </Text>
      </Row>
      <Row
        justifyContent="flex-end"
        alignItems="center"
        gap={10}
        responsive={{ 1024: { display: "none" } }}
      >
        <Select data={PageBookmarkData}></Select>
        <CreateButton>Create</CreateButton>
        <WalletConnect type={1}></WalletConnect>
      </Row>
      <MobileMenu></MobileMenu>
    </Layout>
  );
};

export default Header;
