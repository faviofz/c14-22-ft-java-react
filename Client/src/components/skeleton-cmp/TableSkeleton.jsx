import PropTypes from 'prop-types';
import { useId } from 'react';
import './skeleton.scss';

export function TableSkeleton({ rows = 5, headers }) {
  const id = useId();
  const itemsRows = new Array(rows).fill('');

  return (
    <table className='skeleton table bg-base-200'>
      {headers && (
        <thead>
          <tr>
            {headers.map((item, index) => (
              <th key={id + index + 'th'}>{item}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {itemsRows.map((item, i) => (
          <tr key={id + i + 'td'}>
            {headers.map((item, index) => (
              <td key={id + index + 'td'}>
                <div className='skeleton-table-item'></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableSkeleton.propTypes = {
  rows: PropTypes.number,
  headers: PropTypes.array,
};
