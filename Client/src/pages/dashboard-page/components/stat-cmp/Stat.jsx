import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Stat({ title = '', stat = 0, Icon }) {
  return (
    <Link to='#' className='box-border bock flex-2'>
      <div className='flex [&>div]:flex-1 items-center pl-[3rem] relative '>
        <div className='absolute left-[0px] bg-accent rounded-3xl w-[5rem] h-[5rem] p-[1.2rem] flex items-center justify-center'>
          <Icon className='[&>path]:stroke-accent-content w-full h-full' />
        </div>
        <div className='bg-base-200 rounded-3xl pr-[3rem] pl-[3rem] h-28 w-full flex flex-col items-center justify-center'>
          <div className='font-bold stat-title text-secundary'>{title}</div>
          <div className='stat-value text-secondary'>
            {stat >= 1000 ? stat + 'K' : stat}
          </div>
        </div>
      </div>
      {/* <div className='relative items-center justify-center hidden w-20 h-20 translate-x-8 md:flex -z-10 bg-accent rounded-3xl'>
        <Icon />
      </div> */}
      {/* <div className='w-52 sm:w-64 h-28 stat place-items-center bg-base-200 rounded-3xl -z-20'>
        
      </div> */}
    </Link>
  );
}

Stat.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.number,
  Icon: PropTypes.node,
};

Stat.defaultProps = {
  children: <h3>Stat</h3>,
};