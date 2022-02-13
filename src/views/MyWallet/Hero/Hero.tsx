import React from "react";
import Image from "next/image";

// styled component
import {
  Layout,
  Banner,
  Profile,
  PrincipalId,
  EditProfile,
  ShareProfile,
  UploadImage,
  Imagelayout,
} from "./Hero.styled";

// components
import Text from "components/Text";
import { Col, Row } from "components/Layout";

// context
import { useWallet } from "context/WalletContext";

//assets

import TempImage from "assets/png/temp.png";
import ICImage from "assets/png/IC.png";
import { AiOutlineArrowUp, AiOutlineEllipsis } from "react-icons/ai";

// -----------------------------------------------------------

const Hero: React.FC = () => {
  const { principleId, setPrincipleId } = useWallet();
  return (
    <Layout>
      <Banner></Banner>
      <Profile>
        <Image src={TempImage} alt="No Image" layout="fill" />
      </Profile>
      <PrincipalId>
        <Imagelayout>
          <Image src={ICImage.src} layout="fill" alt="No Image"></Image>
        </Imagelayout>
        {principleId != ""
          ? principleId.substr(0, 15) + "..."
          : "Wallet Connect"}
      </PrincipalId>
      <Row
        padding="40px 0px 0px 0px"
        justifyContent="space-between"
        mWidth={400}
        responsive={{
          1024: { mWidth: 320, padding: "30px 0px 0px 0px" },
          768: { mWidth: 270, padding: "20px 0px 0px 0px" },
        }}
      >
        <EditProfile>Edit profile</EditProfile>
        <Row mWidth={120} gap={15}>
          <ShareProfile>
            <AiOutlineArrowUp size={25}></AiOutlineArrowUp>
          </ShareProfile>
          <UploadImage>
            <AiOutlineEllipsis size={25}></AiOutlineEllipsis>
          </UploadImage>
        </Row>
      </Row>
    </Layout>
  );
};

export default Hero;
