package com.c14g22.stockwise.domain.service;

import com.c14g22.stockwise.application.request.MarcaRequest;
import com.c14g22.stockwise.application.response.MarcaResponse;
import com.c14g22.stockwise.domain.model.Marca;

import java.util.List;

public interface MarcaService {

    List<Marca> obtenerMarcas();

    Marca obtenerMarcaPorId(Long id);

    Marca obtenerMarcaPorNombre(String nombre);

    MarcaResponse guardarMarca(MarcaRequest marcaRequest);

    MarcaResponse actualizarMarca(Long id, MarcaRequest marcaRequest);

    void eliminarMarca(Long id);
}

