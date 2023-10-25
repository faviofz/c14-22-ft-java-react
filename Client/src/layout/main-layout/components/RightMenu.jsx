import { NotificationButton } from './NotificationButton';
import { UserInfo } from './UserInfo';
import { ConfigModal } from './ConfigModal';

export function RightMenu() {
  return (
    <div className='flex items-center gap-3 rightmenu-component'>
      <NotificationButton />
      <UserInfo />
      <ConfigModal />
    </div>
  );
}
