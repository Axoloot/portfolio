import { useCursor } from '../../Contexts/useCursor';
import { CursorAnimation, CursorImg, CursorPosition } from './styles';

interface CursorProps {
  onClick: () => void;
}

const Cursor = ({ onClick }: CursorProps) => {
  const { pos, initial, hidden, cursorImg, animation } = useCursor();

  return (
    <CursorPosition
      onClick={onClick}
      initial={initial}
      hidden={hidden}
      animate={pos}
      transition={{
        ease: 'anticipate',
        duration: hidden ? 0 : 1,
      }}
    >
      <CursorAnimation
        animate={animation?.animation}
        transition={animation?.transition}
      >
        <CursorImg src={cursorImg} alt="cur" />
      </CursorAnimation>
    </CursorPosition>
  );
};

export default Cursor;
