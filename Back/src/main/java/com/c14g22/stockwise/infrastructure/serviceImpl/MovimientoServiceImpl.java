package com.c14g22.stockwise.infrastructure.serviceImpl;

import com.c14g22.stockwise.application.MovimientoDto;
import com.c14g22.stockwise.domain.model.Movimiento;
import com.c14g22.stockwise.domain.repository.MovimientoRepository;
import com.c14g22.stockwise.domain.service.MovimientoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovimientoServiceImpl implements MovimientoService {

  @Autowired
  private MovimientoRepository movimientoRepository;

  @Override
  public List<Movimiento> obtenerMovimientos() {
    return movimientoRepository.findAll();
  }

  @Override
  public Movimiento obtenerMovimientoPorId(Long id) {
    return movimientoRepository.findById(id).orElseThrow(null);
  }

  @Override
  public MovimientoDto guardarMovimiento(MovimientoDto movimientoDto) {
    Movimiento movimiento = new Movimiento(movimientoDto);
    return new MovimientoDto(movimientoRepository.save(movimiento));
  }

  @Override
  public List<MovimientoDto> guardarTodos(List<MovimientoDto> movimientoDtoList) {
    List<Movimiento> movimientos = movimientoDtoList.stream().map(Movimiento::new).toList();
    return this.movimientoRepository.saveAll(movimientos).stream().map(MovimientoDto::new).toList();
  }

  @Override
  public MovimientoDto actualizarMovimiento(Long id, MovimientoDto movimientoDto) {
    Movimiento movimiento = new Movimiento(movimientoDto);
    return new MovimientoDto(movimientoRepository.save(movimiento));
  }

  @Override
  public void eliminarMovimiento(Long id) {
    movimientoRepository.deleteById(id);
  }
}
