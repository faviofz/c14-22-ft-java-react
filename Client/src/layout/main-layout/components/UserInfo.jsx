import { DarkModeSwitch } from '@/components/darkmode-switch-cmp/DarkModeSwitch';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Avatar } from './Avatar';

export function UserInfo() {
  const { authState, onLogout } = useAuth();

  const handlerLogout = () => {
    onLogout();
    window.location.href = '/';
  };

  return (
    <div className=' dropdown dropdown-end'>
      <label tabIndex={0}>
        <Avatar username={authState?.user?.userName}></Avatar>
      </label>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[30] menu p-2 m-1 shadow bg-base-200 rounded-box w-64 border-2 border-primary`}
      >
        <li>
          <div className='flex flex-row'>
            <Avatar username={authState?.user?.userName}></Avatar>
            <div>
              <h1 className='font-bold text-md text-primary'>
                {authState?.user?.userName}
              </h1>
              <span className='text-xs text-neutral'>Usuario</span>
            </div>
          </div>
        </li>
        <li className=''>
          <Link className='text-secondary' to={'/notification'}>
            <div className='badge badge-primary badge-xs'></div>
            Notificación
          </Link>
        </li>
        <li className='border-t-2'>
          <DarkModeSwitch />
        </li>
        <li
          className='border-t-2'
          onClick={() => document.getElementById('modal_config').showModal()}
        >
          <h3>Configuración</h3>
        </li>

        <li className='border-t-2'>
          <Link className='text-secondary' to={'/service-policy'}>
            Ver condiciones de servicio
          </Link>
        </li>
        <li className='border-t-2'>
          <button onClick={handlerLogout}>Cerrar sesion</button>
        </li>
      </ul>
    </div>
  );
}
