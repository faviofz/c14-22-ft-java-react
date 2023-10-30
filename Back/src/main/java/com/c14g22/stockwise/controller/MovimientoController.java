package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Movimiento;
import com.c14g22.stockwise.repository.MovimientoRepository;
import com.c14g22.stockwise.service.MovimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movimientos")
public class MovimientoController {

    private final MovimientoRepository movimientoRepository;
    @Autowired
    private MovimientoService movimientoService;

    public MovimientoController(MovimientoRepository movimientoRepository) {
        this.movimientoRepository = movimientoRepository;
        this.movimientoService = movimientoService;
    }

    @GetMapping("/movimientos")
    public List<Movimiento> getMovimientos() {
        return movimientoService.obtenerMovimientos();
    }

    @GetMapping("/movimientos/{id}")
    public Movimiento getMovimiento(@PathVariable Long id) {
        return this.movimientoService.obtenerMovimientoPorId(id);
    }

    @PostMapping("/movimientos")
    public Movimiento createMovimiento(@RequestBody Movimiento movimiento) {
        return movimientoRepository.save(movimiento);
    }

    @PutMapping("/movimientos/{id}")
    public Movimiento updateMovimiento(@PathVariable Long id, @RequestBody Movimiento movimiento) {
        movimiento.setId(id);
        return movimientoRepository.save(movimiento);
    }

    @DeleteMapping("/notificaciones({id}")
    public void deleteMovimiento(@PathVariable Long id) {
        movimientoRepository.deleteById(id);
    }
}
