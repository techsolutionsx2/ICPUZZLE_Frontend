import Image from "next/image";
import { FC, useState } from "react";

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

declare type PuzzleItem = {
  width?: number;
  height?: number;
  id: string;
  img: string;
  x: number;
  y: number;
  rotation: number;
  color?: string;
  draggable?: boolean;
  changeColor?: boolean;
};

interface Props {
  addPuzzle: (data: PuzzleItem) => void;
  selectedWearables: string[];
}

const tools = [
  { id: 1, title: "IDENTITY", icon: IdentityIcon },
  { id: 2, title: "CUSTOMIZATION", icon: CustomizationIcon },
  { id: 3, title: "SHAPES", icon: ShapesIcon },
  { id: 4, title: "PUZZLE", icon: PuzzlesIcon },
  { id: 5, title: "COLOUR", icon: ColoursIcon },
];

const Sidebar: FC<Props> = ({ addPuzzle, selectedWearables }) => {
  console.log(selectedWearables);
  const [currentTab, setCurrentTab] = useState<number | null>(null);

  const [show, setShow] = useState(true);

  const handleDrag = (data: any, i: { id: string; img: string }) => {
    const sidebar = document.getElementById("Sidebar")?.getBoundingClientRect();
    console.log(sidebar);
    if (sidebar) {
      var { x, y } = data;
      x = x - (window.innerWidth - 1024) / 2 - 30;
      y = y - (window.innerHeight - 650) / 2 - 30;
      console.log(y);
      if (x < sidebar.left - 80 || y > sidebar.height + sidebar.top) {
        const element = { ...i, x, y, rotation: 0, draggable: true };
        addPuzzle(element);
      }
    }
  };

  return (
    <Layout id="Sidebar">
      <Iconlayout flag={show} onClick={() => setShow(!show)}>
        <AiOutlineLeft color="white" size={20} />
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
                  {wearables.map((i) => (
                    <PuzzleItem
                      key={i.id}
                      flag={selectedWearables.includes(i.id)}
                    >
                      <Item data={i} key={i.id} handleDrag={handleDrag} />
                    </PuzzleItem>
                  ))}
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
