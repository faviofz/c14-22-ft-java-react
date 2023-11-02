export function Filters({ onFilterType }) {
  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    onFilterType(selectedType);
  };

  return (
    <div className='flex flex-col gap-3 py-3 shadow sm:flex-row bg-base-200 sm:bg-inherit sm:rounded-none rounded-box'>
      <select
        className='w-full h-10 text-sm lg:text-[12px] min-[1150px]:text-base bg-base-200 input input-bordered'
        onChange={handleTypeChange}
      >
        <option value=''>Filtrar por Tipo</option>
        <option value='ENTRADA'>ENTRADA</option>
        <option value='SALIDA'>SALIDA</option>
      </select>
      
    </div>
  );
}
