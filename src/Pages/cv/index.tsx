import { Viewer, Worker } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

import i18n from '../../translations';

// Create new plugin instance

const fr = require('../../Static/cv.pdf');
const eng = require('../../Static/cv-eng.pdf');

const CV = () => {
  const pdfFile = i18n.language === 'fr' ? fr : eng;
  const defaultFullScreenPlugin = fullScreenPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/legacy/build/pdf.worker.js">
      <Viewer fileUrl={pdfFile} plugins={[defaultFullScreenPlugin]} />
    </Worker>
  );
};

export default CV;
