import PropTypes from 'prop-types';
import './panel-cmp.scss';

export function Panel({ children, title = '' }) {
  return (
    <section className='panel-component card w-auto bg-base-200'>
      <div className='card-body'>
        <h2 className='card-title block text-center text-2xl'>{title}</h2>
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
