import { Logo } from '@/components';

import { InfoUser } from './info-user-cmp/InfoUser';
import { Notification } from './notification-cmp/Notification';
import Menu from './menu-cmp/Menu';

export default function Navbar() {
  return (
    <nav className='flex flex-row justify-between  bg-base-100 w-full lg:w-[16rem]'>
      <Menu />

      <div className='my-5 lg:hidden'>
        <Logo />
      </div>

      <div className='flex flex-row gap-5 pr-5 my-5 lg:absolute lg:right-0'>
        <Notification />
        <InfoUser />
      </div>
    </nav>
  );
}
