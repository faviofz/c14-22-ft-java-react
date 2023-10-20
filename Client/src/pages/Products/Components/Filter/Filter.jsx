export function Filter() {
  return (
    <>
      <select className='w-full h-10 bg-base-200 input input-bordered'>
        <option value='marca'>Filtrar por Marca</option>
      </select>
      <select className='w-full h-10 bg-base-200 input input-bordered'>
        <option value='categoria'>Filtrar por Categoria</option>
      </select>
      <select className='w-full h-10 bg-base-200 input input-bordered'>
        <option value='proveedor'>Filtrar por Proveedor</option>
      </select>
      <select className='w-full h-10 bg-base-200 input input-bordered'>
        <option value='stock'>Filtrar por Stock</option>
      </select>
    </>
  );
}
