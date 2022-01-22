import React from "react";

// styled component
import { Layout, CollectionItems, Button } from "./TopCollection.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";
import { CollectionItem } from "components/CollectionItem";

//tempData
import { CollectionItemDataTop } from "utils/tempData/CollectionItem";

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
          Top Collections
        </Text>
        <Button>Explore Collections</Button>
      </Row>
      <CollectionItems>
        {CollectionItemDataTop.map((item, index) => {
          return <CollectionItem data={item} key={index} />;
        })}
      </CollectionItems>
    </Layout>
  );
};

export default TopCollection;
