import PropTypes from 'prop-types';
import { useProducts } from '@/hooks';


export function ProductDetail({ product }) {
  const { deleteProducts } = useProducts();
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
    <section className='flex flex-col w-full h-full lg:flex-row'>
      <div className='w-full h-[20rem] rounded-3xl my-3'>
        <img
          className='object-cover w-full h-full '
          src={product.imagen}
          alt='Imagen'
        />
      </div>
      <div className='flex flex-col w-full h-full gap-3 pt-3 mt-2'>
        <div>
          <h1 className='text-[2rem] font-semibold'> {product.nombre} </h1>
          <h1 className='font-semibold tracking-wide uppercase text-md text-primary'>
            {product.categoria.nombre}
          </h1>
        </div>
        <h2>
          Marca: <span className='font-semibold'> {product.marca.nombre} </span>
        </h2>
        <h2>
          Proveedor:
          <span className='font-semibold'> {product.proveedor.nombre} </span>
        </h2>
        <h2>
          Fecha de vencimiento:
          <span className='text-lg font-semibold'> {product.fechaVencimiento} </span>
        </h2>
        <h2>Costo: <span className='text-lg font-semibold'>{product.costo}</span> </h2>

        <h2 className='mt-5 text-lg font-semibold text-center'>Stock</h2>
        <table className='table ' >
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
                <h2>{product.min} </h2>
              </td>
              <td>
                <h2>{product.actual} </h2>
              </td>
              <td>
                <h2>{product.max} </h2>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='flex flex-row justify-between gap-1 mt-5'>
          <button className='flex-1 btn btn-error' onClick={() => deleteProductAlert(product.id)}>Eliminar</button>
          <button className='flex-1 btn btn-primary'>Actualizar</button>
        </div>
      </div>
    </section>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.any,
};
