import { Logo } from '@/components';
import {
  IconProductSVG,
  DocumentReportSVG,
  RefreshSVG,
  TruckSVG,
  BellSVG,
  RowDownSVG,
} from '@/assets/svg';
import { Avatar } from '@/assets/images';
import { Link } from 'react-router-dom';
import { DarkModeSwitch } from '../darkmode-switch-cmp/DarkModeSwitch';
import { useEffect, useState } from 'react';

export default function Navbar() {

  return (
    <nav className='flex flex-row'>
      <div className='min-w-[256px] h-[100vh] bg-base-200 rounded-e-3xl shadow flex flex-col gap-10 pt-10'>
        <div className='flex justify-center w-full'>
          <Logo />
        </div>
        <div>
          <ul className=' menu'>
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
      <div className='flex flex-row items-center justify-end w-full h-20 gap-5 pr-5'>
        <img width={30} height={30} src={BellSVG} alt='bell' />
        <div className='dropdown dropdown-end'>
          <label tabIndex={0}>
            <div className='avatar'>
              <div className='rounded-full '>
                <img src={Avatar} />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 border-2 border-primary`}
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
