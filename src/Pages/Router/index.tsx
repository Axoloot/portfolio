import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';

const Drawer = lazy(() => import('../../Components/Drawer'));
const About = lazy(() => import('../About'));
const Xp = lazy(() => import('../Career'));
const Technologies = lazy(() => import('../Technologies'));
const Contact = lazy(() => import('../Contact'));

const Router = () => {
  const techStatus = useState(false);
  const aboutStatus = useState(false);

  return (
    <Suspense fallback={<></>}>
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
                <Xp />
              </Drawer>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
