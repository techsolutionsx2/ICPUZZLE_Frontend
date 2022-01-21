import React from "react";

// styled component
import { Layout, GoApp } from "./JoinUs.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

// -----------------------------------------------------------

const JoinUS: React.FC = () => {
  return (
    <Layout>
      <Text fColor="white" fWeight={800} fSize={38}>
        Join us right now
      </Text>
      <Text fColor="white" fWeight={600} fSize={19} padding="40px 0px 0px 0px">
        Become a creator or find ready-made art to your liking!
      </Text>
      <GoApp>Go to APP</GoApp>
    </Layout>
  );
};

export default JoinUS;
