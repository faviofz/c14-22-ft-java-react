package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.enumeraciones.Tipo;
import com.c14g22.stockwise.model.Movimiento;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovimientoDto {

    private Long id;
    @Column(name = "fecha_asiento")
    private LocalDate fecha;
    private Integer cantidad;
    private Tipo tipo;

    public MovimientoDto(Movimiento movimiento) {
        this.id = movimiento.getId();
        this.fecha = movimiento.getFecha();
        this.cantidad = movimiento.getCantidad();
        this.tipo = movimiento.getTipo();
    }

    @Override
    public String toString() {
        return "HistorialRequest{" +
                "fecha=" + fecha +
                ", cantidad=" + cantidad +
                ", tipo=" + tipo +
                '}';
    }
}
