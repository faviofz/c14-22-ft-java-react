package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.ProveedorRequest;
import com.c14g22.stockwise.dto.ProveedorResponse;

import java.util.List;

public interface ProveedorService {

    List<ProveedorResponse> obtenerProveedores();

    ProveedorResponse obtenerProveedorPorId(Long id);

    ProveedorResponse obtenerProveedorPorEmail(String email);

    ProveedorResponse guardarProveedor(ProveedorRequest proveedorRequest);

    ProveedorResponse actualizarProveedor(Long id, ProveedorRequest ProveedorRequest);

    void eliminarProveedor(Long id);
}
