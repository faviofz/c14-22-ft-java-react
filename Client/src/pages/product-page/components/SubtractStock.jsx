import { useProducts } from '@/hooks';
import { Button, Counter, TableSkeleton } from '@/components';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function SubtractStock({ data, setFiltered }) {
  const { products, loading, subtractStock, getAllProducts } = useProducts();
  const [newStock, setNewStock] = useState({});

  const setStockById = id => value => {
    setNewStock({ ...newStock, [id]: { id, actual: Number(value) } });
  };

  const submitStock = () => {
    const parse = Object.values(newStock);
    const filtered = parse.filter(e => e.actual != 0);

    if (filtered.length === 0) {
      swal({
        title: 'No ha hecho ninguna pedido',
        icon: 'error',
        button: true,
      });
    } else {
      subtractStock(Object.values(newStock));
      setNewStock({});
      setFiltered(products);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const headers = ['Producto', 'Stock minimo', 'Stock actual', 'Egreso'];
  return (
    <>
      {loading ? (
        <TableSkeleton rows={6} headers={headers} />
      ) : (
        <>
          <table className='table mt-3'>
            <thead>
              <tr>
                {headers.map((head, i) => (
                  <th key={i}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.min}</td>
                  <td>{item.actual}</td>
                  <td>
                    <Counter
                      handler={setStockById}
                      currentValue={newStock[item.id]?.actual ?? 0}
                      id={item.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {Object.values(newStock).every(s => s.actual === '0') || (
              <Button
                onClick={submitStock}
                className='mt-2 btn btn-primary btn-block'
              >
                Registrar salida
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
}

SubtractStock.propTypes = {
  data: PropTypes.any,
  setFiltered: PropTypes.func,
};
