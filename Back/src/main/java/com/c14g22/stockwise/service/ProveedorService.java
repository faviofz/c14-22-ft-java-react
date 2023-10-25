package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.CategoriaDto;
import com.c14g22.stockwise.dto.ProveedorDto;
import com.c14g22.stockwise.dto.ProveedorRequest;
import com.c14g22.stockwise.dto.ProveedorResponse;
import com.c14g22.stockwise.model.Proveedor;

import java.util.List;

public interface ProveedorService {

    List<Proveedor> obtenerProveedores();

    Proveedor obtenerProveedorPorId(Long id);

    Proveedor obtenerProveedorPorNombre(String nombre);

    ProveedorDto guardarProveedor(ProveedorDto proveedorDto);

    void actualizarProveedor(Long id, ProveedorDto proveedorDto);

    void eliminarProveedor(Long id);
}
