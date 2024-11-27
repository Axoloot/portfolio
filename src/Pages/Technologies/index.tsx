import React, { useRef, useState } from 'react';
import { TechContainer, TechWrapper, Tree } from './styles';
import { SkillTreeGroup, SkillProvider, SkillTree } from 'beautiful-skill-tree';

import skills from './skills'; // Place the JSON in a separate file
import { generateTreeNeumorphicJson } from '../../misc';
import { useTheme } from 'styled-components';
import { Dot, DotContainer } from '../About/styles';

interface TechProps {
  techStatus: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Technologies = ({ techStatus }: TechProps) => {
  const theme = useTheme();
  const parentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const scrollChange = (n: number) => {
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
      <TechWrapper ref={parentRef} onScroll={handleScroll}>
        {skills.map((skill, i) => (
          <Tree ref={el => (sectionsRef.current[i] = el!)} key={skill.id}>
            <SkillProvider key={skill.id}>
              <SkillTreeGroup
                theme={{
                  border: '0',
                  nodeBorderColor: 'transparent',
                  nodeHoverBorder: 'transparent',
                  nodeActiveBackgroundColor: theme.primary,
                  ...generateTreeNeumorphicJson(theme.primary, 'inset', 'dome'),
                }}
              >
                {() => (
                  <SkillTree
                    disableHeader={false}
                    collapsible={false}
                    treeId={skill.title}
                    title={skill.title}
                    savedData={{
                      backend: {
                        optional: false,
                        nodeState: 'locked',
                      },
                      languages: {
                        optional: false,
                        nodeState: 'locked',
                      },
                    }}
                    data={[skill]}
                    description={skill.title}
                  />
                )}
              </SkillTreeGroup>
            </SkillProvider>
          </Tree>
        ))}
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
