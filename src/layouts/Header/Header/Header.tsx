import React from "react";
import Image from "next/image";

// styled component
import {
  Layout,
  ImageContainer,
  Select,
  Option,
  CreateButton,
  ButtonContainer,
  Button,
  Backdiv,
} from "./Header.styled";

// assets

import Logo from "assets/svg/logo.svg";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

// -----------------------------------------------------------

const Header: React.FC = () => {
  return (
    <Layout>
      <Row alignItems="center" gap={8}>
        <ImageContainer>
          <Image src={Logo} width={120} height={150} />
        </ImageContainer>
        <Row
          responsive={{
            1024: {
              display: "none",
            },
          }}
        >
          <Text fSize={27} lHeight={30} fWeight={800} fColor="#000000">
            ICPuzzle
          </Text>
        </Row>
      </Row>
      <Row justifyContent="flex-end" alignItems="center" gap={10}>
        <div>
          <Select>
            <Option>Puzzles</Option>
          </Select>
        </div>
        <CreateButton>Create</CreateButton>
        <ButtonContainer>
          <Button>swky-geexh-lbavl-tj-</Button>
          <Backdiv />
        </ButtonContainer>
      </Row>
    </Layout>
  );
};

export default Header;
