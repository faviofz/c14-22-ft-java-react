import { SearchInputIcon } from '@/assets/svg';
export function Search() {
  return (
    <div>
      <div className='flex items-center justify-between p-2 border rounded-md border-accent bg-base-200'>
        <input
          className='flex-grow p-1 outline-none text-secondary bg-base-200 text-md'
          type='text'
          placeholder='Buscar producto'
        />
        <span>
          <SearchInputIcon className='w-6 h-6 cursor-pointer [&>path]:hover:stroke-primary-focus ' />
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition-all duration-100 cursor-pointer text-secondary hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-Linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg> */}
        </span>
      </div>
    </div>
  );
}
