import { useState } from 'react';
import { ThemeContext, ThemeSetterContext } from './contexts/themeContext.jsx';
import DashboardHeader from './components/dashboardHeader.jsx';
import FollowersSection from './components/followers.jsx';
import OverviewSection from './components/overview.jsx';
import './assets/styles/index.scss';
import data from '../data/data';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const {
    facebook, instagram, twitter, youtube,
  } = data;

  return (
    <ThemeContext.Provider value={theme ?? 'light'}>
    <ThemeSetterContext.Provider value={(newTheme) => setTheme(newTheme)}>
      <div className={`app ${theme === 'dark' && 'dark'}`}>
        <DashboardHeader totalFollowers='23,004'/>
        <main>
          <FollowersSection platforms={[facebook, twitter, instagram, youtube]}/>
          <OverviewSection platforms={[facebook, twitter, instagram, youtube]}/>
        </main>
      </div>
    </ThemeSetterContext.Provider>
    </ThemeContext.Provider>
  );
}
