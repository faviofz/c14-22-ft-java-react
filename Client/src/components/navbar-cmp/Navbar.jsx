import { Logo } from '@/components';
import {
  IconProductSVG,
  DocumentReportSVG,
  RefreshSVG,
  TruckSVG,
  BellSVG,
  BarsSVG,
} from '@/assets/svg';
import { Avatar } from '@/assets/images';
import { Link } from 'react-router-dom';
import { DarkModeSwitch } from '../darkmode-switch-cmp/DarkModeSwitch';

export default function Navbar() {
  return (
    <nav className='sticky top-0 flex flex-row justify-between bg-base-100 lg:justify-between'>
      <div className='z-10 my-5 ml-5 lg:ml-0 lg:my-0 lg:drawer-open'>
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
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>

          <ul className='min-h-full p-4 menu w-80 bg-base-200 text-base-content'>
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

      <div className='my-5 lg:hidden'>
        <Logo />
      </div>

      <div className='flex flex-row gap-5 my-5 mr-5'>
        <details className='dropdown dropdown-end max-lg:hidden'>
          <summary className='m-1 btn btn-circle'>
            <div className='indicator'>
              <img width={25} height={25} src={BellSVG} alt='bell' />
              <span className='badge badge-xs badge-primary indicator-item'></span>
            </div>
          </summary>
          <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52'>
            <li>
              <h1 className='menu-title'>Notificación</h1>
            </li>
            <li>
              <a>Notificación 1</a>
            </li>
            <li>
              <a>Notificación 2</a>
            </li>
          </ul>
        </details>
        <div className=' dropdown dropdown-end'>
          <label tabIndex={0}>
            <div className=' avatar'>
              <div className='rounded-full shadow-lg '>
                <img  src={Avatar} />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className={`dropdown-content z-[1] menu p-2 m-1 shadow bg-base-200 rounded-box w-64 border-2 border-primary`}
          >
            <li>
              <div className='flex flex-row'>
                <div className='avatar'>
                  <div className='rounded-full '>
                    <img src={Avatar} />
                  </div>
                </div>
                <div>
                  <h1>Luis Angel Salcedo</h1>
                  <h1>Usuario</h1>
                </div>
              </div>
            </li>
            <li className=''>
              <Link className='text-secondary' to={''}>
                <div className='badge badge-primary badge-xs'></div>
                Notificación
              </Link>
            </li>
            <li className='border-t-2'>
              <DarkModeSwitch />
            </li>
            <li className='border-t-2'>
              <Link className='text-secondary' to={''}>
                Configuración
              </Link>
            </li>

            <li className='border-t-2'>
              <Link className='text-secondary' to={''}>
                Ver política de privacidad
              </Link>
            </li>
            <li className='border-t-2'>
              <Link className='text-secondary' to={''}>
                Ver condiciones de servicio
              </Link>
            </li>
            <li className='border-t-2'>
              <Link to={''}>Cerrar sesion</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
