export interface DrawerProps {
  show: boolean;
  isActive: boolean;
  bgColor: boolean;
  scale: number;
  setShow: (type: boolean) => void;
  handleScale: (type: string) => void;
  handleDeletePuzzle: () => void;
}

export interface PuzzleItemProps {
  id: string;
  img: string;
  x: number;
  y: number;
  width?: number | undefined;
  height?: number | undefined;
  rotation: number;
  color?: string | undefined;
  draggable?: boolean | undefined;
  changeColor?: boolean | undefined;
  resizeEnabled?: boolean | undefined;
  rotateEnabled?: boolean | undefined;
}

export interface SidebarProps {
  screenMode: boolean;
  flag: boolean;
  selectedWearables: string[];
  addPuzzle: (data: PuzzleItemProps) => void;
  selectItem: (id: number) => void;
}
