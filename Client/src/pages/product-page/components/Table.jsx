import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@/assets/svg';
import { useProducts } from '../../../hooks/useProducts';

// // ! ADAPTER Joose
// const productAdapter = data => ({
//   name: data.nombre,
//   image: data.imagen,
//   category: data.categoria ?? { nombre: 'NULL' },
//   brand: data.marca ?? { nombre: 'NULL' },
//   date: data.fechaVencimiento,
//   provider: data.proveedor ?? { nombre: 'NULL' },
//   tax: data.impuesto,
//   cost: data.costo,
// });

export function Table({ data }) {
  const { deleteProducts } = useProducts();

  return (
    <table className='table bg-base-200 '>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Categoria</th>
          <th>Marcas</th>
          <th>Vencimiento</th>
          <th>Proveedor</th>
          <th>Impuesto</th>
          <th>Costo</th>
          <th>Acciones</th>
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
              <td>{impuesto}</td>
              <td>{costo}</td>
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
  );
}
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
