import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/reducers/index';

export function Card() {
  const dispatch = useDispatch();

  /* Se Guarda los datos en la const */
  const products = useSelector(state => state.products);

  /* Se llama a la funcion Para Traer los Productos */
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className='flex flex-row flex-wrap justify-center gap-5'>
      {products.map((item, index) => (
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

          {/* <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-48 object-cover md:w-[120px]'
                  src={item.imagen}
                  alt={item.nombre}
                />
              </div>
              <div className='p-8'>
                <div className='text-sm font-semibold tracking-wide text-indigo-500 uppercase'>
                  {item.categoria}
                </div>
                <p className='block mt-1 text-lg font-medium leading-tight text-black hover:underline'>
                  {item.nombre}
                </p>
                <p className='mt-2 text-gray-500'>{item.marcas}</p>
              </div>
            </div> */}
        </div>
      ))}
    </section>
  );
}
