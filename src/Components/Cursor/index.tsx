import useWindowDimensions from '../../misc/dimension';
import { CursorImg, CursorWrapper } from './styles';

interface CursorProps {
  hidden?: boolean;
  cursorImg: string;
  pos: {
    x: number;
    y: number;
  };
}

const Cursor = ({ hidden, pos, cursorImg }: CursorProps) => {
  const { height } = useWindowDimensions();

  return (
    <CursorWrapper
      draggable
      initial={{ x: 70, y: height - 30 }}
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
