import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@/assets/svg';
import { useProviders } from '@/hooks';
import { TableSkeleton } from '@/components';

export function Table({ data }) {
  const { loading, deleteProvider } = useProviders();
  const headers = ['Nombre', 'Empresa', 'Telefono', 'Email', 'Acciones'];

  const deleteProviderAlert = id => {
    swal({
      title: 'Desea eliminar el proveedor',
      icon: 'warning',
      buttons: {
        catch: {
          text: 'Cancelar',
          value: null,
          className: 'btn btn-accent',
        },
        default: {
          text: 'Eliminar',
          value: true,
          className: 'btn btn-primary',
        },
      },
    }).then(valueButtoms => {
      if (valueButtoms) {
        deleteProvider(id);
        swal({
          title: 'El proveedor fue eliminado',
          icon: 'success',
        });
      }
    });
  };

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
            {data.map(({ id, nombre, empresa, telefono, email }, index) => (
              <tr key={index}>
                <td>{nombre}</td>
                <td>{empresa}</td>
                <td>{telefono}</td>
                <td>{email}</td>
                <td className='flex gap-5'>
                  <button onClick={() => deleteProviderAlert(id)}>
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
