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
    <div>
      {filteredNotifications.length > 0 ? (
        filteredNotifications.map((notification, index) => (
          <div className='ml-5'  key={index}>
            <div className='flex justify-between gap-6 bg-[#EDEDED] mt-1 rounded-lg p-2'>
              <Link to={notification.to}>{notification.title}</Link>
              <Link to={notification.to}><p>Ver Detalles</p></Link>
            </div>
          </div>
        ))
      ) : (
        <p>No hay notificaciones</p>
      )}
    </div>
  );
}
