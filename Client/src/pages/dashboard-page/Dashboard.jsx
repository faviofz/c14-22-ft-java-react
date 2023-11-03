import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container } from '@/components';
import { DashboardPanel, Welcome, Stat } from './components';
import { useProducts, useProviders, useMovements } from '@/hooks';
import { ProductsDashboard } from '@/pages/product-page/components/ProductsDashboard';

import NotificationDash from '../../components/notificacion-dash/NotificationDash';

import {
  ProductIcon,
  ProviderIcon,
  BellSVG,
  IconEntrada,
  IconSalida,
} from '@/assets/svg';
import './dashboard-page.scss';
import { Botoncito } from '../../components/botoncito/botoncito';

export default function Dashboard() {
  const { products, loading: loadingProducts, getAllProducts } = useProducts();

  const {
    providers,
    loading: loadingProviders,
    getAllProviders,
  } = useProviders();

  const {
    movements,
    loading: movementsLoading,
    getAllMovements,
  } = useMovements();

  useEffect(() => {
    getAllProviders();
    getAllProducts();
    getAllMovements();
  }, []);


  return (
    <div className='dashboard-page'>
      <Container>
        <Welcome />
        <Botoncito />
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
            title='Entradas'
            stat={movements.filter(m => m.tipo === 'ENTRADA').length}
            Icon={IconEntrada}
            url={'/history'}
            loading={movementsLoading}
          />
          <Stat
            title='Salidas'
            stat={movements.filter(m => m.tipo === 'SALIDA').length}
            Icon={IconSalida}
            url={'/history'}
            loading={movementsLoading}
          />
        </div>
        <div className='flex flex-col gap-5 mb-5 dashboard-panels md:flex-row '>
          <DashboardPanel
            title={'Últimos productos registrados'}
            Icon={ProductIcon}
            listItems={products.slice(-7)}
            isProduct={true}
          >
            <DashboardPanel.Content>
              <ProductsDashboard />
            </DashboardPanel.Content>
            <DashboardPanel.Footer>
              <Link to={'/product'} className='w-full mt-5 btn btn-primary'>
                Ver más productos
              </Link>
            </DashboardPanel.Footer>
          </DashboardPanel>

          <DashboardPanel
            title={'Notificaciones'}
            Icon={BellSVG}
            isProduct={false}
          >
            <DashboardPanel.Content>
              <NotificationDash />
            </DashboardPanel.Content>

            <DashboardPanel.Footer>
              <div className='flex flex-col gap-3 mt-5'>
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
