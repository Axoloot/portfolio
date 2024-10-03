import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  TextContainer,
  Wrapper,
  DescriptionContainer,
  DotContainer,
  Dot,
  NavWrapper,
  DescriptionText,
  Blinker,
} from './styles';
import Arrow from '../../Components/Arrow';
import { useCursor } from '../../Contexts/useCursor';

const typeSpeed = 110;
const message = ',% My name is Cyril. % I am';

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

interface AboutProps {
  aboutStatus: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const TypingEffect: React.FC<AboutProps> = ({ aboutStatus }) => {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [animDone, setAnimDone] = aboutStatus;
  const [text, setText] = useState(
    animDone ? `${message} ${cap[0].title}` : ''
  );
  const [direction, setDirection] = useState(0);
  const [showCursor, toggleCursor] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const { setPos, homeCursor, setHidden, pos } = useCursor();

  const handleCursorRef = (element: HTMLDivElement | null) => {
    if (element) {
      const rect = element.getBoundingClientRect();
      if (
        pos.x !== rect.x + rect.width / 2 &&
        pos.y !== rect.y + rect.height - 5
      )
        setPos({ x: rect.x + rect.width / 2, y: rect.y + rect.height - 5 });
    }
  };

  const clearTypingInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const typeCaption = useCallback(
    (index: number) => {
      clearTypingInterval();
      toggleCursor(true);
      let charIndex = 0;
      intervalRef.current = window.setInterval(() => {
        if (charIndex <= cap[index].title.length) {
          setText(message + ' ' + cap[index].title.slice(0, charIndex));
          charIndex++;
        } else {
          clearTypingInterval();
          setAnimDone(true);
          setHidden && setHidden(false);
          homeCursor && homeCursor();
          toggleCursor(false);
        }
      }, typeSpeed);
    },
    [homeCursor, setHidden, setAnimDone]
  );

  const typeMessage = useCallback(() => {
    clearTypingInterval();
    let index = 0;
    setHidden && setHidden(true);
    intervalRef.current = window.setInterval(() => {
      setText(message.slice(0, index));
      if (index++ >= message.length) {
        clearTypingInterval();
        typeCaption(0);
      }
    }, typeSpeed);
  }, [setHidden, typeCaption]);

  const handleCaptionChange = (newIndex: number, direction: number) => {
    setCaptionIndex(newIndex);
    setDirection(direction);
    typeCaption(newIndex);
  };

  useEffect(() => {
    if (animDone) return;
    const timeout = setTimeout(typeMessage, 1500);
    return () => {
      clearTimeout(timeout);
      setHidden && setHidden(false);
    };
  }, [typeMessage, setHidden, animDone]);

  return (
    <Wrapper>
      <TextContainer>
        Hi
        {text.split('%').map((t, i) => (
          <React.Fragment key={i}>
            {t}
            {(!animDone || showCursor) &&
              (text.length === 0 ||
                t.length !== message.split('%')[i].length) && (
                <Blinker ref={handleCursorRef}>|</Blinker>
              )}
            <br />
          </React.Fragment>
        ))}
      </TextContainer>
      <DescriptionContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: animDone ? 1 : 0 }}
      >
        <NavWrapper>
          <Arrow
            direction="prev"
            onClick={() =>
              handleCaptionChange(
                (captionIndex - 1 + cap.length) % cap.length,
                -1
              )
            }
          />
          <DescriptionText
            key={captionIndex}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            {cap[captionIndex].description}
          </DescriptionText>
          <Arrow
            direction="next"
            onClick={() =>
              handleCaptionChange((captionIndex + 1) % cap.length, 1)
            }
          />
        </NavWrapper>
        <DotContainer>
          {cap.map((_, index) => (
            <Dot
              onClick={() => {
                handleCaptionChange(index, captionIndex > index ? 0 : 1);
              }}
              key={index}
              $active={index === captionIndex}
            />
          ))}
        </DotContainer>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default TypingEffect;
