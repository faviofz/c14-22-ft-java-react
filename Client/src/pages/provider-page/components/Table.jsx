import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@/assets/svg';
import { useProviders } from '@/hooks';
import { TableSkeleton } from '@/components';

export function Table({ data }) {
  const { loading, deleteProvider } = useProviders();
  const headers = ['Nombre', 'Empresa', 'Telefono', 'Email', 'Acciones'];

  return (
    <>
      {loading ? (
        <TableSkeleton rows={5} headers={headers} />
      ) : (
        <table className='table bg-base-200 '>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, company, phone, email }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{company}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td className='flex gap-5'>
                  <button onClick={() => deleteProvider(id)}>
                    <TrashIcon />
                  </button>
                  <button>
                    <PencilAltIcon />
                  </button>
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
  data: PropTypes.arrayOf(PropTypes.any),
};
