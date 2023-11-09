package com.c14g22.stockwise.domain.service;

import com.c14g22.stockwise.application.request.ProveedorRequest;
import com.c14g22.stockwise.application.response.ProveedorResponse;

import java.util.List;

public interface ProveedorService {

    List<ProveedorResponse> obtenerProveedores();

    ProveedorResponse obtenerProveedorPorId(Long id);

    ProveedorResponse obtenerProveedorPorEmail(String email);

    ProveedorResponse guardarProveedor(ProveedorRequest proveedorRequest);

    ProveedorResponse actualizarProveedor(Long id, ProveedorRequest ProveedorRequest);

    void eliminarProveedor(Long id);
}
