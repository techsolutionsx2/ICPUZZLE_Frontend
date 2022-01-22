import React from "react";

// styled component
import { Layout, LayoutJoin } from "./JoinUs.styled";

// component

import { JoinUs } from "components/JoinUs";

// -----------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout>
      <LayoutJoin>
        <JoinUs />
      </LayoutJoin>
    </Layout>
  );
};

export default Hero;
