import PropTypes from 'prop-types';
import ProductModal from './ProductModal';

const test = item => {
  document.getElementById('productModal').showModal();
};

export function Grid({ data }) {

  return (
    <section className='flex flex-row flex-wrap justify-center gap-5'>
      {data.map(item => (
        <div
          key={item.id}
          className={`${item.min > item.actual && 'border-4 border-error'} bg-base-200 w-full h-[153px] rounded-3xl shadow flex flex-row min-[400px]:max-w-[342px]`}
          onClick={() => test(item)}
        >
          <img
            className=' object-cover rounded-3xl w-[146px] max-w-4xl h-full'
            src={item.imagen}
            alt={item.nombre}
          />
          <div className='flex flex-col justify-between w-full p-4'>
            <div>
              <p className='block mt-1 text-lg font-medium leading-tight text-secondary'>
                {item.nombre}
              </p>
              <p className='text-sm tracking-wide uppercase text-primary'>
                {item.categoria.nombre}
              </p>
            </div>

            <div className='flex justify-between w-full'>
              <p className='mt-2 text-secondary'>{item.marca.nombre}</p>
              <p className='mt-2 text-secondary'>${item.costo}</p>
            </div>
          </div>
          <ProductModal product={item} />
        </div>
      ))}
    </section>
  );
}
Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
