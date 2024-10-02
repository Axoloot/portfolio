import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';

import Drawer from '../../Components/Drawer';
const About = lazy(() => import('../About'));
const Xp = lazy(() => import('../Career'));
const Technologies = lazy(() => import('../Technologies'));
const Contact = lazy(() => import('../Contact'));

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
              <Suspense fallback={<></>}>
                <About aboutStatus={aboutStatus} />
              </Suspense>
            </Drawer>
          }
        />
        <Route
          path="career"
          element={
            <Drawer minified>
              <Suspense fallback={<></>}>
                <Xp />
              </Suspense>
            </Drawer>
          }
        />
        <Route
          path="techno"
          element={
            <Drawer>
              <Suspense fallback={<></>}>
                <Technologies techStatus={techStatus} />
              </Suspense>
            </Drawer>
          }
        />
        <Route
          path="contact"
          element={
            <Drawer>
              <Suspense fallback={<></>}>
                <Contact />
              </Suspense>
            </Drawer>
          }
        />
        <Route
          path="cv"
          element={
            <Drawer minified passProps={false}>
              {/* make a comp to lazy load */}
              <iframe
                title="cv"
                src={require('../../Static/cv.pdf')}
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
              <Suspense fallback={<></>}>
                <Xp />
              </Suspense>
            </Drawer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
