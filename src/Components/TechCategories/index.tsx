import React, { useState } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import Tech from '../Tech';
import { Grid, TechCategories, TechCategoriesTitle } from './styles';
import techs from './techs';

interface TechCategoryProps extends HTMLMotionProps<'div'> {
  viewed: boolean;
  color: string;
  name: string;
  title: string;
  hidePane: boolean;
  onClickCb: () => void;
}

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
          const to = active ? 800 : 0;
          props.onClickCb && setTimeout(props.onClickCb, to);
        }}
        active={active}
        {...props}
        animate={
          !active && props.animate
            ? props.animate
            : active
              ? {
                  height: '99vh',
                  width: '100%',
                  zIndex: 10,
                }
              : { height: 420, width: 420 }
        }
      >
        <Grid active={active}>
          {techs
            .filter(t => t.type === props.name)
            .map(e => (
              <Tech active={active} key={e.name} element={e} />
            ))}
        </Grid>
        <TechCategoriesTitle color={props.color}>
          {props.title}
        </TechCategoriesTitle>
      </TechCategories>
    );
  }
);

TechCategory.displayName = 'TechCategory';

export default TechCategory;
