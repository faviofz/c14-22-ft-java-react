package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.ProductoDto;
import com.c14g22.stockwise.model.Producto;
import java.util.List;


public interface ProductoService {

  public List<Producto> obtenerProductos();

  public Producto obtenerProductoPorId(Long id);

  public Producto guardarProducto(Producto producto);

  public void actualizarProducto(Long id, ProductoDto productoDto);

  public void eliminarProducto(Long id);
}
