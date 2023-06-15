import { useEffect, useState } from 'react';
import '../assets/sass/theme-toggle.scss';

export default function ThemeToggle() {
  const userTheme = JSON.parse(localStorage.getItem('darkTheme'));
  const [darkTheme, setDarkTheme] = useState(userTheme);

  useEffect(() => {
    const { body } = document;
    const toggleSlider = document.querySelector('.theme-toggle__slider');
    // const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkTheme === false) {
      body.classList.add('light');
      body.classList.remove('dark');
      toggleSlider.classList.add('toggle-light');
      toggleSlider.classList.remove('toggle-dark');
    }
    if (darkTheme === true) {
      body.classList.add('dark');
      body.classList.remove('light');
      toggleSlider.classList.add('toggle-dark');
      toggleSlider.classList.remove('toggle-light');
    }
  }, [darkTheme]);

  // Toggle theme
  function toggleTheme() {
    setDarkTheme(!darkTheme);
    localStorage.setItem('darkTheme', !darkTheme);
  }

  return (
    <div className='theme-toggle flex-row'>
      <span className='fs-sm fw-700 text-primary-clr'>Dark Mode</span>
      <div className='theme-toggle__container' onClick={toggleTheme}>
      <div className='theme-toggle__slider'></div>
      </div>
    </div>
  );
}
