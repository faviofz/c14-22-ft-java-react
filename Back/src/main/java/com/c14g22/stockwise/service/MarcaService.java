package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.MarcaDto;
import com.c14g22.stockwise.model.Marca;

import java.util.List;

public interface MarcaService {

    List<Marca> obtenerMarcas();

    Marca obtenerMarcaPorId(Long id);

    MarcaDto guardarMarca(MarcaDto marcaDto);

    void actualizarMarca(Long id, MarcaDto marcaDto);

    void eliminarMarca(Long id);
}

