import { Outlet } from 'react-router-dom';
import Container from './Container.jsx';

function Main() {
  return (
    <main className='main'>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}

export default Main;
