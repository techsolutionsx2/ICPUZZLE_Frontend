import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Konva from "konva";
import { Layer, Stage, Rect } from "react-konva";
import { Transformer } from "react-konva/es/ReactKonvaCore";

import randomize from "randomatic";

//Component
import { ImageElement, Drawer, Sidebar } from "components/WorkingArea";
import Text from "components/Text";

import DefaultPuzzle from "assets/pictures/defaultPuzzle.svg";

//styled components
import {
  Layout,
  Container,
  Background,
  Canvas,
  DrawerContainer,
  TitleContainer,
  SidebarContainer,
} from "./WorkingArea.styled";

type PuzzleItem = {
  width?: number | undefined;
  height?: number | undefined;
  id: string;
  img: string;
  x: number;
  y: number;
  rotation: number;
  color?: string | undefined;
  draggable?: boolean | undefined;
  changeColor?: boolean | undefined;
};

const WorkingArea: FC = () => {
  const [activeElements, setActiveElements] = useState<any>([]);
  const [scale, setScale] = useState(1);
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });
  const [selectedWearables, setSelectedWearables] = useState<string[]>([]);

  const trRef = useRef<any>(null);
  const stageRef = useRef<any>(null);
  const layerRef = useRef<any>(null);
  const selectionImageRef = useRef<any>(null);
  const selection = useRef<any>({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  const [puzzles, setPuzzles] = useState<PuzzleItem[]>([
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
    if (activeElements.length) {
      const id = activeElements[0].attrs.id;
      setPuzzles((current) => current.filter((i) => i.id !== id));
      setSelectedWearables((current) => current.filter((i) => i !== id));
      setActiveElements([]);
      trRef.current.nodes([]);
    }
  };
  const addPuzzle = (element: PuzzleItem) => {
    setPuzzles((current) => [...current, element]);
    setSelectedWearables((current) => [...current, element.id]);
  };
  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <Container>
          <Background />
          <DrawerContainer>
            <Drawer
              handleScale={handleScale}
              scale={scale}
              isActive={
                !!activeElements.length &&
                activeElements[0].attrs.id !== puzzles[0].id
              }
              handleDeletePuzzle={handleDeletePuzzle}
            />
          </DrawerContainer>
          <TitleContainer>
            <Text fColor="white" fWeight={700} fSize={20}>
              Title
            </Text>
          </TitleContainer>

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
              addPuzzle={addPuzzle}
              selectedWearables={selectedWearables}
            />
          </SidebarContainer>
        </Container>
      </DndProvider>
    </Layout>
  );
};

export default WorkingArea;
