import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function MainMenuItem({ label, href, Icon, subMenu }) {
  return (
    <li>
      {!subMenu ? (
        <Link to={href} className='text-secondary'>
          <Icon className='[&>path]:fill-secondary-content' />
          {label}
        </Link>
      ) : (
        <>
          <Link to={href} className='text-secondary'>
            <Icon className='[&>path]:fill-secondary-content' />
            {label}
          </Link>
          <ul>
            {subMenu.map(smenu => (
              <li key={`sm-${smenu.label}`}>
                <Link to={smenu.href} className='text-secondary'>
                  {smenu.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}
MainMenuItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  Icon: PropTypes.func,
  subMenu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
