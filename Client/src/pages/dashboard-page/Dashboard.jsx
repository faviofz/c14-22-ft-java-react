import Navbar from '../../components/navbar-cmp/Navbar';
import {
  IconProductSVG,
  DocumentReportSVG,
  RefreshSVG,
  TruckSVG,
  BellSVG,
} from '@/assets/svg';
import './dashboard-page.scss';
import { Stat } from '../../components/stat-cmp/Stat';
import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div>
      <Navbar />
      <section className='flex flex-row flex-wrap gap-5 m-5'>
        <div className='flex flex-row flex-wrap gap-5'>
          <Stat title='Productos' stat={31} icon={IconProductSVG} />
          <Stat title='Stock' stat={1.2} icon={DocumentReportSVG} />
          <Stat title='Proveedor' stat={5} icon={TruckSVG} />
          <Stat title='Historial' stat={5.8} icon={RefreshSVG} />
        </div>

        <div className='flex flex-col justify-between w-full gap-5 p-5 h-[30rem] bg-base-200 rounded-3xl'>
          <div>
            <div className='flex gap-5'>
              <img
                width={20}
                height={20}
                src={IconProductSVG}
                alt='icon product'
              />
              <h1>Últimos productos registrados</h1>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-5'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-primary checkbox-sm'
                />
                <h1>Producto</h1>
              </div>
              <h1 className='tracking-wide text-primary'>Categoria</h1>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-5'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-primary checkbox-sm'
                />
                <h1>Producto</h1>
              </div>
              <h1 className='tracking-wide text-primary'>Categoria</h1>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-5'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-primary checkbox-sm'
                />
                <h1>Producto</h1>
              </div>
              <h1 className='tracking-wide text-primary'>Categoria</h1>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-5'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-primary checkbox-sm'
                />
                <h1>Producto</h1>
              </div>
              <h1 className='tracking-wide text-primary'>Categoria</h1>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-5'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-primary checkbox-sm'
                />
                <h1>Producto</h1>
              </div>
              <h1 className='tracking-wide text-primary'>Categoria</h1>
            </div>
          </div>

          <div className='flex flex-col gap-3 mt-5'>
            <button className='w-full btn btn-outline btn-primary'>
              Ver más productos
            </button>
            <button className='w-full btn btn-primary'>Agregar nuevo</button>
          </div>
        </div>

        <div className='flex flex-col w-full gap-5 p-5 bg-base-200 rounded-3xl'>
          <div className='flex gap-5'>
            <img width={20} height={20} src={BellSVG} alt='icon product' />
            <h1>Notificaciones</h1>
          </div>

          <div className='flex justify-between'>
            <h1>Notificacion 1</h1>
            <Link to='#' className='tracking-wide text-primary'>
              Ver detalle
            </Link>
          </div>

          <div className='flex justify-between'>
            <h1>Notificacion 1</h1>
            <Link to='#' className='tracking-wide text-primary'>
              Ver detalle
            </Link>
          </div>

          <div className='flex justify-between'>
            <h1>Notificacion 1</h1>
            <Link to='#' className='tracking-wide text-primary'>
              Ver detalle
            </Link>
          </div>

          <div className='flex justify-between'>
            <h1>Notificacion 1</h1>
            <Link to='#' className='tracking-wide text-primary'>
              Ver detalle
            </Link>
          </div>

          <div className='flex justify-between'>
            <h1>Notificacion 1</h1>
            <Link to='#' className='tracking-wide text-primary'>
              Ver detalle
            </Link>
          </div>

          <div className='flex flex-col gap-3 mt-5'>
            <button className='w-full btn btn-outline btn-primary'>
              Ver más notificaciones
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
