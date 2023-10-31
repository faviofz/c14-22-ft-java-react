import PropTypes from 'prop-types';

export function ProductDetail({ product }) {
  return (
    <section className='flex flex-col w-full h-full'>
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
          <span className='font-semibold'> {product.fechaVencimiento} </span>
        </h2>
        <h2>Precio: {product.costo} </h2>

        <div className='flex flex-row gap-1 justify-between mt-5'>
          <button className='btn btn-primary flex-1'>Agregar</button>
          <button className='btn btn-primary flex-1'>Actualizar</button>
          <button className='btn btn-error flex-1'>Eliminar</button>
        </div>
      </div>
    </section>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.any,
};