import { Outlet } from 'react-router-dom';

import { Preload } from './components';
import { useAuth } from '@/hooks/useAuth';
import './main-layout.scss';
import { Suspense } from 'react';
import { Navbar } from './components/Navbar';

export function MainLayout() {
  const { authState } = useAuth();
  const { isLogged } = authState;

  return (
    <section className={isLogged ? 'main-layout logged' : 'main-layout'}>
      {isLogged && <Navbar />}
      <section className='main-layout-content'>
        <Suspense fallback={<Preload />}>
          <Outlet />
        </Suspense>
      </section>
    </section>
  );
}
