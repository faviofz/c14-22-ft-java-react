import Navbar from '../../components/navbar-cmp/Navbar';
import { /* BellSVG, */ IconProductSVG } from '@/assets/svg';

import { DashboardPanel } from './components';
import { StartsGroup } from './views';
import './dashboard-page.scss';

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

// const {
//   title: notTitle,
//   Icon: notTitle,
//   listItems: notList,
// } = {
//   title: 'Últimos productos registrados',
//   Icon: IconProductSVG,
//   listItems: [
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//     { name: 'produto', category: 'categoria' },
//   ],
// };

export function Dashboard() {
  return (
    <div className='dashboard flex flex-col items-center lg:flex-row lg:items-start'>
      <Navbar />
      <section
        className='
        dashboard-content
        border 
        flex flex-col items-center justify-center gap-5 mx-5 mt-5  
        max-w-[500px]
        lg:max-w-[100%]
        lg:mt-[5rem]
        lg:flex-1 
      '
      >
        <StartsGroup />

        <div className='dashboard-panels'>
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
        </div>
      </section>
    </div>
  );
}
