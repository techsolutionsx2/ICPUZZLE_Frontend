import React from "react";
import Image from "next/image";

// styled component
import { Layout, ImageContainer } from "./Loading.styled";

//assets

import LoadingImage from "assets/svg/Loading.svg";

// -----------------------------------------------------------

const Loading: React.FC = () => {
  return (
    <Layout>
      <ImageContainer>
        <object type="image/svg+xml" data={LoadingImage}></object>
      </ImageContainer>
    </Layout>
  );
};

export default Loading;
