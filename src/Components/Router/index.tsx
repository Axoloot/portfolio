import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useMemo, useState } from 'react';

import Drawer from '../Drawer';
import About from '../../Pages/About';
import Loader from '../Loader';
import { CursorProvider } from '../../Contexts/useCursor';
import i18next from 'i18next';

const CV = lazy(() => import('../../Pages/cv'));
const Career = lazy(() => import('../../Pages/Career'));
const Schools = lazy(() => import('../../Pages/Schools'));
const Technologies = lazy(() => import('../../Pages/Technologies'));
const Contact = lazy(() => import('../../Pages/Contact'));

const Router = () => {
  return (
    <CursorProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CursorProvider>
  );
};

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const AppRoutes = () => {
  const [key, setKey] = useState('');
  const techStatus = useState(false);
  const aboutStatus = useState(false);
  const careerStatus = useState(false);
  let query = useQuery();

  useEffect(() => {
    const lng = query.get('lng');
    if (!lng) return;
    i18next.changeLanguage(lng);
  }, [query]);

  const resetAnim = () => {
    techStatus[1](false);
    aboutStatus[1](false);
    setKey(Math.random().toString());
    window.scrollTo({
      top: 0,
    });
  };

  return (
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
        path="schools"
        element={
          <Drawer reset={resetAnim} minified>
            <Suspense fallback={<Loader />}>
              <Schools careerStatus={careerStatus} />
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
  );
};

export default Router;
