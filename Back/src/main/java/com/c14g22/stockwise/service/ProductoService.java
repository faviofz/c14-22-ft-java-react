package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.ProductoRequest;
import com.c14g22.stockwise.dto.ProductoResponse;
import com.c14g22.stockwise.dto.StockPatchRequest;

import java.util.List;


public interface ProductoService {

    List<ProductoResponse> obtenerProductos();

    ProductoResponse obtenerProductoPorId(Long id);

    ProductoResponse guardarProducto(ProductoRequest productoRequest);

    ProductoResponse actualizarProducto(Long id, ProductoRequest productoRequest);

    void actualizarProductosRestarActual(List<StockPatchRequest> stockPatchRequest);

    void actualizarProductosSumarActual(List<StockPatchRequest> stockPatchRequest);

    void eliminarProducto(Long id);
}
