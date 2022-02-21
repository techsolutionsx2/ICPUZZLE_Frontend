import type { NextPage } from "next";

//Component
import {
  Hero,
  Video,
  Collection,
  Create,
  Work,
  Roadmap,
  Join,
} from "views/Home";

import { Loading } from "components/Loading";

//Styled Component
import { IndexLayout } from "styles/Styled";

const Home: NextPage = () => {
  return (
    <IndexLayout>
      <Loading />
      {/* <Hero /> */}
      {/* <Video /> */}
      {/* <Collection /> */}
      {/* <Create /> */}
      {/* <Work /> */}
      {/* <Roadmap /> */}
      {/* <Join /> */}
    </IndexLayout>
  );
};

export default Home;
