import { Outlet } from 'react-router-dom';
import { Logo } from '@/components';
import { RightMenu, MainMenu, Preload } from './components';
import { useAuth } from '@/hooks/useAuth';
import './main-layout.scss';
import { Suspense } from 'react';

export function MainLayout() {
  const { userState } = useAuth();
  const { isLogged } = userState;

  return (
    <section className={isLogged ? 'main-layout logged' : 'main-layout'}>
      {isLogged && (
        <section className='main-layout-navbar'>
          <MainMenu />
          <Logo />
          <RightMenu />
        </section>
      )}
      <section className='main-layout-content'>
        <Suspense fallback={<Preload />}>
          <Outlet />
        </Suspense>
      </section>
    </section>
  );
}
