import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);
export const ThemeSetterContext = createContext(null);

/**
 * Provides theme context and theme setter context
 * @param {object} props - component props
 * @returns {React.JSX}
 */
function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  /**
   * Changes theme and saves current theme
   * to local storage
   */
  function changeTheme() {
    setTheme(!theme || theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', !theme || theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={theme ?? 'light'}>
      <ThemeSetterContext.Provider value={changeTheme}>
        {children}
      </ThemeSetterContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
