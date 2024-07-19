import React from 'react';
import { Company, Description, Duration, Section, Year } from './style';

interface XPSection {
  section: any;
}

const XPPage = React.forwardRef<HTMLDivElement, XPSection>((props, ref) => {
  const { section } = props;

  return (
    <Section ref={ref} img={section.image}>
      <Year>{section.year}</Year>
      <div style={{ textAlign: 'center' }}>
        <Company>{section.company}</Company>
        <Duration>{section.dates}</Duration>
      </div>
      <Description>{section.desc}</Description>
    </Section>
  );
});

XPPage.displayName = 'XPPage';

export default XPPage;
