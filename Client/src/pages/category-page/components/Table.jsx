import PropTypes from 'prop-types';
import { useCategories } from '@/hooks/';
import { TrashIcon /* , PencilAltIcon */ } from '@/assets/svg';
import { TableSkeleton } from '@/components';

export function Table({ data }) {
  const { loading, deleteCategory } = useCategories();

  const headers = ['Categoría', 'Acciones'];
  return (
    <>
      {loading ? (
        <TableSkeleton rows={5} headers={headers} />
      ) : (
        <table className='table bg-base-200'>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name }, i) => (
              <tr key={id}>
                <td>
                  {i + 1} - {name}
                </td>
                <td className='flex gap-5'>
                  <button onClick={() => deleteCategory(id)}>
                    <TrashIcon />
                  </button>
                  {/* <button>
                    <PencilAltIcon />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};
