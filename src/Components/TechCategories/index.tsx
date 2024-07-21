import React, { useEffect, useState } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import Tech from '../Tech';
import { Grid, TechCategories, TechCategoriesTitle } from './styles';
import techs from './techs';
import useWindowDimensions from '../../misc/dimension';

interface TechCategoryProps extends HTMLMotionProps<'div'> {
  viewed: boolean;
  color: string;
  name: string;
  title: string;
  hidePane: boolean;
  onClickCb: () => void;
  parentRef: any;
}

const TechCategory = React.forwardRef<HTMLDivElement, TechCategoryProps>(
  (props, ref) => {
    const { isMobile } = useWindowDimensions();
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const itemVariants = {
      hidden: { opacity: props.viewed ? 1 : 0 },
      visible: { opacity: 1 },
    };

    useEffect(() => {
      if (!props.parentRef.current) return;
      const { height, width } = props.parentRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height - 30);
    }, [props.parentRef]);

    if (props.hidePane) return null;
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
                  height,
                  width,
                  zIndex: 10,
                }
              : { height: 420, width: isMobile ? '100%' : 420 }
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
