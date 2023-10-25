import PropTypes from 'prop-types';

export function Grid({ data }) {
  return (
    <section className='flex flex-row flex-wrap justify-center gap-5'>
      {data.map((item, index) => (
        <div
          key={index}
          className=' w-full h-[153px] bg-base-200 rounded-3xl shadow flex flex-row min-[400px]:max-w-[342px]'
        >
          <img
            className=' object-cover rounded-3xl w-[146px] max-w-4xl h-full'
            src={item.imagen}
            alt={item.nombre}
          />
          <div className='flex flex-col justify-between w-full p-4'>
            <div>
              <p className='block mt-1 text-lg font-medium leading-tight text-black'>
                {item.nombre}
              </p>
              <p className='text-sm tracking-wide uppercase text-primary'>
                Category
              </p>
            </div>

            <div className='flex justify-between w-full'>
              <p className='mt-2 text-gray-500'>MARCA</p>
              <p className='mt-2 text-gray-500'>$2000</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
