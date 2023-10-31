import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@/assets/svg';
import { useBrands, useModal } from '@/hooks/';
import { TableSkeleton } from '@/components';
import { UpdateBrand } from './UpdateBrand';

export function Table({ data }) {
  const { loading, deleteBrand } = useBrands();
  const { openModal } = useModal();
  const headers = ['Marca', 'Acciones'];
  console.log();
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
            {data.map(brand => (
              <tr key={brand.id}>
                <td>{brand.name}</td>
                <td className='flex gap-5'>
                  <button onClick={() => deleteBrand(brand.id)}>
                    <TrashIcon />
                  </button>
                  <button
                    onClick={() => openModal(<UpdateBrand brand={brand} />)}
                  >
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
  data: PropTypes.arrayOf(PropTypes.shape({})),
};
