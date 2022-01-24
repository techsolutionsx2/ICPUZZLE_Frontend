import React from "react";

// styled component
import { Layout, PlayerContainer } from "./Video.styled";

// component

import Text from "components/Text";
import { Row, Col } from "components/Layout";

// -----------------------------------------------------------

const Video: React.FC = () => {
  return (
    <Layout id="ICPuzzle">
      <PlayerContainer></PlayerContainer>
      <Row mWidth={550} alignItems="center">
        <Col>
          <Text fWeight={800} fSize={40} lHeight={40}>
            ICPuzzles
          </Text>
          <Text
            padding="54px 0px 0px 0px"
            fWeight={400}
            fSize={20}
            lHeight={24}
          >
            Our NFTs have exciting new properties: they're unique, provably
            scarce, tradeadle, and usable across multiple applications.
          </Text>
          <Text
            padding="12px 0px 0px 0px "
            fWeight={400}
            fSize={20}
            lHeight={24}
          >
            Just like physical goods, you can do whatever you want with them!
          </Text>
        </Col>
      </Row>
    </Layout>
  );
};

export default Video;
