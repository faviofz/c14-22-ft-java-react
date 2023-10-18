import {
  IconProductSVG,
  DocumentReportSVG,
  RefreshSVG,
  TruckSVG,
  BarsSVG,
} from '@/assets/svg';

import { Link } from 'react-router-dom';
import { Logo } from '@/components';

export default function Menu() {
  return (
    <div className='z-10 my-5 ml-5 lg:ml-0 lg:my-0 lg:drawer-open lg:w-[16rem] '>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='flex'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-2'
          className='btn btn-circle drawer-button lg:hidden'
        >
          <BarsSVG />
        </label>
      </div>
      <div className='z-20 drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>

        <ul className='z-20 min-h-full pt-5 menu bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <li>
            <div className='flex justify-center mb-10'>
              <Logo />
            </div>
          </li>
          <li>
            <Link to={'/product'} className='text-secondary'>
              <IconProductSVG className='[&>path]:stroke-secondary-content' />
              Productos
            </Link>
          </li>
          <li>
            <Link to={'/stock'} className='text-secondary'>
              <DocumentReportSVG className='[&>path]:stroke-secondary-content' />
              Stock
            </Link>
          </li>
          <li>
            <Link to={'/provider'} className='text-secondary'>
              <TruckSVG className='[&>path]:stroke-secondary-content' />
              Proveedor
            </Link>
            <details open>
              <summary>
                <RefreshSVG className='[&>path]:stroke-secondary-content' />
                Historial
              </summary>
              <ul>
                <li>
                  <Link to={'/history/inside'} className='text-secondary'>
                    {/* SVG */}
                    Entrada
                  </Link>
                </li>
                <li>
                  <Link to={'/history/outside'} className='text-secondary'>
                    {/* SVG */}
                    Salida
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
