import React from "react";

// styled component
import {
  Layout,
  CollectionItems,
  PrevItem,
  NextItem,
} from "./Collection.styled";

//asserts
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// component

import Text from "components/Text";
import { Row } from "components/Layout";
import { CollectionItem } from "components/CollectionItem";

//tempData
import { CollectionItemData } from "utils/tempData/CollectionItem";

//Swiper

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

// -----------------------------------------------------------

const params1 = {
  pagination: {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '"></span>';
    },
  },
};

const Collection: React.FC = () => {
  return (
    <Layout id="Collection">
      <Text
        fColor="#0B1D35"
        fSize={50}
        lHeight={56}
        fWeight={800}
        responsive={{
          1024: { fSize: 40 },
          900: { fSize: 50 },
          768: { fSize: 40 },
          375: { fSize: 30 },
        }}
      >
        Collection
      </Text>
      <Row justifyContent="center" responsive={{ 700: { display: "none" } }}>
        <CollectionItems>
          {CollectionItemData.map((item, index) => {
            return <CollectionItem data={item} key={index} />;
          })}
        </CollectionItems>
      </Row>
      <Row
        justifyContent="center"
        display="none"
        padding="50px 0px 0px 0px"
        responsive={{
          700: { display: "flex" },
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            "425": { slidesPerView: 1.3 },
            "500": { slidesPerView: 1.6 },
            "580": {
              slidesPerView: 2,
            },
          }}
          navigation={{
            prevEl: ".prevItem",
            nextEl: ".nextItem",
          }}
          {...params1}
        >
          {CollectionItemData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CollectionItem data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="prevItem">
          <PrevItem>
            <AiOutlineArrowLeft size={25} />
          </PrevItem>
        </div>
        <div className="nextItem">
          <NextItem>
            <AiOutlineArrowRight size={25} />
          </NextItem>
        </div>
      </Row>
    </Layout>
  );
};

export default Collection;
