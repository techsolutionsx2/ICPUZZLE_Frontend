import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//Components
import { MenuItem } from "./MenuItem";

//Styled Component

import { MotionUl, UlContainer } from "./MobileMenu.styled";

// Bookmark Data

import { PageBookmarkData } from "utils/Data/Bookmark";
// -----------------------------------------------------------

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }: any) => {
  const { asPath, pathname } = useRouter();
  const [bookmarks, setBookmarks] = useState([""]);

  useEffect(() => {
    PageBookmarkData.forEach((bookmarkItem) => {
      if (bookmarkItem.path === pathname) {
        setBookmarks(bookmarkItem.bookmarkList);
      }
    });
  }, [pathname]);

  const setBookmark = (value: string) => {
    location.href = "#" + value;
  };
  return (
    <UlContainer>
      <MotionUl variants={variants}>
        {bookmarks.map((item, index) => (
          <MenuItem
            item={item}
            toggle={toggle}
            key={index}
            index={index}
            setBookmark={setBookmark}
          />
        ))}
      </MotionUl>
    </UlContainer>
  );
};
