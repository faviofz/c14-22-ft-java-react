import { SearchInputIcon } from '@/assets/svg';
import React, { useState } from 'react';

export function Search({ onNewValue }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleSearch = () => {
    onNewValue(query);
  };

  return (
    <div>
      <div className='flex items-center justify-between p-2 border rounded-md border-accent bg-base-200'>
        <input
          className='flex-grow p-1 outline-none text-secondary bg-base-200 text-md'
          type='text'
          placeholder='Buscar producto'
          value={query}
          onChange={handleInputChange}
        />
        <span>
          <SearchInputIcon
            className='w-6 h-6 cursor-pointer [&>path]:hover:stroke-primary-focus'
            onClick={handleSearch}
          />
        </span>
      </div>
    </div>
  );
}