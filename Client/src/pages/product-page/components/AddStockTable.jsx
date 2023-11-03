import PropTypes from 'prop-types';
import { useState } from 'react';
import { useProducts } from '@/hooks/';
import { TableSkeleton, Counter } from '@/components';

export function AddStockTable({ data, handleShow, setProductsNoStock }) {
  const { loading, addStock } = useProducts();
  const [newStock, setNewStock] = useState({});

  const headers = ['Nombre', 'Min', 'Actual', 'Agregar'];

  const setStockById = id => value => {
    setNewStock({ ...newStock, [id]: { id, actual: Number(value) } });
  };

  

  const submitStock = () => {
    const parse = Object.values(newStock)
    const filtered = parse.filter(e => e.actual != 0);
    if(filtered.length === 0){
      swal({
        title: 'No ha hecho ninguna pedido',
            icon: 'error',
        button: true,
      });
    } else {
      addStock(Object.values(newStock));
      handleShow(true);
      setProductsNoStock([]);
    }
    
  };

  return (
    <>
      {loading ? (
        <TableSkeleton rows={6} headers={headers} />
      ) : (
        <div className='pb-2 overflow-auto'>
          <table className='table bg-base-200 '>
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(product => (
                <tr key={product.id}>
                  <td>{product.nombre}</td>
                  <td>{product.min}</td>
                  <td>{product.actual}</td>
                  <td className='flex'>
                    <Counter
                      handler={setStockById}
                      currentValue={newStock[product.id]?.actual ?? 0}
                      id={product.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {Object.values(newStock).every(s => s.actual === '0') || (
            <button
              onClick={submitStock}
              className='mt-2 btn btn-primary btn-block'
            >
              Registrar entrada
            </button>
          )}
        </div>
      )}
    </>
  );
}
AddStockTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  handleShow: PropTypes.func,
  setProductsNoStock: PropTypes.func,
};
