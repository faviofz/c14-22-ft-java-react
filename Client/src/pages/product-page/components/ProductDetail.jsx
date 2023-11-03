import PropTypes from 'prop-types';
import { useProducts, useModal } from '@/hooks';
import { UpdateProduct } from './UpdateProduct';
import swal from 'sweetalert';

export function ProductDetail({ product }) {
  const { deleteProducts } = useProducts();
  const { openModal } = useModal();

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
    <section className='flex flex-col w-full h-full lg:flex-row gap-[2rem]'>
      <div className='w-full h-[20rem] rounded-3xl my-3'>
        <img
          className='object-cover w-full h-full '
          src={product.imagen}
          alt='Imagen'
        />
      </div>
      <div className='flex flex-col w-full h-full gap-3 pt-3 mt-2'>
        <div>
          <h1 className='text-[2rem] font-semibold'>{product.nombre}</h1>
          <h1 className='font-semibold tracking-wide uppercase text-md text-primary'>
            {product.categoria.nombre}
          </h1>
        </div>
        <h2>
          Marca:
          <span className='text-lg font-semibold'>
            <span> {product.marca.nombre}</span>
          </span>
        </h2>
        <h2>
          Proveedor:
          <span className='text-lg  font-semibold'>
            <span> {product.proveedor.nombre}</span>
          </span>
        </h2>
        <h2>
          Fecha de vencimiento:
          <span className='text-lg font-semibold'>
            <span> {product.fechaVencimiento}</span>
          </span>
        </h2>
        <h2>
          Costo:
          <span className='text-lg font-semibold'>
            <span> USD {product.costo.toLocaleString()}</span>
          </span>
        </h2>

        <div className='mt-5 text-md font-semibold text-center bg-accent'>
          Stock
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Minimo</th>
              <th>Actual</th>
              <th>Maximo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h2>{product.min}</h2>
              </td>
              <td>
                <h2>{product.actual}</h2>
              </td>
              <td>
                <h2>{product.max}</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='flex flex-row justify-between gap-1 mt-5'>
          <button
            className='flex-1 btn btn-error'
            onClick={() => deleteProductAlert(product.id)}
          >
            Eliminar
          </button>
          <button
            className='flex-1 btn btn-primary'
            onClick={() =>
              openModal(<UpdateProduct product={product} />, {
                className: 'modal-product',
              })
            }
          >
            Actualizar
          </button>
        </div>
      </div>
    </section>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.any,
};
