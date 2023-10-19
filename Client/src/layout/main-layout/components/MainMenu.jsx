import { Logo } from '@/components';
import { MainMenuItem } from './MainMenuItem';
import { OpenMainMenuButton } from './OpenMainMenuButton';

import {
  ProductIcon,
  StockIcon,
  ProviderIcon,
  HistoricalIcon,
} from '@/assets/svg';

const menuItems = [
  {
    label: 'Productos',
    Icon: ProductIcon,
    href: '/product',
  },
  {
    label: 'Stock',
    Icon: StockIcon,
    href: '/stock',
  },
  {
    label: 'Proveedor',
    Icon: ProviderIcon,
    href: '/provider',
  },
  {
    label: 'Historial',
    Icon: HistoricalIcon,
    href: null,
    subMenu: [
      { label: 'Entrada', href: '/history/inside' },
      { label: 'Salida', href: '/history/outside' },
    ],
  },
];

export function MainMenu() {
  return (
    <div className='z-10 lg:ml-0 lg:my-0 lg:drawer-open'>
      <input id='main-menu' type='checkbox' className='drawer-toggle' />
      <OpenMainMenuButton />
      <div className='z-20 drawer-side h-full'>
        <label
          htmlFor='main-menu'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>

        <nav className='z-20 min-h-full pt-5 menu bg-base-200 text-base-content'>
          <div className='p-2 mb-[2rem]'>
            <Logo />
          </div>
          <ul>
            {menuItems.map((item, index) => {
              return <MainMenuItem key={index} {...item} />;
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
