export interface PuzzleItemProps {
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
}

export interface DrawerProps {
  scale: number;
  isActive: boolean;
  handleScale: (type: string) => void;
  handleDeletePuzzle: () => void;
}

export interface SidebarProps {
  addPuzzle: (data: PuzzleItemProps) => void;
  selectedWearables: string[];
}
