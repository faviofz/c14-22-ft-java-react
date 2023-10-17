import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Stat({ title = '', stat = 0, icon }) {
  return (
    <Link to='#' className='flex items-center'>
      <div className='relative items-center justify-center hidden w-20 h-20 translate-x-8 md:flex -z-10 bg-accent rounded-3xl'>
        <img width={42} height={42} src={icon} alt='icon product' />
      </div>
      <div className='w-52 sm:w-64 h-28 stat place-items-center bg-base-200 rounded-3xl -z-20'>
        <div className='font-bold stat-title text-secundary'>{title}</div>
        <div className='stat-value text-secondary'>{(stat >= 1000) ? stat+"K" : stat}</div>
      </div>
    </Link>
  );
}

Stat.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.number,
  icon: PropTypes.node,
};

Stat.defaultProps = {
  children: <h3>Stat</h3>,
};
