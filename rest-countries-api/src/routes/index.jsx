import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from '../components/layout/Main.jsx';
import Header from '../components/layout/Header.jsx';
import Home, { loader as homeLoader } from '../pages/Home/Home.jsx';
import Country, { loader as countryLoader } from '../pages/Country/Country.jsx';
import ErrorMessage from '../components/ui/ErrorMessage.jsx';

// Routes definition
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route element={<Main />} >
        <Route path='*' element={<ErrorMessage message={'Page not found'} />} />
        <Route index element={<Home />} loader={homeLoader} />
        <Route path='countries/:alpha' element={<Country />} loader={countryLoader} />
      </Route>
    </Route>,
  ),
);

export default router;
