import useWindowDimensions from '../../misc/dimension';
import { CursorImg, CursorWrapper } from './styles';

interface CursorProps {
  hidden?: boolean;
  pos: {
    x: number;
    y: number;
  };
}
const Cursor = ({ hidden, pos }: CursorProps) => {
  const { height } = useWindowDimensions();
  return (
    <CursorWrapper
      drag
      initial={{ x: 70, y: height - 30 }}
      hidden={hidden}
      animate={pos}
      transition={{
        ease: 'anticipate',
        duration: hidden ? 0 : 1,
      }}
    >
      <CursorImg src="https://www.freeiconspng.com/thumbs/cursor-png/download-big-image-png-medium-image-png-small-image-png-microsoft--15.png" />
    </CursorWrapper>
  );
};

export default Cursor;
