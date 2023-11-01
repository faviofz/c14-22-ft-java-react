import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container } from '@/components';
import { DashboardPanel, Welcome, Stat } from './components';
import { useProducts, useProviders } from '@/hooks';
import { TableUltimos } from '../product-page/components/';
import NotificationDash from "../../components/notificacion-dash/NotificationDash"
import {
  ProductIcon,
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
    { name: 'notificación', category: 'ver mas' },
    { name: 'notificación', category: 'ver mas' },
    { name: 'notificación', category: 'ver mas' },
    { name: 'notificación', category: 'ver mas' },
    { name: 'notificación', category: 'ver mas' },
  ],
};

export default function Dashboard() {
  const { products, loading: loadingProducts, getAllProducts } = useProducts();

  const {
    providers,
    loading: loadingProviders,
    getAllProviders,
  } = useProviders();

  useEffect(() => {
    getAllProviders();
    getAllProducts();
  }, []);

  const notify = () => {
    toast.info('Falta de Stock - Coca Cola 2lt', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className='dashboard-page'>
      <Container>
        <Welcome />

        <div className='box-border flex flex-col justify-center w-full gap-5 mb-5 starts-group'>
          <Stat
            title='Productos'
            stat={products.length}
            Icon={ProductIcon}
            url={'/product'}
            loading={loadingProducts}
          />
          <Stat
            title='Proveedor'
            stat={providers.length}
            Icon={ProviderIcon}
            url={'/provider'}
            loading={loadingProviders}
          />
          <Stat
            title='Historial'
            stat={5.8}
            Icon={HistoricalIcon}
            url={'/history'}
          />
          {/* <Stat title='Stock' stat={1.2} Icon={StockIcon} /> */}
        </div>
        <div className='flex flex-col gap-5 mb-5 dashboard-panels md:flex-row '>
          <DashboardPanel
            title={'Últimos productos registrados'}
            Icon={ProductIcon}
            listItems={products.slice(-7)}
            isProduct={true}
          >
            <DashboardPanel.Content>
              <TableUltimos data={products} />
            </DashboardPanel.Content>
            <DashboardPanel.Footer>
              <Link to={'/product'} className='w-full mt-5 btn btn-primary'>
                Ver más productos
              </Link>
            </DashboardPanel.Footer>
          </DashboardPanel>

          <DashboardPanel
            title={notTitle}
            Icon={notIcon}
            listItems={notList.slice(-7)}
            isProduct={false}
          >
            <DashboardPanel.Content>
              <NotificationDash/>
            </DashboardPanel.Content>

            <DashboardPanel.Footer>
              <div className='flex flex-col gap-3 mt-5'>
                <button
                  onClick={() => notify()}
                  className='w-full btn btn-primary btn-outline'
                >
                  Crear Toast
                </button>
                <Link to={'/notification'} className='w-full btn btn-primary'>
                  Ver más notificaciones
                </Link>
              </div>
            </DashboardPanel.Footer>
          </DashboardPanel>
        </div>
      </Container>
    </div>
  );
}
