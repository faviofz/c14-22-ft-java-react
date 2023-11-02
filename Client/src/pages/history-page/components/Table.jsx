import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@/assets/svg';

export function Table({ data }) {
  return (
    <table className='table bg-base-200 '>
      <thead>
        <tr>
          <th>Descripcion</th>
          <th>Cantidad</th>
          <th>Tipo</th>
          <th>Fecha del asiento</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ cantidad, descripcion, fecha_asiento, tipo }, index) => (
          <tr key={index}>
            <td>{descripcion}</td>
            <td>{cantidad}</td>
            <td>
              <p
                className={`w-24 py-3 text-xs text-center badge ${
                  tipo === 'ENTRADA' ? 'badge-success' : 'badge-error'
                }`}
              >
                {tipo}
              </p>
            </td>
            <td>{fecha_asiento}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};
