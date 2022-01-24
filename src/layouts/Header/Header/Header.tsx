import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

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

import Logo from "assets/png/logo.png";

// hook

import { useRouterCustom } from "hooks";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

import { MobileMenu } from "components/Menu";

// Bookmark Data

import { PageBookmarkData } from "utils/Data/Bookmark";

// -----------------------------------------------------------

const Header: React.FC = () => {
  const { asPath, pathname } = useRouter();
  const [bookmarks, setBookmarks] = useState([""]);

  useEffect(() => {
    PageBookmarkData.forEach((bookmarkItem) => {
      if (bookmarkItem.path === pathname) {
        setBookmarks(bookmarkItem.bookmarkList);
      }
    });
  }, [pathname]);

  const setBookmark = (e: any) => {
    location.href = "#" + e.target.value;
  };

  const { move } = useRouterCustom();
  return (
    <Layout>
      <Row alignItems="center" gap={8}>
        <ImageContainer
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            move("/");
          }}
        >
          <Image src={Logo} alt="No Image" />
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
        <div>
          <Select onChange={setBookmark}>
            {bookmarks.map((item, key) => {
              return (
                <Option key={key} value={item.replace(/\s/g, "")}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </div>
        <CreateButton>Create</CreateButton>
        <ButtonContainer>
          <Button>swky-geexh-lbavl-tj-</Button>
          <Backdiv />
        </ButtonContainer>
      </Row>
      <MobileMenu></MobileMenu>
    </Layout>
  );
};

export default Header;
