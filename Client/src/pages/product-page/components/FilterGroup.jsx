import { Filter } from './';

export function FilterGroup() {
  return (
    <details className='dropdown'>
      <summary className='w-full md:w-80 sm:btn-wide btn btn-accent'>
        Filter
      </summary>
      <ul className='w-full menu dropdown-content bg-base-200 rounded-box z-[1] shadow p-2 flex flex-col gap-3'>
        <Filter />
      </ul>
    </details>
  );
}
