import { useProducts, useModal,usePaginated } from '@/hooks';
import { Input, Button, Search } from '@/components';
import { useState } from 'react';

export function SubtractStock() {
  const { products, addStock, subtractStock } = useProducts();
  const [stado, setStado] = useState({});
  const { closeModal } = useModal();
  const { setFiltered, displayed } =
    usePaginated({ data: products, numItems: 100 });
  
    const handleSearch = query => {
    const filtered = products.filter(({ nombre }) =>
      nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filtered);
  };

  const handleSubmit = () => {
    subtractStock(Object.values(stado));
    closeModal();
  };

  const handleChange = id => e => {
    setStado({ ...stado, [id]: { id, actual: Number(e.target.value) } });
  };

  return (
    <>
      <Search placeholder='Buscar producto' onNewValue={handleSearch}/>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Stock minimo</th>
            <th>Stock actual</th>
            <th>Pedido</th>
          </tr>
        </thead>
        <tbody>
          {displayed.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.min}</td>
              <td>{item.actual}</td>
              <td>
                <form className='flex items-center justify-center gap-5'>
                  <Input
                    name='cantidad'
                    type='number'
                    min={1}
                    placeholder=''
                    onChange={e => handleChange(item.id)(e)}
                    className='h-[2rem] w-[4.5rem] text-center px-1'
                    //   onChange={handleChangeInput}
                  />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Button onClick={() => handleSubmit()}>Hacer pedido</Button>
      </div>
    </>
  );
}
