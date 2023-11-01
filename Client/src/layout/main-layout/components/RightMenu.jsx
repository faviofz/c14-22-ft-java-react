import { NotificationButton } from './NotificationButton';
import { UserInfo } from './UserInfo';

export function RightMenu() {
  return (
    <div className='flex items-center gap-3 rightmenu-component'>
      <NotificationButton />
      <UserInfo />
    </div>
  );
}
