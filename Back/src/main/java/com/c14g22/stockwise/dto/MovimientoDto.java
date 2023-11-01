package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.enumeraciones.Tipo;
import com.c14g22.stockwise.model.Movimiento;
import jakarta.persistence.Column;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MovimientoDto {

    private Long id;
    private LocalDateTime fecha_asiento;
    private Integer cantidad;
    private Tipo tipo;
    private String descripcion;

    public MovimientoDto(Movimiento movimiento) {
        this.id = movimiento.getId();
        this.fecha_asiento = movimiento.getFecha_asiento();
        this.cantidad = movimiento.getCantidad();
        this.tipo = movimiento.getTipo();
        this.descripcion = movimiento.getDescripcion();
    }

    public MovimientoDto(LocalDateTime fecha_asiento, Integer cantidad, Tipo tipo, String descripcion) {
        this.fecha_asiento = fecha_asiento;
        this.cantidad = cantidad;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
}
