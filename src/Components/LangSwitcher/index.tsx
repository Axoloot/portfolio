import React from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcherContainer, StyledOption, StyledSelect } from './style';

interface LangProps {
  cb?: () => void;
}

const LangSwitcher = ({ cb }: LangProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    cb && cb();
  };

  return (
    <LangSwitcherContainer>
      <StyledSelect onChange={changeLanguage} value={i18n.language}>
        <StyledOption value="en">🇬🇧</StyledOption>
        <StyledOption value="fr">🇫🇷</StyledOption>
      </StyledSelect>
    </LangSwitcherContainer>
  );
};

export default LangSwitcher;
