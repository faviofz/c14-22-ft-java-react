import { useAuth } from '@/hooks/useAuth';
import { Preload } from '@/components';

export function Avatar() {
  const { authState } = useAuth();
  const [firstLetter, ...rest] = authState?.user?.name ?? '???';

  return (
    <div className='min-w-full min-h-full avatar'>
      <div className='min-w-full min-h-full rounded-full shadow-lg'>
        <div className=' min-w-full min-h-full bg-accent flex items-center justify-center text-[1.5rem] text-secondary-content font-bold capitalize'>
          {authState.loading ? <Preload /> : firstLetter}
        </div>
      </div>
    </div>
  );
}
