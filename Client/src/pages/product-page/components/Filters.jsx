import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCategories, useBrands, useProviders } from '@/hooks';

export function Filters({ filters, setFilters }) {
  const { categories, getAllCategories } = useCategories();
  const { brands, getAllBrands } = useBrands();
  const { providers, getAllProviders } = useProviders();

  const handleFilterChange = e => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  useEffect(() => {
    getAllCategories();
    getAllBrands();
    getAllProviders();
  }, []);

  return (
    <div className='flex flex-col gap-3 p-3 shadow sm:p-0 md:py-3 sm:flex-row bg-base-200 sm:bg-inherit sm:rounded-none rounded-box'>
      <select
        className='w-full h-10 text-sm lg:text-[12px] min-[1150px]:text-base bg-base-200 input input-bordered'
        name='marca'
        value={filters.marca}
        onChange={handleFilterChange}
      >
        <option value='all'>Filtrar por Marca</option>
        {brands.map(brands => (
          <option key={brands.id} value={brands.name}>
            {brands.name}
          </option>
        ))}
      </select>
      <select
        className='w-full h-10 text-sm lg:text-[12px] min-[1150px]:text-base bg-base-200 input input-bordered'
        name='categoria'
        value={filters.categoria}
        onChange={handleFilterChange}
      >
        <option value='all'>Filtrar por Categoria</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <select
        className='w-full h-10 text-sm lg:text-[12px] min-[1150px]:text-base bg-base-200 input input-bordered'
        name='proveedor'
        value={filters.proveedor}
        onChange={handleFilterChange}
      >
        <option value='all'>Filtrar por Proveedor</option>
        {providers.map(providers => (
          <option key={providers.id} value={providers.name}>
            {providers.name}
          </option>
        ))}
      </select>
    </div>
  );
}

Filters.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
};
