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
        </span>
      </div>
    </div>
  );
}
