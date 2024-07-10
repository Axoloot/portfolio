import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Drawer from '../Components/Drawer';

import About from '../Pages/About';
import Xp from '../Pages/Xp';
import Technologies from '../Pages/Technologies';
import Contact from '../Pages/Contact';

const Router = () => {
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
              <Technologies />
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
              <iframe title="cv" src="./cv.pdf" width="100%" height="100%" />
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
