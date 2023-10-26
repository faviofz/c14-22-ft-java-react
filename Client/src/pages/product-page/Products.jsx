import React, { useEffect, useState } from 'react';
import { DataList, Container, Modal, Search } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { PlusIcon } from '@/assets/svg';
import { Table, Grid, Filters, FormProduct } from './components';
import { useProducts } from './../../hooks/useProducts';
import { Paginated } from '../../components/datalist-cmp/components/Paginated';

export default function Product() {
  const { products, getAllProducts } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const [filteredProducts, setFilteredProducts] = useState(products);
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
        filters.proveedor === 'all' || product.proveedor === filters.proveedor;
      return marcaMatch && categoriaMatch && proveedorMatch;
    });

    setFilteredProducts(filtered);
  }, [products, filters]);

  const handleSearch = query => {
    const filtered = products.filter(product =>
      product.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className='category-page'>
      <Container>
        <DataList
          title='Productos'
          setViewMode={viewModeType.TABLE}
          table={<Table data={displayedProducts} />}
          grid={<Grid data={displayedProducts} />}
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
        <Paginated
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
      </Container>
      
    </div>
  );
}
