import { useEffect } from 'react';
import { useProducts } from '@/hooks';

export default function Grid() {
  const { products, getAllProducts } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

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
