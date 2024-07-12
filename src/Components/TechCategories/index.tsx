import { HTMLMotionProps, motion } from 'framer-motion';
import styled from 'styled-components';
import Tech from '../Tech';
import React, { useState } from 'react';

const TechCategories = styled(motion.div)<{
  color?: string;
  active?: boolean;
  viewed?: boolean;
}>`
  justify-content: inherit;
  flex-direction: ${({ active }) => (active ? 'column' : 'row')};
  ${({ active }) => !active && 'margin: 0.5em;'}
  position: absolute;
  border: solid 0.1em ${({ color }) => color ?? 'green'};
  border-radius: 0.5em 0.5em 0;
  display: flex;
  ${({ viewed }) => viewed && 'cursor: pointer;'}
  position: relative;
  flex-wrap: wrap;
  overflow: hidden;
  width: 20em;
`;

const TechCategoriesTitle = styled.div<{ color?: string }>`
  align-self: end;
  border-radius: 0.3em 0 0;
  background: ${({ color }) => color ?? 'red'};
  position: absolute;
  right: 0;
  bottom: 0;
`;

interface TechCategoryProps extends HTMLMotionProps<'div'> {
  viewed: boolean;
  color: string;
  name: string;
  title: string;
  hidePane: boolean;
  onClickCb: () => void;
}

const techs = {
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
  frontend: ['React', 'Angular', 'Vue.js', 'Svelte'],
  backend: ['Node.js', 'Express.js', 'Django', 'Flask'],
};

const TechCategory = React.forwardRef<HTMLInputElement, TechCategoryProps>(
  (props, ref) => {
    const [active, setActive] = useState(false);
    const itemVariants = {
      hidden: { opacity: props.viewed ? 1 : 0 },
      visible: { opacity: 1 },
    };

    if (props.hidePane) return <></>;
    return (
      <TechCategories
        ref={ref}
        variants={itemVariants}
        onClick={() => {
          if (!props.viewed) return;
          setActive(a => !a);
          props.onClickCb && props.onClickCb();
        }}
        active={active}
        {...props}
        animate={
          !active && props.animate
            ? props.animate
            : active
              ? { height: '99vh', width: '100%' }
              : { height: 320, width: '20em' }
        }
      >
        {techs[props.name as 'devops' | 'backend' | 'frontend'].map(
          techname => (
            <Tech active={active} key={techname} name={techname} />
          )
        )}
        <TechCategoriesTitle color={props.color}>
          {props.title}
        </TechCategoriesTitle>
      </TechCategories>
    );
  }
);

TechCategory.displayName = 'TechCategory';

export default TechCategory;
