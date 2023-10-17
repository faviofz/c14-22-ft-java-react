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
    return(
        <div className='z-10 my-5 ml-5 lg:ml-0 lg:my-0 lg:drawer-open '>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='flex'>
          {/* Page content here */}
          <label
            htmlFor='my-drawer-2'
            className='btn btn-circle drawer-button lg:hidden'
          >
            <img src={BarsSVG} alt='bars' />
          </label>
        </div>
        <div className='z-20 drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>

          <ul className='z-20 min-h-full p-4 menu w-80 bg-base-200 text-base-content'>
            {/* Sidebar content here */}
            <li>
              <div className='flex justify-center w-full mb-10'>
                <Logo />
              </div>
            </li>
            <li>
              <Link to={'/product'} className='text-secondary'>
                <img src={IconProductSVG} alt='icon-product' />
                Productos
              </Link>
            </li>
            <li>
              <Link to={'/stock'} className='text-secondary'>
                <img src={DocumentReportSVG} alt='document-report' />
                Stock
              </Link>
            </li>
            <li>
              <Link to={'/provider'} className='text-secondary'>
                <img src={TruckSVG} alt='truck' />
                Proveedor
              </Link>
              <details open>
                <summary>
                  <img src={RefreshSVG} alt='refresh' />
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
    )
}