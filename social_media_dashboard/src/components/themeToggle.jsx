import { useEffect, useState } from 'react';
import '../assets/styles/theme-toggle.scss';

export default function ThemeToggle() {
  const userTheme = JSON.parse(localStorage.getItem('darkTheme'));
  const [darkTheme, setDarkTheme] = useState(userTheme);

  useEffect(() => {
    const page = document.getElementById('page-wrapper');
    const toggleSlider = document.querySelector('.theme-toggle__slider');

    if (darkTheme === false) {
      page.classList.toggle('dark', false);
      toggleSlider.classList.remove('toggle-dark', false);
    }
    if (darkTheme === true) {
      page.classList.toggle('dark', true);
      toggleSlider.classList.toggle('toggle-dark', true);
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
