import React, { useEffect, useRef, useState } from "react";

// styled component
import { Layout, GridLayout } from "./Work.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";

// temp Data

import { WorkItemData } from "utils/tempData/WorkItem";
import { WorkItem } from "components/WorkItem";

// -----------------------------------------------------------
const Work: React.FC = () => {
  return (
    <Layout id="Howitworks">
      <Row
        justifyContent="center"
        gap={50}
        responsive={{
          1250: {
            flexDirection: "column-reverse",
            alignItems: "center",
            gap: "0",
          },
        }}
      >
        <Row
          justifyContent="flex-end"
          gap={50}
          mWidth={590}
          responsive={{
            1250: { padding: "50px 0px 0px 0px", fSize: 50 },
            700: {
              flexDirection: "column",
              alignItems: "center",
              gap: "50",
            },
          }}
        >
          <WorkItem
            image={WorkItemData[0].image}
            detail={WorkItemData[0].detail}
            login={WorkItemData[0].login}
          ></WorkItem>
          <WorkItem
            image={WorkItemData[1].image}
            detail={WorkItemData[1].detail}
            login={WorkItemData[1].login}
          ></WorkItem>
        </Row>
        <Row mWidth={590} justifyContent="center">
          <Text
            padding="20px"
            fColor="#0B1D35"
            fSize={50}
            fWeight={800}
            responsive={{
              768: { fSize: 40 },
              375: { fSize: 30 },
            }}
          >
            How it works
          </Text>
        </Row>
      </Row>
      <GridLayout>
        {WorkItemData.map((item, index) => {
          if (index > 1) {
            return (
              <WorkItem
                key={index}
                image={item.image}
                detail={item.detail}
                login={item.login}
              ></WorkItem>
            );
          }
        })}
      </GridLayout>
    </Layout>
  );
};

export default Work;
