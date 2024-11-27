import core, { Plugin } from '@react-pdf-viewer/core';
import layout from '@react-pdf-viewer/default-layout';

import './index1.css';
import './index.css';
import i18n from '../../translations';
const fr = require('../../Static/cv.pdf');
const eng = require('../../Static/cv-eng.pdf');

const CV = () => {
  const pdfFile = i18n.language === 'fr' ? fr : eng;

  return (
    <core.Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/legacy/build/pdf.worker.js">
      <core.Viewer
        fileUrl={pdfFile}
        plugins={[layout.defaultLayoutPlugin() as Plugin]}
      />
    </core.Worker>
  );
};

export default CV;
