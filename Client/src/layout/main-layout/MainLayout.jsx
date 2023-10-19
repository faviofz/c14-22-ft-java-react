import { Outlet } from 'react-router-dom';
import { Logo } from '@/components';
import { RightMenu, MainMenu } from './components';
import './main-layout.scss';

export function MainLayout() {
  return (
    <section className='main-layout'>
      <section className='main-layout-navbar'>
        <MainMenu />
        <Logo />
        <RightMenu />
      </section>
      <section className='main-layout-content'>
        <Outlet />
      </section>
    </section>
  );
}
