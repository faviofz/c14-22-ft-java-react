import { Logo } from '@/components';

import { InfoUser } from './info-user-cmp/InfoUser';
import { Notification } from './notification-cmp/Notification';
import Menu from './menu-cmp/Menu';

export default function Navbar() {
  return (
    <nav className='sticky top-0 flex flex-row justify-between bg-base-100 lg:justify-between'>
 
      <Menu />

      <div className='my-5 lg:hidden'>
        <Logo />
      </div>

      <div className='flex flex-row gap-5 my-5 mr-5'>
        <Notification />
        <InfoUser />
      </div>
    </nav>
  );
}
