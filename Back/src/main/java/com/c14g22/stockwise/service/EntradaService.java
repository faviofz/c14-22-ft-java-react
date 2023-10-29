package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.EntradaDto;
import com.c14g22.stockwise.model.Entrada;

import java.util.List;

public interface EntradaService {

    List<Entrada> obtenerEntradas();

    Entrada obtenerEntradaPorId(Long id);

    EntradaDto guardarEntrada(EntradaDto entradaDto);

    void actualizarEntrada(Long id, EntradaDto entradaDto);

    void eliminarEntrada(Long id);
}
