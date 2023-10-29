import React, { useEffect, useState } from 'react';
import { DataList, Container, Modal, Search, Paginated } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { PlusIcon } from '@/assets/svg';
import { Table, Grid, Filters, FormProduct } from './components';
import { useProducts, usePaginated } from '@/hooks';

export default function Product() {
  const { products, getAllProducts } = useProducts();
  const { setFiltered, displayed, currentPage, totalPages, setCurrentPage } =
    usePaginated({ data: products, numItems: 7 });

  const [filters, setFilters] = useState({
    marca: 'all',
    categoria: 'all',
    proveedor: 'all',
  });

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => {
      const marcaMatch =
        filters.marca === 'all' || product.marca.nombre === filters.marca;
      const categoriaMatch =
        filters.categoria === 'all' ||
        product.categoria.nombre === filters.categoria;
      const proveedorMatch =
        filters.proveedor === 'all' ||
        product.proveedor.nombre === filters.proveedor;
      return marcaMatch && categoriaMatch && proveedorMatch;
    });

    setFiltered(filtered);
  }, [products, filters]);

  const handleSearch = query => {
    const filtered = products.filter(product =>
      product.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filtered);
  };

  return (
    <div className='products-page'>
      <Container>
        <DataList
          title='Productos'
          setViewMode={viewModeType.TABLE}
          table={<Table data={displayed} />}
          grid={<Grid data={displayed} />}
        >
          <DataList.Header>
            <Search placeholder='Buscar producto' onNewValue={handleSearch} />
            <Modal
              title='Nuevo Producto'
              buttonLabel='Nuevo Producto'
              buttonIcon={<PlusIcon width='15' />}
            >
              <FormProduct />
            </Modal>
          </DataList.Header>
          <DataList.Filters>
            <Filters filters={filters} setFilters={setFilters} />
          </DataList.Filters>
        </DataList>
        {totalPages > 1 && (
          <Paginated
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </Container>
      
    </div>
  );
}
