import PropType from 'prop-types';

export function Avatar({ username }) {
  const [firstLetter, ...rest] = username;

  return (
    <div className=' avatar'>
      <div className='rounded-full shadow-lg '>
        <div className='w-[50px] h-[50px] bg-accent flex items-center justify-center text-[1.5rem] text-secondary-content font-bold capitalize'>
          {firstLetter}
        </div>
      </div>
    </div>
  );
}
Avatar.propTypes = {
  username: PropType.string,
};
