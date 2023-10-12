import PropTypes from 'prop-types';
import './panel.scss';

export function Panel({ children, title = '' }) {
  return (
    <section className='panel-component card w-auto bg-neutral'>
      <div className='card-body'>
        <h2 className='card-title block text-center'>{title}</h2>
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
