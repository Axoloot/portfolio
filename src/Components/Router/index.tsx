import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';

import Drawer from '../Drawer';
import About from '../../Pages/About';
import Loader from '../Loader';
import { CursorProvider } from '../../Contexts/useCursor';

const CV = lazy(() => import('../../Pages/cv'));
const Career = lazy(() => import('../../Pages/Career'));
const Technologies = lazy(() => import('../../Pages/Technologies'));
const Contact = lazy(() => import('../../Pages/Contact'));

const Router = () => {
  const techStatus = useState(false);
  const aboutStatus = useState(false);

  return (
    <CursorProvider>
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
                <Suspense fallback={<Loader />}>
                  <Career />
                </Suspense>
              </Drawer>
            }
          />
          <Route
            path="techno"
            element={
              <Drawer>
                <Suspense fallback={<Loader />}>
                  <Technologies techStatus={techStatus} />
                </Suspense>
              </Drawer>
            }
          />
          <Route
            path="contact"
            element={
              <Drawer>
                <Suspense fallback={<Loader />}>
                  <Contact />
                </Suspense>
              </Drawer>
            }
          />
          <Route
            path="cv"
            element={
              <Drawer minified>
                <Suspense fallback={<Loader />}>
                  <CV />
                </Suspense>
              </Drawer>
            }
          />
          <Route
            path="*"
            element={
              <Drawer>
                <Suspense fallback={<Loader />}>
                  <Career />
                </Suspense>
              </Drawer>
            }
          />
        </Routes>
      </BrowserRouter>
    </CursorProvider>
  );
};

export default Router;
