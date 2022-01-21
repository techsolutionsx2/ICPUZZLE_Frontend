import React from "react";

// styled component
import { Layout } from "./Join.styled";

// component

import { JoinUs } from "components/JoinUs";

// -----------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout>
      <JoinUs />
    </Layout>
  );
};

export default Hero;
