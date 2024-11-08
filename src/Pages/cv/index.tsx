import i18n from '../../translations';

const fr = require('../../Static/cv.pdf');
const eng = require('../../Static/cv-eng.pdf');

const CV = () => {
  return (
    <iframe
      title="cv"
      src={i18n.language === 'fr' ? fr : eng}
      width="100%"
      height="100%"
      style={{ border: 'none' }}
    />
  );
};

export default CV;
