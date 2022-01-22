import React from "react";

// styled component
import { Layout, CollectionItems, Button } from "./Creators.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";
import { WorkItem } from "components/WorkItem";

//tempData

import { CreatorItemData } from "utils/tempData/Creator";

// -----------------------------------------------------------

const TopCollection: React.FC = () => {
  return (
    <Layout>
      <Row
        justifyContent="space-between"
        alignItems="flex-end"
        padding="0px 200px"
      >
        <Text fWeight={800} fSize={50}>
          Creators
        </Text>
        <Button>Explore Creators</Button>
      </Row>
      <CollectionItems>
        {CreatorItemData.map((item, index) => {
          return (
            <WorkItem
              image={item.image}
              detail={item.detail}
              login={item.login}
              key={index}
            />
          );
        })}
      </CollectionItems>
    </Layout>
  );
};

export default TopCollection;
