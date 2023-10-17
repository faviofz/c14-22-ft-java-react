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
import DetailModal from '../../components/detail-modal-cmp/DetailModal';

export function Dashboard() {
  return (
    <div>
      <Navbar />
      <section className='flex flex-col items-center justify-center gap-5 mx-5 mt-5'>
        <div className='flex flex-row flex-wrap items-center justify-center gap-5'>
          <Stat title='Productos' stat={31} icon={IconProductSVG} />
          <Stat title='Stock' stat={1.2} icon={DocumentReportSVG} />
          <Stat title='Proveedor' stat={5} icon={TruckSVG} />
          <Stat title='Historial' stat={5.8} icon={RefreshSVG} />
        </div>

        <DetailModal />

        <div className='flex flex-col w-[27rem] sm:w-[33rem] md:w-[45rem] h-[30rem] gap-5 p-5 bg-base-200 justify-between rounded-3xl'>
          <div className='flex gap-5'>
            <img width={20} height={20} src={BellSVG} alt='icon product' />
            <h1>Notificaciones</h1>
          </div>

          <div className='flex flex-col gap-3 overflow-y-auto'>
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
