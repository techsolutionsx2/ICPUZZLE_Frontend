import React from "react";
import Image from "next/image";

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

import Time from "assets/png/time.png";

// -----------------------------------------------------------

const RoadmapItem: React.FC<{
  first?: boolean;
  end?: boolean;
  color: string;
}> = ({ first, end, color }) => {
  const pointColor = color.split(",")[1];
  return (
    <Layout first={first}>
      <Detail>
        <Image src={Time} alt="No Image"></Image>
      </Detail>
      <PointContainer>
        <Point color={pointColor}></Point>
      </PointContainer>
      <Line endItem={end} color={color}></Line>
    </Layout>
  );
};

export default RoadmapItem;
