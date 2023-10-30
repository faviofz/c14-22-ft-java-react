import PropTypes from 'prop-types';

export default function ProductModal({product}) {
  
    return (
    <>
      <dialog id='productModal' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2'>
              ✕
            </button>
          </form>
          <section className='flex flex-col w-full h-full'>
            <div className='w-full h-[20rem] rounded-3xl my-3'>
              <img
                className='object-contain w-full h-full '
                src={product.imagen}
                alt='Imagen'
              />
            </div>
            <div className='flex flex-col w-full h-full gap-3 pt-3 mt-2 border-t-2'>
              <div>
              <h1 className='text-xl font-semibold'>{product.nombre}</h1>
              <h1 className="font-semibold tracking-wide uppercase text-md text-primary">{product.categoria.nombre}</h1>
              </div>
              {/* <h2>Descripcion:</h2> */}
              <h2>Proveedor: <span className='font-semibold'>{product.proveedor.nombre}</span></h2>
              <h2>Marca: <span className='font-semibold'>{product.marca.nombre}</span></h2>
              <h2>Fecha de vencimiento: <span className='font-semibold'>{product.fechaVencimiento}</span></h2>
              {/* <h2>Precio: $3500</h2> */}
              <h2>Almacenado: ???</h2>
              {/* <h2>Tamaños:</h2> */}
              <div className="flex flex-row justify-between mt-5">
                <button className="btn">Agregar</button>
                <button className="btn">Actualizar</button>
                <button className="btn">Eliminar</button>
              </div>
            </div>
          </section>
        </div>
      </dialog>
    </>
  );
}

ProductModal.propTypes = {
    product: PropTypes.any
}
