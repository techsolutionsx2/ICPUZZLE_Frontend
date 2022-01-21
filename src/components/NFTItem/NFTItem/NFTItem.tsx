import React from "react";

// styled component
import { Layout, SubLayout } from "./NFTItem.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

// -----------------------------------------------------------

const NFTItem: React.FC<{ back: string; subBack: string }> = ({
  back,
  subBack,
}) => {
  return (
    <Layout back={back}>
      <SubLayout back={subBack} />
    </Layout>
  );
};

export default NFTItem;
