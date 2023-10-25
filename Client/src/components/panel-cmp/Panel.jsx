import PropTypes from 'prop-types';
import './panel-cmp.scss';

export function Panel({ children, title = '' }) {
  return (
    <section className={`w-auto panel-component card bg-base-200`}>
      <div className='card-body'>
        <h2 className='block text-2xl text-center card-title'>{title}</h2>
        {children}
      </div>
    </section>
  );
}

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Panel.defaultProps = {
  children: <h3>Panel</h3>,
};
