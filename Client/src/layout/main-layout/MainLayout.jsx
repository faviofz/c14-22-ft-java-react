import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Preload, Footer } from '@/components';
import { Navbar } from './components/Navbar';
import { useAuth } from '@/hooks';
import './main-layout.scss';

export function MainLayout() {
  const { authState, getUser } = useAuth();
  const { isLogged } = authState;

  useEffect(() => {
    isLogged && !authState?.user?.name && getUser();
  }, [isLogged]);

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
