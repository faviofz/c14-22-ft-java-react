package com.c14g22.stockwise.application.rest;

import com.c14g22.stockwise.application.MovimientoDto;
import com.c14g22.stockwise.domain.model.Movimiento;
import com.c14g22.stockwise.domain.service.MovimientoService;
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
