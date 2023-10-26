import PropTypes from 'prop-types';
import { PencilAltIcon } from '@/assets/svg';
import { useProducts } from '@/hooks/';
import { TableSkeleton } from '@/components';
export function TableUltimos({ data }) {
  const { loading } = useProducts();
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
            {data.map(
              ({
                id,
                nombre,
                imagen,
                categoria,
                marca,
                fechaVencimiento,
                proveedor,
              }) => (
                <tr key={id}>
                  <td>{nombre}</td>
                  <td>
                    <div className='w-12 h-12 mask mask-squircle'>
                      <img src={imagen} alt='Imagen' />
                    </div>
                  </td>
                  <td className='flex gap-5'>
                    <button>
                      <PencilAltIcon />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </>
  );
}
TableUltimos.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
