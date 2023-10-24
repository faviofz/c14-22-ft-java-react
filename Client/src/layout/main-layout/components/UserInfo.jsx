import { Avatar } from '@/assets/images';
import { DarkModeSwitch } from '@/components/darkmode-switch-cmp/DarkModeSwitch';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function UserInfo() {
  const { userState, onLogout } = useAuth();

  const handlerLogout = () => {
    onLogout();
    window.location.href = '/';
  };

  return (
    <div className=' dropdown dropdown-end'>
      <label tabIndex={0}>
        <div className=' avatar'>
          <div className='rounded-full shadow-lg '>
            <img src={Avatar} />
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[30] menu p-2 m-1 shadow bg-base-200 rounded-box w-64 border-2 border-primary`}
      >
        <li>
          <div className='flex flex-row'>
            <div className='avatar'>
              <div className='rounded-full '>
                <img src={Avatar} />
              </div>
            </div>
            <div>
              <h1>{userState?.user.userName}</h1>
              <h1>Usuario</h1>
            </div>
          </div>
        </li>
        <li className=''>
          <Link className='text-secondary' to={''}>
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
