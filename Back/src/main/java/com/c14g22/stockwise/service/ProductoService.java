package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.ProductoRequest;
import com.c14g22.stockwise.dto.ProductoResponse;
import com.c14g22.stockwise.model.Producto;

import java.util.List;


public interface ProductoService {

    List<ProductoResponse> obtenerProductos();

    ProductoResponse obtenerProductoPorId(Long id);

    ProductoResponse guardarProducto(ProductoRequest productoRequest);

    void actualizarProducto(Long id, ProductoRequest productoRequest);

    void actualizarAtributoActual(Long id, Integer actual);

    void eliminarProducto(Long id);
}
