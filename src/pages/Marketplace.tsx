import type { NextPage } from "next";

//components

import {
  Hero,
  Creators,
  Hottest,
  JoinUs,
  TopCollection,
} from "views/Marketplace";

//styled components
import { MarketplaceLayout } from "styles/Styled";

const Marketplace: NextPage = () => {
  return (
    <MarketplaceLayout>
      <Hero />
      <Hottest />
      <Creators />
      <TopCollection />
      <JoinUs />
    </MarketplaceLayout>
  );
};

export default Marketplace;
