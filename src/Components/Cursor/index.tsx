import { useCursor } from '../../Contexts/useCursor';
import { CursorImg, CursorWrapper } from './styles';

interface CursorProps {
  onClick: () => void;
}

const Cursor = ({ onClick }: CursorProps) => {
  const { pos, initial, hidden, cursorImg } = useCursor();

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
      <CursorImg src={cursorImg} alt="cur" />
    </CursorWrapper>
  );
};

export default Cursor;
