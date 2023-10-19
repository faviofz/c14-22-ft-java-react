package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.ProductoDto;
import com.c14g22.stockwise.dto.ProveedorDto;
import com.c14g22.stockwise.model.Producto;
import com.c14g22.stockwise.model.Proveedor;
import java.util.List;

public interface ProveedorService {

  public List<Proveedor> obtenerProveedores();

  public Proveedor obtenerProveedorPorId(Long id);

  public Proveedor guardarProveedor(Proveedor proveedor);

  public void actualizarProveedor(Long id, ProveedorDto proveedorDto);

  public void eliminarProveedor(Long id);
}
