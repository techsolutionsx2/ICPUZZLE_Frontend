import React from "react";

// styled component
import { Layout } from "./Work.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

// temp Data

import { WorkItemData } from "utils/tempData/WorkItem";
import { WorkItem } from "components/WorkItem";
// -----------------------------------------------------------

const Work: React.FC = () => {
  return (
    <Layout>
      {WorkItemData.map((item, index) => {
        if (index === 2) {
          return (
            <>
              <Row
                className="gridMerge"
                justifyContent="center"
                padding="38px 0px 0px 0px "
              >
                <Text padding="20px" fColor="#0B1D35" fSize={38} fWeight={800}>
                  How it works
                </Text>
              </Row>
              <style jsx global>{`
                .gridMerge {
                  grid-column: span 2;
                }
              `}</style>
              <WorkItem
                image={item.image}
                detail={item.detail}
                login={item.login}
                key={index}
              ></WorkItem>
            </>
          );
        }
        return (
          <WorkItem
            key={index}
            image={item.image}
            detail={item.detail}
            login={item.login}
          ></WorkItem>
        );
      })}
    </Layout>
  );
};

export default Work;
