import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@/assets/svg';
import { useProducts } from '../../../hooks/useProducts';
import { TableSkeleton } from '@/components';
export function Table({ data }) {
  const { loading, deleteProducts } = useProducts();
  const headers = [
    'Nombre',
    'Imagen',
    'Categoria',
    'Marcas',
    'Vencimiento',
    'Proveedor',
    'Acciones',
  ];

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
              (
                {
                  id,
                  nombre,
                  imagen,
                  categoria,
                  marca,
                  fechaVencimiento,
                  proveedor,
                  impuesto,
                  costo,
                },
                index
              ) => (
                <tr key={index}>
                  <td>{nombre}</td>
                  <td>
                    <div className='w-12 h-12 mask mask-squircle'>
                      <img src={imagen} alt='Imagen' />
                    </div>
                  </td>
                  <td>{!categoria ? 'NULL' : categoria.nombre}</td>
                  <td>{!marca ? 'NULL' : marca.nombre}</td>
                  <td>{fechaVencimiento}</td>
                  <td>{!proveedor ? 'NULL' : proveedor.nombre}</td>

                  <td className='flex gap-5'>
                    <button onClick={() => deleteProducts(id)}>
                      <TrashIcon />
                    </button>
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
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
