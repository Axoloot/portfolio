import { Position } from '../../misc/types';
import { CursorImg, CursorWrapper } from './styles';

interface CursorProps {
  hidden?: boolean;
  cursorImg: string;
  initial: Position;
  pos: Position;
}

const Cursor = ({ hidden, pos, cursorImg, initial }: CursorProps) => {
  return (
    <CursorWrapper
      initial={initial}
      hidden={hidden}
      animate={pos}
      transition={{
        ease: 'anticipate',
        duration: hidden ? 0 : 1,
      }}
    >
      <CursorImg src={cursorImg} />
    </CursorWrapper>
  );
};

export default Cursor;
