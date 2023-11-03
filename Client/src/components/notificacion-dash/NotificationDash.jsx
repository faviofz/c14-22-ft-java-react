import { useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

export default function NotificationDash() {
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
    <ul className='flex flex-col w-full gap-3 '>
      {filteredNotifications.length > 0 ? (
        filteredNotifications.slice(-7).map((notification, index) => (
          <li key={index}>
            <div className='flex flex-row justify-between border-b-2'>
              <Link to={notification.to}>{notification.title}</Link>
              <Link className='mb-1' to={notification.to}>
                <p>Ver Detalles</p>
              </Link>
            </div>
          </li>
        ))
      ) : (
        <p>No hay notificaciones</p>
      )}
    </ul>
  );
}
