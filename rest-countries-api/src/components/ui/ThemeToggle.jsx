import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext, ThemeSetterContext } from '../../contexts/themeContext.jsx';

function ThemeToggle() {
  const theme = useContext(ThemeContext);
  const changeTheme = useContext(ThemeSetterContext);

  return (
    <div className='theme-toggle' onClick={() => changeTheme()}>
      <FontAwesomeIcon
        className='text-input theme-toggle__icon'
        icon={theme === 'light' ? faMoonRegular : faMoonSolid}
        size='lg'
      />
      Dark Mode
    </div>
  );
}

export default ThemeToggle;
