package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.dto.MovimientoDto;
import com.c14g22.stockwise.model.Movimiento;
import com.c14g22.stockwise.repository.MovimientoRepository;
import com.c14g22.stockwise.service.MovimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movimientos")
public class MovimientoController {

    @Autowired
    private MovimientoService movimientoService;


    @GetMapping
    public List<Movimiento> getMovimientos() {
        return movimientoService.obtenerMovimientos();
    }

    @GetMapping("/{id}")
    public Movimiento getMovimiento(@PathVariable Long id) {
        return this.movimientoService.obtenerMovimientoPorId(id);
    }

    @PostMapping
    public MovimientoDto createMovimiento(@RequestBody MovimientoDto movimientoDto) {
        return this.movimientoService.guardarMovimiento(movimientoDto);
    }

    @PutMapping("/{id}")
    public MovimientoDto updateMovimiento(@PathVariable Long id, @RequestBody MovimientoDto movimientoDto) {
        return this.movimientoService.actualizarMovimiento(id,movimientoDto);
    }

    @DeleteMapping("/{id}")
    public void deleteMovimiento(@PathVariable Long id) {
        this.movimientoService.eliminarMovimiento(id);
    }
}
