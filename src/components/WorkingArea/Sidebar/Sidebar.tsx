import Image from "next/image";
import React, { useState, useEffect } from "react";

//Styled Components
import {
  Layout,
  Iconlayout,
  Container,
  Tools,
  ItemLayout,
  Icon,
  Tab,
  Wrapper,
  Puzzles,
  PuzzleItem,
  ColourItem,
} from "./Sidebar.styled";

//Components
import Item from "./components/Item";
import Text from "components/Text";

//Assets
import { AiOutlineLeft } from "react-icons/ai";

import IdentityIcon from "assets/png/identity.png";
import CustomizationIcon from "assets/png/customization.png";
import ShapesIcon from "assets/png/shapes.png";
import PuzzlesIcon from "assets/png/puzzle.png";
import ColoursIcon from "assets/png/colour.png";

import { wearables } from "utils/constants";

//type
import { SidebarProps } from "types/components/Working";
import { MdModeEditOutline } from "react-icons/md";

const tools = [
  { id: 1, title: "IDENTITY", icon: IdentityIcon },
  { id: 2, title: "CUSTOMIZATION", icon: CustomizationIcon },
  { id: 3, title: "SHAPES", icon: ShapesIcon },
  { id: 4, title: "PUZZLE", icon: PuzzlesIcon },
  { id: 5, title: "COLOUR", icon: ColoursIcon },
];

const Sidebar: React.FC<SidebarProps> = ({
  flag,
  selectedWearables,
  screenMode,
  addPuzzle,
  selectItem,
}) => {
  const [currentTab, setCurrentTab] = useState<number | null>(null);
  const [show, setShow] = useState(true);
  const handleDrag = (data: any, i: { id: string; img: string }) => {
    const sidebar = document.getElementById("Sidebar")?.getBoundingClientRect();
    if (sidebar) {
      let { x, y } = data;
      let _x: number;
      let _y: number;

      if (!screenMode) {
        _x = x - (window.innerWidth - 1024) / 2 - 30;
        _y = y - (window.innerHeight - 650) / 2 - 65;
      } else {
        _x = x - 30;
        _y = y - 30;
      }

      let color;
      let draggable;
      let changeColor;
      let resizeEnabled;
      let rotateEnabled;
      if (
        _x < sidebar.left - sidebar.width - 30 ||
        _y > sidebar.height + sidebar.top
      ) {
        if (currentTab == 1) {
          draggable = true;
          changeColor = false;
          resizeEnabled = true;
          rotateEnabled = true;
        }
        if (currentTab == 2) {
          draggable = true;
          changeColor = false;
          resizeEnabled = true;
          rotateEnabled = true;
        }
        if (currentTab == 3) {
          color = "#3BA7C6";
          draggable = true;
          changeColor = true;
          resizeEnabled = true;
          rotateEnabled = true;
        }
        if (currentTab == 4) {
          draggable = true;
          changeColor = false;
          resizeEnabled = false;
          rotateEnabled = true;
        }
        const element = {
          ...i,
          x: _x,
          y: _y,
          width: 60,
          height: 60,
          rotation: 0,
          draggable: draggable,
          changeColor: changeColor,
          resizeEnabled: resizeEnabled,
          rotateEnabled: rotateEnabled,
          color: color,
        };
        addPuzzle(element);
      }
    }
  };

  return (
    <Layout id="Sidebar">
      <Iconlayout flag={show} onClick={() => setShow(!show)}>
        <AiOutlineLeft color={flag ? "white" : "black"} size={20} />
      </Iconlayout>
      {show && (
        <Container>
          <Tools>
            {tools.map((i) => (
              <ItemLayout
                key={i.id}
                onClick={() => setCurrentTab(i.id)}
                flag={currentTab === i.id}
              >
                <Icon>
                  <Image src={i.icon} alt="puzzle" width={15} height={15} />
                </Icon>
                <Text fSize={14} fWeight={500} fColor="#0B1D35">
                  {i.title}
                </Text>
              </ItemLayout>
            ))}
          </Tools>
          <Tab flag={currentTab !== null}>
            <Wrapper>
              {currentTab && (
                <Puzzles>
                  {wearables.map((i) => {
                    if (i.group !== 5) {
                      if (i.group === currentTab) {
                        return (
                          <PuzzleItem
                            key={i.id}
                            flag={selectedWearables.includes(i.id)}
                          >
                            <Item data={i} key={i.id} handleDrag={handleDrag} />
                          </PuzzleItem>
                        );
                      }
                    } else {
                      if (i.group === currentTab) {
                        return (
                          <ColourItem
                            key={i.id}
                            onClick={() => {
                              selectItem(+i.id);
                            }}
                          >
                            <Image
                              src={i.img}
                              alt="No Image"
                              width={50}
                              height={50}
                            />
                          </ColourItem>
                        );
                      }
                    }
                  })}
                </Puzzles>
              )}
            </Wrapper>
          </Tab>
        </Container>
      )}
    </Layout>
  );
};

export default Sidebar;
