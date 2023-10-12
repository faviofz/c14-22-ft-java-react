import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export function Login() {
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
          <li>
            <Link to='/forgot-password'>¿Olvidaste tu Contraseña?</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
      ;
    </>
  );
}
