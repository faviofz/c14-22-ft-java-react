import PropType from 'prop-types';

export function Avatar({ username }) {
  const [firstLetter, ...rest] = username;

  return (
    <div className='min-w-full min-h-full avatar'>
      <div className='min-w-full min-h-full rounded-full shadow-lg'>
        <div className=' min-w-full min-h-full bg-accent flex items-center justify-center text-[1.5rem] text-secondary-content font-bold capitalize'>
          {firstLetter}
        </div>
      </div>
    </div>
  );
}
Avatar.propTypes = {
  username: PropType.string,
};
