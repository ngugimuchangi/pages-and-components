import ThemeToggle from './themeToggle.jsx';
import '../assets/sass/dashboard-header.scss';

export default function DashboardHeader({ totalFollowers }) {
  return (
    <header>
      <div className="container header-container flex-row">
        <div className='header-text col'>
          <h1 className='header-text__title text-secondary-clr fs-lg fw-700'> Social Media Dashboard</h1>
          <p className='header-text__total-followers text-primary-clr fs-sm fw-700'> Total Followers: {totalFollowers}</p>
        </div>
        <ThemeToggle/>
      </div>
    </header>
  );
}
