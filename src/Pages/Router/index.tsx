import { Route, Routes, BrowserRouter } from 'react-router-dom';

// @ts-ignore
import cv from './cv.pdf';
import Drawer from '../../Components/Drawer';
import About from '../About';
import Xp from '../Xp';
import Technologies from '../Technologies';
import Contact from '../Contact';
import { useState } from 'react';

const Router = () => {
  const techStatus = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Drawer>
              <About />
            </Drawer>
          }
        />
        <Route
          path="xp"
          element={
            <Drawer minified>
              <Xp />
            </Drawer>
          }
        />
        <Route
          path="techno"
          element={
            <Drawer>
              <Technologies techStatus={techStatus} />
            </Drawer>
          }
        />
        <Route
          path="contact"
          element={
            <Drawer>
              <Contact />
            </Drawer>
          }
        />
        <Route
          path="cv"
          element={
            <Drawer minified>
              <iframe title="cv" src={cv} width="100%" height="100%" />
            </Drawer>
          }
        />
        <Route
          path="*"
          element={
            <Drawer>
              <Xp />
            </Drawer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
