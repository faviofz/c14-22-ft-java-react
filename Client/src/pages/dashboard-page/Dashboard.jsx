import { ProductIcon, BellSVG } from '@/assets/svg';
import { Container } from '@/components';
import { Welcome, StatsGroup, DashboardPanel } from './components';
import './dashboard-page.scss';

const {
  title: prodTitle,
  Icon: ProdTitle,
  listItems: prodList,
} = {
  title: 'Últimos productos registrados',
  Icon: ProductIcon,
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

export default function Dashboard() {
  return (
    <div className='dashboard-page'>
      <Container>
        <Welcome fullname='Luis Angel Salcedo' />
        <StatsGroup />
        <div className='flex flex-col gap-5 mb-5 dashboard-panels md:flex-row '>
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
      </Container>
    </div>
  );
}
