import { MenuIcon } from '@/assets/svg';

export function OpenMainMenuButton() {
  return (
    <div className='flex'>
      <label
        htmlFor='main-menu'
        className='btn btn-circle drawer-button lg:hidden'
      >
        <MenuIcon />
      </label>
    </div>
  );
}
