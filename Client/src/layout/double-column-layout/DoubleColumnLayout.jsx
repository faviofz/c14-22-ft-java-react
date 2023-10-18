import PropTypes from 'prop-types';
import './double-column-layout.scss';

function LeftColumn({ children }) {
  return <div className='dc-layout-left'>{children}</div>;
}
LeftColumn.propTypes = {
  children: PropTypes.node,
};

function RightColumn({ children }) {
  return <div className='dc-layout-right'>{children}</div>;
}
RightColumn.propTypes = {
  children: PropTypes.node,
};

export function DoubleColumnLayout({ children, double, reverse }) {
  const classNameList = [
    'dc-layout',
    double ? 'dc-layout-double' : '',
    reverse ? 'dc-layout-double-reverse' : '',
  ].join(' ');

  return <div className={classNameList}>{children}</div>;
}
DoubleColumnLayout.propTypes = {
  children: PropTypes.node,
  double: PropTypes.bool,
  reverse: PropTypes.bool,
};

DoubleColumnLayout.Left = LeftColumn;
DoubleColumnLayout.Right = RightColumn;
