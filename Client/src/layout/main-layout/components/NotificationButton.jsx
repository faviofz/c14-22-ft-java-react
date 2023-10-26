import { BellSVG } from '@/assets/svg';

import { Link } from 'react-router-dom';


export function NotificationButton() {
  

  return (
    <details className='dropdown dropdown-end max-lg:hidden'>
      <summary className='m-1 btn btn-circle btn-ghost'>
        <div className='indicator'>
          <BellSVG className='[&>path]:stroke-2-content [&>path]:stroke-secondary-content' />
          <span className='badge badge-xs badge-primary indicator-item'></span>
        </div>
      </summary>
      <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-80'>
        <li>
          <h1 className='menu-title'>Notificación</h1>
        </li>
        <li >
          <Link className='text-sm text-secondary' to={'/notification'}>Falta de Stock - Coca Cola 2lt</Link>
        </li>

        <li >
          <Link className='text-sm text-secondary' to={'/notification'}>Vencimiento de producto - Leche entera</Link>
        </li>
      </ul>
    </details>
  );
}
