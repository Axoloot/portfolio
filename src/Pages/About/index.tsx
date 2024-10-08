import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  TextContainer,
  Wrapper,
  DescriptionContainer,
  DotContainer,
  Dot,
  NavWrapper,
  Blinker,
  DescriptionText,
  Caption,
  Highlighted,
  TimerBar,
} from './styles';
// import Arrow from '../../Components/Arrow';
import { useCursor } from '../../Contexts/useCursor';
import { motion } from 'framer-motion';

const typeSpeed = 80;
const finalScale = 1.5;
const captionTiming = 6;
const pre = ',% My name is ';
const name = 'Cyril';
const post = '.%% I am ';

const cap = [
  {
    title: 'a Software Engineer.',
    description: 'I build and maintain software applications.',
  },
  {
    title: 'a DevOps.',
    description: 'I manage development and operational workflows.',
  },
  {
    title: 'a Fullstack Developer.',
    description: 'I work on both front-end and back-end development.',
  },
  {
    title: 'an Innovation Enthusiast.',
    description: 'I am passionate about new technologies and innovation.',
  },
];

const renderTextWithLineBreaks = (text: string) => {
  return text.split('%').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < text.split('%').length - 1 && <br />}
    </React.Fragment>
  ));
};

interface AboutProps {
  aboutStatus: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const About: React.FC<AboutProps> = ({ aboutStatus }) => {
  const { setPos, homeCursor, setHidden, setCursorImg, cursors, pos, click } =
    useCursor();
  const [animDone, setAnimDone] = aboutStatus;

  const [captionTyping, setCaptionTyping] = useState(false);
  const [captionText, setCaptionText] = useState(animDone ? cap[0].title : '');
  const [captionIndex, setCaptionIndex] = useState(0);
  const [captionHighlight, setCaptionHighlight] = useState(false);

  const [preText, setPreText] = useState(animDone ? pre : '');
  const [nameText, setNameText] = useState(animDone ? name : '');
  const [postText, setPostText] = useState(animDone ? post : '');
  const [resizeDone, setResizeDone] = useState(false);

  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(animDone ? finalScale : 1);

  const intervalRef = useRef<number | null>(null);
  const animRef = useRef<HTMLElement | null>(null);
  const jobRef = useRef<HTMLElement | null>(null);

  const handleCursorRef = (element: HTMLDivElement | null) => {
    if (element && preText.length === 0) {
      const rect = element.getBoundingClientRect();
      if (
        pos.x !== rect.x + rect.width / 2 &&
        pos.y !== rect.y + rect.height - 5 &&
        !animDone
      ) {
        setPos({ x: rect.x + rect.width / 2, y: rect.y + rect.height - 5 });
      }
    }
  };

  const clearTypingInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resizeAnim = useCallback(() => {
    const pos = animRef.current?.getBoundingClientRect();
    clearTypingInterval();
    setHidden(false);
    if (pos) setPos({ x: pos.x + pos.width, y: pos.y });

    setTimeout(() => {
      setCursorImg(cursors.drag);
      setPos(prev => ({ x: prev.x + 20, y: prev.y - 11.7 }));
      setScale(finalScale);
      setResizeDone(true);
    }, 1500);
  }, [cursors.drag, setCursorImg, setPos, setHidden]);

  const typeCaption = useCallback(
    (index: number) => {
      clearTypingInterval();
      let charIndex = 0;
      setCaptionText('');

      intervalRef.current = window.setInterval(() => {
        if (charIndex <= cap[index].title.length) {
          setCaptionText(cap[index].title.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearTypingInterval();
          setAnimDone(true);
        }
      }, typeSpeed);
    },
    [setAnimDone]
  );

  const typePre = useCallback(() => {
    clearTypingInterval();
    let preIndex = 0;
    let nameIndex = 0;
    setHidden(true);

    intervalRef.current = window.setInterval(() => {
      if (preIndex < pre.length) {
        setPreText(pre.slice(0, preIndex + 1));
        preIndex++;
      } else if (nameIndex < name.length) {
        setNameText(name.slice(0, nameIndex + 1));
        nameIndex++;
      } else resizeAnim();
    }, typeSpeed);
  }, [resizeAnim, setHidden]);

  const typePost = useCallback(() => {
    let postIndex = 0;
    let once = false;

    intervalRef.current = window.setInterval(() => {
      if (postIndex < post.length) {
        if (!once) {
          homeCursor();
          setCursorImg(cursors.cursor);
          once = true;
        }
        setPostText(post.slice(0, postIndex + 1));
        postIndex++;
      } else {
        clearTypingInterval();
        setAnimDone(true);
        homeCursor();
        typeCaption(0);
      }
    }, typeSpeed);
  }, [setAnimDone, typeCaption, homeCursor, setCursorImg, cursors.cursor]);

  const handleCaptionChange = useCallback(
    (newIndex: number, direction: number) => {
      if (captionTyping) return;
      setCaptionTyping(true);
      const pos = jobRef.current?.getBoundingClientRect();
      if (pos)
        setPos({
          x: pos.x + pos.width / 2,
          y: pos.y + pos.height - 5,
        });

      setTimeout(() => {
        click();
        setCaptionHighlight(true);
        setTimeout(() => {
          setCaptionIndex(newIndex);
          setDirection(direction);
          typeCaption(newIndex);
          homeCursor();
          setCaptionHighlight(false);
          setCaptionTyping(false);
        }, 500);
      }, 1000);
    },
    [captionTyping, click, homeCursor, setPos, typeCaption]
  );

  useEffect(() => {
    if (animDone) return;
    const timeout = setTimeout(typePre, 1500);
    return () => {
      clearTimeout(timeout);
      setHidden(false);
    };
  }, [typePre, setHidden, animDone]);

  useEffect(() => {
    if (!animDone) return;
    const interval = setInterval(
      () => handleCaptionChange((captionIndex + 1) % cap.length, 1),
      captionTiming * 1000
    );
    return () => clearInterval(interval);
  }, [animDone, handleCaptionChange, captionIndex]);

  return (
    <Wrapper>
      <TextContainer>
        Hi
        <span>{renderTextWithLineBreaks(preText)}</span>
        <motion.span
          initial={{
            fontSize: `${scale}em`,
            textShadow: animDone
              ? '.5px .5px 0 currentColor'
              : '0 0 0 currentColor',
          }}
          animate={{
            fontSize: `${scale}em`,
            textShadow:
              scale === finalScale
                ? '.5px .5px 0 currentColor'
                : '0 0 0 currentColor',
          }}
          transition={{ duration: 1, ease: 'anticipate' }}
          ref={animRef}
          onAnimationComplete={() => resizeDone && typePost()}
        >
          {renderTextWithLineBreaks(nameText)}
        </motion.span>
        <Caption>{renderTextWithLineBreaks(postText)}</Caption>
        <Highlighted $highlighted={captionHighlight} ref={jobRef}>
          {captionText}
        </Highlighted>
        {!animDone && <Blinker ref={handleCursorRef}>|</Blinker>}
      </TextContainer>
      <DescriptionContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: animDone ? 1 : 0 }}
      >
        <NavWrapper>
          {/* <Arrow
            disabled={captionTyping}
            direction="prev"
            onClick={() =>
              handleCaptionChange(
                (captionIndex - 1 + cap.length) % cap.length,
                -1
              )
            }
          /> */}
          <DescriptionText
            key={captionIndex}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            {cap[captionIndex].description}
          </DescriptionText>
          {/* <Arrow
            disabled={captionTyping}
            direction="next"
            onClick={() =>
              handleCaptionChange((captionIndex + 1) % cap.length, 1)
            }
          /> */}
        </NavWrapper>
        <DotContainer>
          {cap.map((_, index) => (
            <Dot
              onClick={() =>
                handleCaptionChange(index, captionIndex > index ? 0 : 1)
              }
              key={index}
              $active={index === captionIndex}
            />
          ))}
        </DotContainer>
      </DescriptionContainer>
      <TimerBar
        key={captionIndex}
        initial={{ width: 0 }}
        animate={{ width: animDone ? '100%' : 0 }}
        transition={{ duration: captionTiming, ease: 'linear' }}
      />
    </Wrapper>
  );
};

export default About;
