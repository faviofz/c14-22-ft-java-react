import Navbar from '../../components/navbar-cmp/Navbar';
import { BellSVG, IconProductSVG } from '@/assets/svg';

import { DashboardPanel } from './components';
import { StatsGroup } from './views';
import './dashboard-page.scss';
import { Welcome } from './components/welcome-cmp/Welcome';

const {
  title: prodTitle,
  Icon: ProdTitle,
  listItems: prodList,
} = {
  title: 'Últimos productos registrados',
  Icon: IconProductSVG,
  listItems: [
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
    { name: 'produto', category: 'categoria' },
  ],
};

const {
  title: notTitle,
  Icon: notIcon,
  listItems: notList,
} = {
  title: 'Notificaciones',
  Icon: BellSVG,
  listItems: [
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
    { name: 'notificaion', category: 'ver mas' },
  ],
};

export function Dashboard() {
  return (
    <div className='flex flex-col items-center dashboard lg:flex-row lg:items-stretch '>
      <Navbar />
      <section
        className='
        dashboard-content
        flex flex-col items-center justify-center gap-5 mx-5 mt-5  
        max-w-[500px]
        lg:max-w-[100%]
        lg:mt-[5rem]
        lg:flex-1 
      '
      >
        
        <Welcome fullname={'Luis Angel Salcedo'}/>
        
        <StatsGroup />

        <div className='flex flex-col gap-5 mb-5 dashboard-panels xl:flex-row '>
          <DashboardPanel
            title={prodTitle}
            Icon={ProdTitle}
            listItems={prodList}
          >
            <div className='flex flex-col gap-3 mt-5'>
              <button className='w-full btn btn-outline btn-primary'>
                Ver más productos
              </button>
              <button className='w-full btn btn-primary'>Agregar nuevo</button>
            </div>
          </DashboardPanel>

          <DashboardPanel title={notTitle} Icon={notIcon} listItems={notList}>
            <div className='flex flex-col gap-3 mt-5'>
              <button className='w-full btn btn-outline btn-primary'>
                Ver más notificaciones
              </button>
            </div>
          </DashboardPanel>
        </div>
      </section>
    </div>
  );
}
