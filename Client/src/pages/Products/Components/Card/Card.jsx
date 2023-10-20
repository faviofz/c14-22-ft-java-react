import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../../redux/reducers/index';

export default function Card() {
  const dispatch = useDispatch();

  /* Se Guarda los datos en la const */
  const products = useSelector(state => state.products);

  /* Se llama a la funcion Para Traer los Productos */
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <section className="mt-5 flex flex-wrap gap-3 px-2">
        {products.map((item, index) => (
          <div
            key={index}
            className='w-[336px] h-[153px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'
          >
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-48 ] object-cover md:w-[120px]'
                  src={item.imagen}
                  alt={item.nombre}
                />
              </div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  {item.categoria}
                </div>
                <p className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
                  {item.nombre}
                </p>
                <p className='mt-2 text-gray-500'>{item.marcas}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
