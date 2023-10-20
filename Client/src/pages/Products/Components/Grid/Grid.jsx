import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../../redux/reducers/index';

export default function Grid() {
  const dispatch = useDispatch();

  /* Se Guarda los datos en la const */
  const products = useSelector(state => state.products);

  /* Se llama a la funcion Para Traer los Productos */
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className='bg-white mt-10'>
        <table className='table'>
          <thead>
            <tr>
              <th className='hidden md:block'>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Marcas</th>
              <th>Vencimiento</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td className='hidden md:block'>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </td>
                <td>{item.nombre}</td>
                <td>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img src={item.imagen} alt='Imagen' />
                  </div>
                </td>
                <td>{item.categoria}</td>
                <td>{item.marcas}</td>
                <td>{item.fechaVencimiento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
