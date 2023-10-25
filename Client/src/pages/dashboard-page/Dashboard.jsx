import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '@/hooks';
import { useProducts } from '../../hooks/useProducts';
import { DashboardPanel, Welcome, Stat } from './components';
import { Container } from '@/components';
import {
  ProductIcon,
  StockIcon,
  ProviderIcon,
  HistoricalIcon,
  BellSVG,
} from '@/assets/svg';
import './dashboard-page.scss';

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
  const { authState } = useAuth();
  const { products, getAllProducts } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='dashboard-page'>
      <Container>
        <Welcome fullname={authState?.user?.userName} />

        <div className='box-border flex flex-col justify-center w-full gap-5 mb-5 starts-group'>
          <Stat
            title='Productos'
            stat={products.length}
            Icon={ProductIcon}
            url={'/product'}
          />
          <Stat title='Stock' stat={1.2} Icon={StockIcon} />
          <Stat
            title='Proveedor'
            stat={5}
            Icon={ProviderIcon}
            url={'/provider'}
          />
          <Stat title='Historial' stat={5.8} Icon={HistoricalIcon} />
        </div>

        <div className='flex flex-col gap-5 mb-5 dashboard-panels md:flex-row '>
          <DashboardPanel
            title={'Últimos productos registrados'}
            Icon={ProductIcon}
            listItems={products.slice(-7)}
            isProduct={true}
          >
            <Link to={'/product'} className='w-full mt-5 btn btn-primary'>
              Ver más productos
            </Link>
          </DashboardPanel>

          <DashboardPanel
            title={notTitle}
            Icon={notIcon}
            listItems={notList.slice(-7)}
            isProduct={false}
          >
            <div className='flex flex-col gap-3 mt-5'>
              <button className='w-full btn btn-primary'>
                Ver más notificaciones
              </button>
            </div>
          </DashboardPanel>
        </div>
      </Container>
    </div>
  );
}
