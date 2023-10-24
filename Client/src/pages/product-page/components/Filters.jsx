export function Filters() {
  return (
    <div className='flex gap-3'>
      <select className='w-full h-10 text-sm lg:text-[12px] min-[1150px]:text-base bg-base-200 input input-bordered'>
        <option value='marca'>Filtrar por Marca</option>
      </select>
      <select className='w-full h-10 text-sm lg:text-[12px] min-[1150px]:text-base bg-base-200 input input-bordered'>
        <option value='categoria'>Filtrar por Categoria</option>
      </select>
      <select className='w-full h-10 text-sm lg:text-[12px] min-[1150px]:text-base bg-base-200 input input-bordered'>
        <option value='proveedor'>Filtrar por Proveedor</option>
      </select>
    </div>
  );
}
