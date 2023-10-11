
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className='text-black'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </>
  );
}

export default App;
