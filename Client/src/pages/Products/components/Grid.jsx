import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/reducers/index';

export function Grid() {
  const dispatch = useDispatch();

  /* Se Guarda los datos en la const */
  const products = useSelector(state => state.products);

  /* Se llama a la funcion Para Traer los Productos */
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <table className='table bg-base-200 '>
      <thead>
        <tr>
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
            <td>{item.nombre}</td>
            <td>
              <div className='w-12 h-12 mask mask-squircle'>
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
  );
}
