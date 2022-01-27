//Types
import { BookmarkType } from "types/utils/Bookmark";

//---------------------------------------------------------------
export const PageBookmarkData: BookmarkType[] = [
  {
    path: "/",
    bookmarkList: [
      "ICPuzzle",
      "Collection",
      "Create own NFT",
      "How it works",
      "Roadmap",
    ],
    pageList: ["Marketplace"],
  },
  {
    path: "/NFTs",
    bookmarkList: ["Explore", "Recently NFT "],
    pageList: [],
  },
  {
    path: "/Marketplace",
    bookmarkList: ["Hottest NFT", "Creator", "Top Collection"],
    pageList: ["Home"],
  },
];
