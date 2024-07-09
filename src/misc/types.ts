export interface Position {
  x: number;
  y: number;
}

export interface DrawerProps {
  setPos?: React.Dispatch<React.SetStateAction<Position>>;
  homeCursor?: () => void;
  setHidden?: React.Dispatch<React.SetStateAction<boolean>>;
}
