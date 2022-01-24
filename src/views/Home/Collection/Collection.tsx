import React from "react";

// styled component
import { Layout, CollectionItems } from "./Collection.styled";

// component

import Text from "components/Text";
import { CollectionItem } from "components/CollectionItem";

//tempData
import { CollectionItemData } from "utils/tempData/CollectionItem";

// -----------------------------------------------------------

const Collection: React.FC = () => {
  return (
    <Layout id="Collection">
      <Text fSize={44} lHeight={48} fWeight={800}>
        Collection
      </Text>
      <CollectionItems>
        {CollectionItemData.map((item, index) => {
          return <CollectionItem data={item} key={index} />;
        })}
      </CollectionItems>
    </Layout>
  );
};

export default Collection;
