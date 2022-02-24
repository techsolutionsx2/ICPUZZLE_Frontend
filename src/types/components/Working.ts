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

export interface DrawerProps {
  scale: number;
  isActive: boolean;
  handleScale: (type: string) => void;
  handleDeletePuzzle: () => void;
}

export interface SidebarProps {
  flag: boolean;
  addPuzzle: (data: PuzzleItemProps) => void;
  selectedWearables: string[];
  selectItem: (id: number) => void;
}
