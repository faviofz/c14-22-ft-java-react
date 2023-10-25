import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@/assets/svg';


export function Table({ data }) {
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
        {data.map(
          (
            {
              nombre,
              empresa,
              telefono,
              email,
            },
            index
          ) => (
            <tr key={index}>
              <td>{nombre}</td>
              <td>{empresa}</td>
              <td>{telefono}</td>
              <td>{email}</td>
              <td className='flex gap-5'>
                <TrashIcon /> <PencilAltIcon />
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
