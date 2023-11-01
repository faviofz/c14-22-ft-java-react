import { useAuth } from '@/hooks/useAuth';
import { Preload } from '@/components';
import PropTypes from 'prop-types';

export function Avatar({ size }) {
  const { authState } = useAuth();
  const [firstLetter, ...rest] = authState?.user?.name ?? '???';
  return (
    <>
      {authState?.user?.url ? (
        <div className='min-w-full min-h-full avatar'>
          <div className='min-w-full min-h-full rounded-full shadow-lg'>
            <div className={`h-full w-full`}>
              {authState.loading ? (
                <Preload />
              ) : (
                <img
                  className='object-contain w-full h-full rounded-full'
                  src={authState?.user?.url}
                  alt='Nueva imagen de producto'
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='min-w-full min-h-full avatar'>
          <div className='min-w-full min-h-full rounded-full shadow-lg'>
            <div
              className={`${size} min-w-full min-h-full bg-accent flex items-center justify-center text-secondary-content font-bold capitalize`}
            >
              {authState.loading ? <Preload /> : firstLetter}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Avatar.propTypes = {
  size: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'text-[1.5rem]',
};
