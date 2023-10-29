import PropTypes from 'prop-types';
import { TrashIcon /* , PencilAltIcon */ } from '@/assets/svg';
import { useBrands } from '@/hooks/';
import { TableSkeleton } from '@/components';

export function Table({ data }) {
  const { loading, deleteBrand } = useBrands();
  const headers = ['Marca', 'Acciones'];

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
                <td>{name}</td>
                <td className='flex gap-5'>
                  <button onClick={() => deleteBrand(id)}>
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
