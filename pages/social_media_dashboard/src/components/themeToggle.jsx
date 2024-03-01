import { useContext } from 'react';
import { ThemeContext, ThemeSetterContext } from '../contexts/themeContext.jsx';
import '../assets/styles/theme-toggle.scss';

export default function ThemeToggle() {
  const theme = useContext(ThemeContext);
  const setTheme = useContext(ThemeSetterContext);

  // Toggle theme
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className='theme-toggle flex-row'>
      <span className='fs-sm fw-700 text-primary-clr'>Dark Mode</span>
      <div className='theme-toggle__container' onClick={toggleTheme}>
      <div className={`theme-toggle__slider ${theme === 'dark' && 'toggle-dark'}`}></div>
      </div>
    </div>
  );
}
