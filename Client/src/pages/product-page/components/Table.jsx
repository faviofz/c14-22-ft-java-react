import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon, ViewIcon } from '@/assets/svg';
import { useProducts, useModal } from '@/hooks';
import { TableSkeleton } from '@/components';
import swal from 'sweetalert';
import { UpdateProduct } from './UpdateProduct';
import { ProductDetail } from './ProductDetail';
export function Table({ data }) {
  const { loading, deleteProducts } = useProducts();
  const { openModal } = useModal();
  const headers = [
    'Nombre',
    'Imagen',
    'Categoria',
    'Marcas',
    'Vencimiento',
    'Proveedor',
    'Stock min',
    'Stock actual',
    'Acciones',
  ];

  const deleteProductAlert = id => {
    swal({
      title: 'Desea eliminar el producto',
      icon: 'warning',
      buttons: {
        catch: {
          text: 'Cancelar',
          value: null,
          className: 'btn btn-accent',
        },
        default: {
          text: 'Eliminar',
          value: true,
          className: 'btn btn-primary',
        },
      },
    }).then(valueButtoms => {
      if (valueButtoms) {
        deleteProducts(id);
        swal({
          title: 'El producto fue eliminado',
          icon: 'success',
        });
      }
    });
  };

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
            {data.map(product => (
              <tr
                className={`${product.min > product.actual && 'bg-error'}`}
                key={product.id}
              >
                <td>{product.nombre}</td>
                <td>
                  <div className='w-12 h-12 mask mask-squircle'>
                    <img src={product.imagen} alt='Imagen' />
                  </div>
                </td>
                <td>
                  {!product.categoria ? 'vacio' : product.categoria.nombre}
                </td>
                <td>{!product.marca ? 'vacio' : product.marca.nombre}</td>
                <td>{product.fechaVencimiento}</td>
                <td>
                  {!product.proveedor ? 'vacio' : product.proveedor.nombre}
                </td>
                <td>
                  {product.min}
                </td>
                <td>
                  {product.actual}
                </td>

                <td className='flex gap-2'>
                  <button
                    className='btn btn-circle'
                    onClick={() => deleteProductAlert(product.id)}
                  >
                    <TrashIcon />
                  </button>
                  <button
                    className='btn btn-circle'
                    onClick={() =>
                      openModal(<UpdateProduct product={product} />, {
                        title: 'Editar Producto',
                        className: 'modal-product',
                      })
                    }
                  >
                    <PencilAltIcon />
                  </button>
                  <button
                    className='btn btn-circle'
                    onClick={() =>
                      openModal(<ProductDetail product={product} />, {
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
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
