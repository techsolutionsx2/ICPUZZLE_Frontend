import React from "react";
import Image from "next/image";

// styled component
import {
  Layout,
  EmailInputContainer,
  EmailInput,
  SignUpButton,
  ImageContainer,
  Contact,
} from "./Footer.styled";

// assets

import Logo from "assets/svg/logo.svg";

// component

import Text from "components/Text";
import { Col, Row } from "components/Layout";
import { MdOutlineEmail } from "react-icons/md";
import { BsDiscord, BsTwitter } from "react-icons/bs";

// -----------------------------------------------------------

const Footer: React.FC = () => {
  return (
    <Layout>
      <Row alignItems="center" gap={8}>
        <ImageContainer>
          <Image src={Logo} width={120} height={150} />
        </ImageContainer>
        <Text
          fSize={27}
          lHeight={30}
          fWeight={800}
          tFont="Montserrat"
          fStyle="normal"
          fColor="#000000"
        >
          ICPuzzle
        </Text>
      </Row>
      <Text
        fSize={16}
        lHeight={18}
        fWeight={800}
        tFont="Montserrat"
        fStyle="normal"
        fColor="#000000"
        padding="11px 0px 17px 15px"
      >
        he latestICPuzzle updates.
      </Text>
      <Row padding="0px 0px 24px 0px" gap={16}>
        <EmailInputContainer>
          <MdOutlineEmail color="#666666" width={20} height={20} />
          <EmailInput placeholder="Email address" />
        </EmailInputContainer>
        <SignUpButton>Sign Up</SignUpButton>
      </Row>
      <Row padding="0px 0px 68px 5px" gap={20}>
        <BsDiscord size={40} />
        <BsTwitter size={40} />
      </Row>
      <Contact>
        <Col>
          <Text
            fSize={16}
            lHeight={18}
            fWeight={600}
            tFont="Montserrat"
            fStyle="normal"
            fColor="#000000"
            padding="0px 0px 7px 0px"
          >
            Contact Us
          </Text>
          <Text
            fSize={16}
            lHeight={18}
            fWeight={600}
            fColor="#000000"
            padding="0px 0px 10px 0px"
          >
            Terms of Services
          </Text>
        </Col>
      </Contact>
      <Row alignItems="flex-end" justifyContent="center">
        <Text
          fSize={16}
          lHeight={18}
          fWeight={600}
          fColor="#000000"
          padding="0px 0px 12px 0px"
        >
          2022. All Rights reserved.
        </Text>
      </Row>
    </Layout>
  );
};

export default Footer;
