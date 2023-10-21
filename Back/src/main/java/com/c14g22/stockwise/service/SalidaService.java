package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.SalidaDto;
import com.c14g22.stockwise.model.Salida;

import java.util.List;

public interface SalidaService {

    List<Salida> obtenerSalidas();

    Salida obtenerSalidaPorId(Long id);

    SalidaDto guardarSalida(SalidaDto salidaDto);

    void actualizarSalida(Long id, SalidaDto salidaDto);

    void eliminarSalida(Long id);
}
