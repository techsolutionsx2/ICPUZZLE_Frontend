import React from "react";

// styled component
import { Layout, ViewMore } from "./Recent.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

// -----------------------------------------------------------

const Recent: React.FC = () => {
  return (
    <Layout>
      <Text fSize={50} fWeight={800}>
        Recently listed NFTs
      </Text>
      <Row padding="70px 160px">
        <ViewMore>View more</ViewMore>
      </Row>
    </Layout>
  );
};

export default Recent;
