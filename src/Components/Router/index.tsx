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
  const [key, setKey] = useState('');
  const techStatus = useState(false);
  const aboutStatus = useState(false);
  const careerStatus = useState(false);

  const resetAnim = () => {
    techStatus[1](false);
    aboutStatus[1](false);
    setKey(Math.random().toString());
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <CursorProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Drawer reset={resetAnim}>
                <About aboutStatus={aboutStatus} key={key} />
              </Drawer>
            }
          />
          <Route
            path="career"
            element={
              <Drawer reset={resetAnim} minified>
                <Suspense fallback={<Loader />}>
                  <Career careerStatus={careerStatus} />
                </Suspense>
              </Drawer>
            }
          />
          <Route
            path="techno"
            element={
              <Drawer reset={resetAnim}>
                <Suspense fallback={<Loader />}>
                  <Technologies techStatus={techStatus} key={key} />
                </Suspense>
              </Drawer>
            }
          />
          <Route
            path="contact"
            element={
              <Drawer reset={resetAnim}>
                <Suspense fallback={<Loader />}>
                  <Contact />
                </Suspense>
              </Drawer>
            }
          />
          <Route
            path="cv"
            element={
              <Drawer reset={resetAnim}>
                <Suspense fallback={<Loader />}>
                  <CV />
                </Suspense>
              </Drawer>
            }
          />
          <Route
            path="*"
            element={
              <Drawer reset={resetAnim}>
                <Suspense fallback={<Loader />}>
                  <Career careerStatus={careerStatus} />
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
