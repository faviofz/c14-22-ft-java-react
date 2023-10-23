import { useEffect } from 'react';
import { useProducts } from '@/hooks';

export function Grid() {
  const { products, getAllProducts } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

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
