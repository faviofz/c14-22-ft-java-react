import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@/assets/svg';
import { useProviders } from '@/hooks';

export function Table({ data }) {
  const { deleteProvider } = useProviders();

  return (
    <table className='table bg-base-200 '>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, nombre, empresa, telefono, email }, index) => (
          <tr key={index}>
            <td>{nombre}</td>
            <td>{empresa}</td>
            <td>{telefono}</td>
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
  );
}
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
