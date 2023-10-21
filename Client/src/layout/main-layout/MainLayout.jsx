import { Outlet } from 'react-router-dom';
import { Logo } from '@/components';
import { RightMenu, MainMenu } from './components';
import { useAuth } from '@/hooks/useAuth';
import './main-layout.scss';

export function MainLayout() {
  const { userState } = useAuth();
  const { isLogged } = userState;
  // console.log(isLogged);
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
        <Outlet />
      </section>
    </section>
  );
}
