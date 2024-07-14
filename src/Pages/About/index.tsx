// TypingEffect.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Cursor, TextContainer, Wrapper } from './styles';
import { DrawerProps } from '../../misc/types';

const TypingEffect: React.FC = ({
  setPos,
  homeCursor,
  setHidden,
}: DrawerProps) => {
  const cursorObjRef = useRef<HTMLInputElement>(null);
  const [done, isDone] = useState(false);
  const [text, setText] = useState('');
  const message = "% Je m'appelle Cyril.% Je suis developpeur web";

  useEffect(() => {
    const pos = cursorObjRef.current?.getBoundingClientRect();
    if (!pos || !setPos) return;
    setPos({ x: pos.x + pos.width / 2, y: pos.y + pos.height - 5 });
  }, [cursorObjRef, setPos]);

  const animate = useCallback(() => {
    let index = 0;
    setHidden && setHidden(true);
    const interval = setInterval(() => {
      const text = message.slice(0, index);
      setText(text);
      if (index++ > message.length) {
        clearInterval(interval);
        setHidden && setHidden(false);
        homeCursor && homeCursor();
        isDone(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [message, setHidden, isDone, homeCursor]);

  useEffect(() => {
    const timeout = setTimeout(animate, 1500);
    return () => {
      clearTimeout(timeout);
      setHidden && setHidden(false);
    };
  }, [animate, setHidden]);

  return (
    <Wrapper>
      <TextContainer>
        Bonjour
        {text.split('%').map((t, i) => (
          <>
            {t}
            {!done && t.length !== message.split('%')[i].length && (
              <Cursor ref={cursorObjRef}>|</Cursor>
            )}
            <br />
          </>
        ))}
      </TextContainer>
    </Wrapper>
  );
};

export default TypingEffect;
