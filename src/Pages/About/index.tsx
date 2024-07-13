// TypingEffect.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { Wrapper } from './styles';
import { DrawerProps } from '../../misc/types';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const Cursor = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-left: 5px;
  color: black;
  animation: ${blink} 1s infinite;
`;

const TextContainer = styled.div`
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
`;

const TypingEffect: React.FC = ({
  setPos,
  homeCursor,
  setHidden,
}: DrawerProps) => {
  const cursorObjRef = useRef<HTMLInputElement>(null);
  const [done, isDone] = useState(false);
  const [text, setText] = useState('');
  const message = "Bonjour, Je m'appelle Cyril.% Je suis developpeur web %";

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
