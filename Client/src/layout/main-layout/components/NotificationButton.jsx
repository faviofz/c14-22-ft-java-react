import React, { useEffect } from 'react';
import { BellSVG } from '@/assets/svg';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../hooks/useProducts';
import { toast } from 'react-toastify';

export function NotificationButton() {
  const { products, getAllProducts } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);


  const filteredNotifications = products
    .filter(product => product.min > product.actual)
    .map(product => ({
      title: `Falta de Stock - ${product.nombre}`,
      to: `/notification`,
    }));

  return (
    <details className='dropdown dropdown-end max-lg:hidden'>
      <summary className='m-1 btn btn-circle btn-ghost [&>div>svg>path]:hover:fill-accent-content hover:bg-base-200'>
        <div className='indicator'>
          <BellSVG className='[&>path]:fill-secondary-content' />
          <span className='w-full h-full badge badge-xs badge-primary indicator-item'>
            {filteredNotifications.length}
          </span>
        </div>
      </summary>
      <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-80'>
        <li>
          <h1 className='menu-title'>Notificaciones</h1>
        </li>
        {filteredNotifications.slice(-5).map((notification, index) => {
          return(
            <li key={index}>
              <Link className='text-sm text-secondary' to={notification.to}>
                {notification.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
