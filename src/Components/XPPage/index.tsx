import React from 'react';
import { Company, Description, Duration, Section, Year } from './style';
// import Tech from '../Tech';
import { TechCategories } from '../TechCategories/styles';

interface XPSection {
  section: any;
}

const XPPage = React.forwardRef<HTMLDivElement, XPSection>((props, ref) => {
  const { section } = props;

  return (
    <Section ref={ref} $img={section.image}>
      <Year>{section.year}</Year>
      <div style={{ textAlign: 'center' }}>
        <Company>{section.company}</Company>
        <Duration>{section.dates}</Duration>
      </div>
      <Description>{section.desc}</Description>
      <TechCategories
        style={{
          width: '5em',
          height: '5em',
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      ></TechCategories>
    </Section>
  );
});

XPPage.displayName = 'XPPage';

export default XPPage;
