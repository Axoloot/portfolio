import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import i18n from '../../translations';

const fr = require('../../Static/cv.pdf');
const eng = require('../../Static/cv-eng.pdf');

const CV = () => {
  const pdfFile = i18n.language === 'fr' ? fr : eng;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/legacy/build/pdf.worker.js">
      <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPlugin()]} />
    </Worker>
  );
};

export default CV;
