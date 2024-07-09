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
  useEffect(() => {
    const pos = cursorObjRef.current?.getBoundingClientRect();
    if (!pos || !setPos) return;
    setTimeout(
      () => setPos({ x: pos.x + pos.width / 2, y: pos.y + pos.height - 5 }),
      100
    );
  }, [cursorObjRef, setPos]);

  const [text, setText] = useState('');
  const message = 'my name is Cyril. I am a DevOps';

  const animate = useCallback(() => {
    let index = 0;
    setHidden && setHidden(true);
    const interval = setInterval(() => {
      setText(message.slice(0, index));
      if (index++ > message.length) {
        clearInterval(interval);
        setHidden && setHidden(false);
        homeCursor && homeCursor();
        isDone(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [message, setHidden, isDone]);

  useEffect(() => {
    const timeout = setTimeout(animate, 1500);
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <Wrapper>
      <TextContainer ref={cursorObjRef}>
        Hi, {text.slice(0, 18)}
        {text.slice(18) && (
          <>
            <br />
            {text.slice(18)}
          </>
        )}
        {!done && <Cursor>|</Cursor>}
      </TextContainer>
    </Wrapper>
  );
};

export default TypingEffect;
