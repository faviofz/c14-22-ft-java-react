import { useProducts, useProviders, useModal} from '@/hooks';
import { Input, Button, Select } from '@/components';
import { useState } from 'react';

export function AddProduct() {
  const { products, addStock } = useProducts();
  const { providers } = useProviders();
  const [provider, setProvider] = useState();
  const [stado, setStado] = useState({});
  const { closeModal } = useModal();


  const handleSelect = e => {
    const { value } = e.target;
    setProvider(value);
  };

  const handleChangeInput = e => {
    let value = e.target.value;
    if (value.length <= 4) {
      setAux(value);
    }
  };


  const handleSubmit = () => {
    addStock(Object.values(stado))
    closeModal()
  };

  const handleChange = id => e => {
    setStado({ ...stado, [id]: {id, 'actual': Number(e.target.value)} });
  };

  return (
    <>
      <select
        className='w-full h-10 text-sm lg:text-[12px] min-[1150px]:text-base bg-base-200 input input-bordered'
        name='proveedor'
        onChange={handleSelect}
      >
        <option value=''>Filtrar por Proveedor</option>
        {providers.map(provider => (
          <option key={provider.id} value={provider.name}>
            {provider.name}
          </option>
        ))}
      </select>

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
          {products
            .filter(value => value.proveedor.nombre === provider)
            .filter(value => value.min > value.actual)
            .map(item => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.min}</td>
                <td>{item.actual}</td>
                <td>
                  <form
                    className='flex items-center justify-center gap-5'
                  >

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
        <Button onClick={() => handleSubmit()}>
          Hacer pedido
        </Button>
      </div>
    </>
  );
}
