package com.c14g22.stockwise.domain.service;

import com.c14g22.stockwise.application.MovimientoDto;
import com.c14g22.stockwise.domain.model.Movimiento;

import java.util.List;

public interface MovimientoService {

    List<Movimiento> obtenerMovimientos();

    Movimiento obtenerMovimientoPorId(Long id);

    MovimientoDto guardarMovimiento(MovimientoDto movimientoDto);

    List<MovimientoDto> guardarTodos(List<MovimientoDto> movimientoDtoList);

    MovimientoDto actualizarMovimiento(Long id, MovimientoDto movimientoDto);

    void eliminarMovimiento(Long id);
}
