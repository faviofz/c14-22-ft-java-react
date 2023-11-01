import PropTypes from 'prop-types';

export function MenuSkeleton({ rows = 5 }) {
  const itemsRows = new Array(rows).fill('');

  return (
    <div className='skeleton flex flex-col gap-2'>
      {itemsRows.map((e, i) => (
        <div className='btn w-full' key={i}></div>
      ))}
    </div>
  );
}
MenuSkeleton.propTypes = {
  rows: PropTypes.number,
};
