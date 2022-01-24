import React from "react";

// styled component
import { Layout } from "./Roadmap.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";
import { RoadmapItem } from "components/RoadmapItem";

// -----------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout id="Roadmap">
      <Text fSize={44} lHeight={48} fWeight={800}>
        Roadmap
      </Text>
      <Row justifyContent="center" padding="95px 0px 0px 0px ">
        <RoadmapItem first={true} color="#fffb00, #48ff00, #00ffd5" />
        <RoadmapItem color="#00ffd5, #002bff, #7a00ff" />
        <RoadmapItem color="#7a00ff, #ff00c8, #ff0000" />
        <RoadmapItem color="#ff0000, #ff0000, #ff0000" />
        <RoadmapItem color="#ff0000, #ff0000, #ff0000" end={true} />
      </Row>
    </Layout>
  );
};

export default Hero;
