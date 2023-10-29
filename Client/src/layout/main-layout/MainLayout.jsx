import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Preload, Footer } from '@/components';
import { useAuth } from '@/hooks/useAuth';
import { Navbar } from './components/Navbar';
import './main-layout.scss';

export function MainLayout() {
  const { authState } = useAuth();
  const { isLogged } = authState;

  return (
    <section className={isLogged ? 'main-layout logged' : 'main-layout'}>
      {isLogged && <Navbar />}
      <section className='main-layout-content'>
        <Suspense fallback={<Preload />}>
          <Outlet />
          {isLogged && <Footer />}
        </Suspense>
      </section>
    </section>
  );
}
