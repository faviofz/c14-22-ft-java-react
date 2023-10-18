export default function Filter() {
  return (
    <div>
      <nav className="flex justify-between gap-2">
        <select className=" rounded-md w-full h-[47px] text-slate-600 text-base font-normal font-['Inter'] leading-snug">
          <option value='marca'>Filtrar por Marca</option>
        </select>
        <select className="rounded-md w-full h-[47px] text-slate-600 text-base font-normal font-['Inter'] leading-snug">
          <option value='categoria'>Filtrar por Categoría</option>
        </select>
        <select className="rounded-md w-full h-[47px] text-slate-600 text-base font-normal font-['Inter'] leading-snug">
          <option value='proveedor'>Filtrar por Proveedor</option>
        </select>
        <select className="rounded-md w-full h-[47px] text-slate-600 text-base font-normal font-['Inter'] leading-snug">
          <option value='stock'>Filtrar por Stock</option>
        </select>
      </nav>
    </div>
  );
}
