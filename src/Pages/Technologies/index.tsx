import React, { useRef, useState } from 'react';
import { TechContainer, TechWrapper, Tree } from './styles';
import { SkillTreeGroup, SkillProvider, SkillTree } from 'beautiful-skill-tree';

import { skills, savedSkills } from './skills'; // Place the JSON in a separate file
import { generateTreeNeumorphicJson } from '../../misc';
import { useTheme } from 'styled-components';
import { Dot, DotContainer } from '../About/styles';
import useWindowDimensions from '../../misc/dimension';

interface TechProps {
  techStatus: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Renderer = ({ sectionsRef, activeIndex }: any) => {
  const { isMobile } = useWindowDimensions();
  const theme = useTheme();
  const i = activeIndex;

  const treeTheme = {
    border: '0',
    nodeBorderColor: 'transparent',
    nodeHoverBorder: 'transparent',
    nodeActiveBackgroundColor: theme.primary,
    nodeIconWidth: isMobile ? '32px' : '64px',
    nodeMobileTextNodeHeight: '1.5rem',
    nodeMobileTextNodeWidth: '4.5rem',
    nodeMobileFontSize: '0.8rem',
    nodeDesktopTextNodeHeight: '28px',
    nodeDesktopTextNodeWidth: '144px',
    nodeDesktopFontSize: '16px',
    ...generateTreeNeumorphicJson(theme.primary, 'inset', 'dome'),
  };

  if (isMobile)
    return (
      <Tree>
        <SkillProvider>
          <SkillTreeGroup theme={treeTheme}>
            {() => (
              <SkillTree
                disableHeader={false}
                collapsible={false}
                treeId=""
                title=""
                savedData={savedSkills[i]}
                data={skills[i]}
                description=""
              />
            )}
          </SkillTreeGroup>
        </SkillProvider>
      </Tree>
    );

  return (
    <>
      {skills.map((skill, i) => (
        <Tree ref={el => (sectionsRef.current[i] = el!)} key={skill[0].id}>
          <SkillProvider key={skill[0].id}>
            <SkillTreeGroup theme={treeTheme}>
              {() => (
                <SkillTree
                  disableHeader={false}
                  collapsible={false}
                  treeId=""
                  title=""
                  savedData={savedSkills[i]}
                  data={skill}
                  description=""
                />
              )}
            </SkillTreeGroup>
          </SkillProvider>
        </Tree>
      ))}
    </>
  );
};

const Technologies = ({ techStatus }: TechProps) => {
  const { isMobile } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const scrollChange = (n: number) => {
    if (isMobile) {
      setActiveIndex(n);
      return;
    }
    sectionsRef.current[n].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const handleScroll = () => {
    let closestIndex = -1;
    let closestDistance = Number.MAX_VALUE;

    sectionsRef.current.forEach((section, i) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.left);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
    });

    if (closestIndex !== -1) setActiveIndex(closestIndex);
  };

  return (
    <TechContainer>
      <TechWrapper onScroll={handleScroll}>
        <Renderer sectionsRef={sectionsRef} activeIndex={activeIndex} />
      </TechWrapper>
      <DotContainer>
        {skills.map((_, index) => (
          <Dot
            onClick={() => scrollChange(index)}
            key={index}
            $active={index === activeIndex}
          />
        ))}
      </DotContainer>
    </TechContainer>
  );
};

export default Technologies;
