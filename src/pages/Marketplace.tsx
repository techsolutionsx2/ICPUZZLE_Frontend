import type { NextPage } from "next";

//components
import { Explorer, Recent } from "views/NFT";

import { MarketplaceLayout } from "styles/Styled";

const NFT: NextPage = () => {
  return (
    <MarketplaceLayout>
      <Explorer />
      <Recent />
    </MarketplaceLayout>
  );
};

export default NFT;
