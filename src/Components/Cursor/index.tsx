import { Position } from '../../misc/types';
import { CursorImg, CursorWrapper } from './styles';

interface CursorProps {
  hidden?: boolean;
  cursorImg: string;
  initial: Position;
  pos: Position;
  onClick: () => void;
}

const Cursor = ({ hidden, pos, cursorImg, initial, onClick }: CursorProps) => {
  return (
    <CursorWrapper
      onClick={onClick}
      initial={initial}
      hidden={hidden}
      animate={pos}
      transition={{
        ease: 'anticipate',
        duration: hidden ? 0 : 1,
      }}
    >
      <CursorImg src={cursorImg} alt="cur" width="16px" height="23px" />
    </CursorWrapper>
  );
};

export default Cursor;
