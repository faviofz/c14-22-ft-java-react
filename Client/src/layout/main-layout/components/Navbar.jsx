import { MainMenu } from './MainMenu';
import { Logo } from '@/components';
import { RightMenu } from './RightMenu';

export function Navbar() {
  return (
    <section className='main-layout-navbar'>
      <MainMenu />
      <Logo />
      <RightMenu />
    </section>
  );
}
