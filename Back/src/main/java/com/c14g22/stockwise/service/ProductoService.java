package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.ProductoRequest;
import com.c14g22.stockwise.dto.ProductoResponse;
import com.c14g22.stockwise.model.Producto;

import java.util.List;


public interface ProductoService {

    List<Producto> obtenerProductos();

    Producto obtenerProductoPorId(Long id);

    ProductoResponse guardarProducto(ProductoRequest productoRequest);

    void actualizarProducto(Long id, ProductoRequest productoRequest) throws Exception;

    void eliminarProducto(Long id);
}
