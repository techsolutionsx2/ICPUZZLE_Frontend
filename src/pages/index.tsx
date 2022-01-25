import type { NextPage } from "next";

//components
import {
  Hero,
  Video,
  Collection,
  Create,
  Work,
  Roadmap,
  Join,
} from "views/Home";

import { IndexLayout } from "styles/Styled";

const Home: NextPage = () => {
  return (
    <IndexLayout>
      <Hero />
      <Video />
      <Collection />
      <Create />
      <Work />
      <Roadmap />
      <Join />
    </IndexLayout>
  );
};

export default Home;
