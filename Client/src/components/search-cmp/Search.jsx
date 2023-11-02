import PropTypes from 'prop-types';
import { SearchInputIcon } from '@/assets/svg';

export function Search({ placeholder, onNewValue }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);
    onNewValue(values.search);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    onNewValue(value);
  };

  return (
    <div className='flex items-center justify-between p-2 border rounded-md search-component border-accent bg-base-200'>
      <form onSubmit={handleSubmit} className='w-full'>
        <input
          className='flex-grow p-1 outline-none text-secondary bg-base-200 text-md'
          placeholder={placeholder}
          type='text'
          name='search'
          onChange={handleChange}
        />
      </form>
      <span>
        <SearchInputIcon className='w-6 h-6 cursor-pointer [&>path]:hover:stroke-primary-focus ' />
      </span>
    </div>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string,
  onNewValue: PropTypes.func,
};
Search.defaultProps = {
  placeholder: 'Buscar...',
};
