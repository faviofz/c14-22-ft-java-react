package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.ProductoDto;
import com.c14g22.stockwise.model.Producto;

import java.util.List;


public interface ProductoService {

    List<Producto> obtenerProductos();

    Producto obtenerProductoPorId(Long id);

    ProductoDto guardarProducto(ProductoDto productoDto);

    void actualizarProducto(Long id, ProductoDto productoDto);

    void eliminarProducto(Long id);
}
