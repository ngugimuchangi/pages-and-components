import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeContext } from './contexts/themeContext.jsx';
import router from './routes/index.jsx';
import './assets/styles/index.scss';

function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className={`app${theme === 'dark' ? ' dark' : ''}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
