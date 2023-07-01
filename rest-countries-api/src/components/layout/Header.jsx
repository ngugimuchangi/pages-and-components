import { Link, Outlet } from 'react-router-dom';
import Container from './Container.jsx';
import ThemeToggle from '../ui/ThemeToggle.jsx';

function Header() {
  return (
    <>
      <header className='header text-body'>
        <Container>
          <div className='flex flex-row justify-space-between align-center'>
            <Link>
              <h1 className='header__title text-body fs-lg fw-900'>Where in the world?</h1>
            </Link>
            <ThemeToggle />
          </div>
        </Container>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
