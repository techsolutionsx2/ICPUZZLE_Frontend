import React, { FC, useRef, useState } from "react";
import Switch from "react-switch";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Konva from "konva";
import { Layer, Stage, Rect } from "react-konva";
import { Transformer } from "react-konva/es/ReactKonvaCore";

import randomize from "randomatic";

import Image from "next/image";

//Component
import {
  ImageElement,
  Drawer,
  Sidebar,
  ColorPicker,
} from "components/WorkingArea";

//styled components
import {
  Layout,
  Container,
  MenuBox,
  ResizeButton,
  Background,
  Canvas,
  DrawerContainer,
  TitleContainer,
  Title,
  SidebarContainer,
  ColorPickerContainer,
  MintButton,
  MintButtonContainer,
  ColourSwiperContainer,
  SwiperItem,
  NextItem,
  PrevItem,
  SwiperWrapper,
} from "./WorkingArea.styled";

//Type
import { PuzzleItemProps } from "types/components/Working";

//Assets
import { IoResize } from "react-icons/io5";
import DefaultPuzzle from "assets/svg/defaultPuzzle.svg";
import { wearables } from "utils/constants";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const WorkingArea: FC = () => {
  const [bgColor, setBgColor] = useState(true);

  const [title, setTitle] = useState<string>("");

  const [showColor, setShowColor] = useState(true);
  const [colorSlide, setColorSlide] = useState(138);

  const [activeElements, setActiveElements] = useState<any>([]);
  const [scale, setScale] = useState(1);
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });
  const [selectedWearables, setSelectedWearables] = useState<string[]>([]);

  const trRef = useRef<any>(null);
  const stageRef = useRef<any | null>(null);
  const layerRef = useRef<any>(null);
  const selectionImageRef = useRef<any>(null);
  const selection = useRef<any>({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  const [puzzles, setPuzzles] = useState<PuzzleItemProps[]>([
    {
      id: randomize("Aa0", 8),
      img: DefaultPuzzle,
      width: 40,
      height: 40,
      x: 1024 / 2 - 40,
      y: 650 / 3,
      rotation: 0,
      changeColor: true,
    },
  ]);

  const handleDragEnd = ({ target }: any, id: string) => {
    setPuzzles((current) =>
      current.map((i) => {
        if (i.id === id) {
          i.x = target.attrs.x;
          i.y = target.attrs.y;
          i.rotation = target.attrs.rotation;
        }
        return i;
      })
    );
  };

  const updateSelectionRect = () => {
    const node = selectionImageRef.current;
    node.setAttrs({
      visible: selection.current.visible,
      x: Math.min(selection.current.x1, selection.current.x2),
      y: Math.min(selection.current.y1, selection.current.y2),
      width: Math.abs(selection.current.x1 - selection.current.x2),
      height: Math.abs(selection.current.y1 - selection.current.y2),
    });
    node.getLayer().batchDraw();
  };

  const onMouseDown = (e: any) => {
    const isElement = e.target.findAncestor(".elements-container");
    const isTransformer = e.target.findAncestor("Transformer");
    const isImage = e.target.name() === "image";

    if (isElement || isTransformer || isImage) {
      return;
    }

    const pos = e.target.getStage().getPointerPosition();
    selection.current.visible = true;
    selection.current.x1 = pos.x;
    selection.current.y1 = pos.y;
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };

  const onMouseMove = (e: any) => {
    if (!selection.current.visible) {
      return;
    }
    const pos = e.target.getStage().getPointerPosition();
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };
  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      trRef.current.nodes([]);
      setActiveElements([]);
    }
  };
  const onMouseUp = () => {
    if (!selection.current.visible) {
      return;
    }
    const selBox = selectionImageRef.current.getClientRect();

    const elements: any = [];
    layerRef.current.find(".image").forEach((elementNode: any) => {
      const elBox = elementNode.getClientRect();
      if (Konva.Util.haveIntersection(selBox, elBox)) {
        elements.push(elementNode);
      }
    });

    if (!activeElements.length) {
      setActiveElements(elements);
    }

    trRef.current.nodes(!activeElements.length ? elements : activeElements);
    selection.current.visible = false;
    updateSelectionRect();
  };

  const onClickTap = (e: any) => {
    if (e.target === e.target.getStage()) {
      setActiveElements([]);
    }
    let stage = e.target.getStage();
    let layer = layerRef.current;
    let tr = trRef.current;
    if (e.target === stage) {
      setActiveElements([]);
      tr.nodes([]);
      layer.draw();
      return;
    }
    layer.draw();
  };

  const handleDragBound = ({ x, y }: { x: number; y: number }) => {
    const windowWidth = window.innerWidth - 100;
    const windowHeight = window.innerHeight - 100;

    return {
      x: x <= 0 ? 0 : x >= windowWidth ? windowWidth : x,
      y: y <= 0 ? 0 : y >= windowHeight ? windowHeight : y,
    };
  };

  const handleScale = (type: string) => {
    const stage = stageRef.current;
    const center = {
      x: stage.width() / 2,
      y: stage.height() / 2,
    };
    const relatedTo = {
      x: (center.x - stage.x()) / scale,
      y: (center.y - stage.y()) / scale,
    };
    const newScale =
      type === "+"
        ? Number((scale + 0.2).toFixed(1))
        : Number((scale - 0.2).toFixed(1));
    const newPos = {
      x: center.x - relatedTo.x * newScale,
      y: center.y - relatedTo.y * newScale,
    };

    setScale(newScale);
    setStagePosition(newPos);
  };
  const handleDeletePuzzle = () => {
    if (
      !!activeElements.length &&
      activeElements[0].attrs.id !== puzzles[0].id
    ) {
      const id = activeElements[0].attrs.id;
      setPuzzles((current) => current.filter((i) => i.id !== id));
      setSelectedWearables((current) => current.filter((i) => i !== id));
      setActiveElements([]);
      trRef.current.nodes([]);
    }
  };
  const addPuzzle = (element: PuzzleItemProps) => {
    setPuzzles((current) => [...current, element]);
    setSelectedWearables((current) => [...current, element.id]);
  };
  const handleChangePuzzleColor = (color: string) => {
    const id = activeElements[0].attrs.id;
    setPuzzles((current) =>
      current.map((i) => {
        if (i.id === id) i.color = color;
        return i;
      })
    );
  };
  const downloadImage = () => {
    const dataURL = stageRef.current.toDataURL();
    var link = document.createElement("a");
    link.download = title + ".png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <MenuBox>
        <Switch
          checked={bgColor}
          onChange={setBgColor}
          onColor="#fff"
          onHandleColor="#000"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={22}
          width={80}
          className="react-switch"
          id="material-switch"
        />
        <ResizeButton>
          <IoResize size={20} />
        </ResizeButton>
      </MenuBox>
      <DndProvider backend={HTML5Backend}>
        <Container>
          <Background flag={bgColor} />
          <DrawerContainer>
            <Drawer
              handleScale={handleScale}
              scale={scale}
              isActive={
                activeElements.length &&
                activeElements[0].attrs.id !== puzzles[0].id
              }
              handleDeletePuzzle={handleDeletePuzzle}
            />
          </DrawerContainer>
          <TitleContainer>
            <Title
              flag={bgColor}
              placeholder="Title"
              onChange={(event: any) => setTitle(event.target.value)}
            />
          </TitleContainer>
          <MintButtonContainer onClick={() => downloadImage()}>
            <MintButton>Mint</MintButton>
          </MintButtonContainer>
          <Canvas>
            <Stage
              width={1024}
              height={650}
              ref={stageRef}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              onTouchStart={checkDeselect}
              onClick={onClickTap}
              scale={{ x: scale, y: scale }}
              x={stagePosition.x}
              y={stagePosition.y}
              draggable={true}
            >
              <Layer ref={layerRef}>
                {puzzles.map((i) => (
                  <ImageElement
                    key={i.id}
                    img={i.img}
                    y={i.y}
                    x={i.x}
                    draggable={i.draggable}
                    onDragStart={(e) => e.target.moveToTop()}
                    onDragEnd={(e) => handleDragEnd(e, i.id)}
                    onTransformEnd={(e) =>
                      setPuzzles((current) =>
                        current.map((i) => {
                          if (i.id === e.id) {
                            return { ...i, ...e };
                          }
                          return i;
                        })
                      )
                    }
                    onSelect={(e) => {
                      if (e.current !== undefined) {
                        let temp = [];
                        temp.push(e.current);
                        setActiveElements(temp);
                        trRef.current.nodes(temp);
                        trRef.current.getLayer().batchDraw();
                      }
                    }}
                    rotation={i.rotation}
                    width={i.width}
                    height={i.height}
                    dragBoundFunc={handleDragBound}
                    color={i.color}
                    id={i.id}
                    changeColor={i.changeColor}
                  />
                ))}
                <Transformer
                  ref={trRef}
                  resizeEnabled={
                    activeElements.length > 1 ||
                    (activeElements.length &&
                      activeElements[0].attrs.id === puzzles[0].id)
                      ? false
                      : true
                  }
                  boundBoxFunc={(oldBox, newBox) => {
                    if (newBox.width < 30 || newBox.height < 30) {
                      return oldBox;
                    }
                    return newBox;
                  }}
                />
                <Rect fill="rgba(0, 161, 255, 0.3)" ref={selectionImageRef} />
              </Layer>
            </Stage>
          </Canvas>
          <SidebarContainer>
            <Sidebar
              flag={bgColor}
              addPuzzle={addPuzzle}
              selectedWearables={selectedWearables}
            />
          </SidebarContainer>
          <ColorPickerContainer>
            <ColorPicker
              show={showColor}
              setShow={setShowColor}
              flag={bgColor}
              active={activeElements.length}
              handleChangeColor={handleChangePuzzleColor}
            />
          </ColorPickerContainer>
          {showColor && (
            <ColourSwiperContainer>
              <SwiperWrapper>
                <Swiper
                  slidesPerView={5}
                  centeredSlides={true}
                  navigation={{
                    prevEl: ".prevItem",
                    nextEl: ".nextItem",
                  }}
                  onSlideChange={(swiper) => {
                    setColorSlide(138 + swiper.activeIndex);
                  }}
                  slideToClickedSlide
                >
                  {wearables.map((i, index) => {
                    if (i.group === 6) {
                      return (
                        <SwiperSlide
                          key={index}
                          className={
                            colorSlide.toString() === i.id
                              ? "Deck Deck-selected"
                              : "Deck Deck-unselected"
                          }
                        >
                          <SwiperItem
                            onClick={() => {
                              setColorSlide(+i.id);
                            }}
                          >
                            <Image
                              src={i.img}
                              alt="No Image"
                              width={80}
                              height={80}
                            ></Image>
                          </SwiperItem>
                        </SwiperSlide>
                      );
                    }
                  })}
                </Swiper>
                <div className="prevItem">
                  <PrevItem>
                    <IoIosArrowBack size={25} color="#94899f" />
                  </PrevItem>
                </div>
                <div className="nextItem">
                  <NextItem>
                    <IoIosArrowForward size={25} color="#94899f" />
                  </NextItem>
                </div>
              </SwiperWrapper>
            </ColourSwiperContainer>
          )}
        </Container>
      </DndProvider>
    </Layout>
  );
};

export default WorkingArea;
