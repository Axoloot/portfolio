import { Route, Routes, BrowserRouter } from 'react-router-dom';

// @ts-ignore
import cv from '../../Static/cv.pdf';
import Drawer from '../../Components/Drawer';
import About from '../About';
import Xp from '../Career';
import Technologies from '../Technologies';
import Contact from '../Contact';
import { useState } from 'react';

const Router = () => {
  const techStatus = useState(false);
  const aboutStatus = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Drawer>
              <About aboutStatus={aboutStatus} />
            </Drawer>
          }
        />
        <Route
          path="career"
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
            <Drawer minified passProps={false}>
              <iframe
                title="cv"
                src={cv}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
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
