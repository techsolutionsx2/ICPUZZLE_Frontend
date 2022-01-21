import React from "react";

// styled component
import {
  Layout,
  Detail,
  PointContainer,
  Line,
  Point,
} from "./RoadmapItem.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

// -----------------------------------------------------------

const RoadmapItem: React.FC<{
  first?: boolean;
  end?: boolean;
  color: string;
}> = ({ first, end, color }) => {
  const pointColor = color.split(",")[1];
  return (
    <Layout first={first}>
      <Detail></Detail>
      <PointContainer>
        <Point color={pointColor}></Point>
      </PointContainer>
      <Line end={end} color={color}></Line>
    </Layout>
  );
};

export default RoadmapItem;
