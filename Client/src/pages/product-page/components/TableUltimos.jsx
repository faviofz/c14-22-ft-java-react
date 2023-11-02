import PropTypes from 'prop-types';
import { ViewIcon } from '@/assets/svg';
import { useProducts, useModal } from '@/hooks/';
import { TableSkeleton } from '@/components';
import { ProductDetail } from './ProductDetail';
export function TableUltimos({ data }) {
  const { loading } = useProducts();
  const { openModal } = useModal();
  const headers = ['Nombre', 'Imagen', 'Acciones'];

  return (
    <>
      {loading ? (
        <TableSkeleton rows={6} headers={headers} />
      ) : (
        <table className='table bg-base-200 '>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(-7).map(product => (
              <tr key={product.id}>
                <td>{product.nombre}</td>
                <td>
                  <div className='w-12 h-12 mask mask-squircle'>
                    <img src={product.imagen} alt='Imagen' />
                  </div>
                </td>
                <td className='flex gap-5'>
                  <button
                    onClick={() =>
                      openModal(<ProductDetail product={product} />, {
                        title: '',
                        className: 'modal-product',
                      })
                    }
                  >
                    <ViewIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
TableUltimos.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
