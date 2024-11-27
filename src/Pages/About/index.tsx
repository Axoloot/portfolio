import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
import { useCursor } from '../../Contexts/useCursor';
import Arrow from '../../Components/Arrow';

const typeSpeed = 80;
const finalScale = 1.5;
const captionTiming = 6;

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
  const { t } = useTranslation();

  const pre = `,% ${t('about.name')} `;
  const name = 'Cyril';
  const post = `.%% ${t('about.iam')} `;

  const cap = useMemo(
    () => [
      {
        title: t('about.se.title'),
        description: t('about.se.desc'),
      },
      {
        title: t('about.devops.title'),
        description: t('about.devops.desc'),
      },
      {
        title: t('about.fs.title'),
        description: t('about.fs.desc'),
      },
      {
        title: t('about.ie.title'),
        description: t('about.ie.desc'),
      },
    ],
    [t]
  );

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
    [setAnimDone, cap]
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
  }, [resizeAnim, setHidden, pre]);

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
  }, [
    setAnimDone,
    typeCaption,
    homeCursor,
    setCursorImg,
    cursors.cursor,
    post,
  ]);

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
  }, [animDone, handleCaptionChange, captionIndex, cap.length]);

  return (
    <Wrapper>
      <TextContainer>
        {t('about.hi')}
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
        {<Blinker ref={handleCursorRef}>|</Blinker>}
      </TextContainer>
      <DescriptionContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: animDone ? 1 : 0 }}
      >
        <NavWrapper>
          <Arrow
            disabled={captionTyping}
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
            disabled={captionTyping}
            direction="next"
            onClick={() =>
              handleCaptionChange((captionIndex + 1) % cap.length, 1)
            }
          />
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
