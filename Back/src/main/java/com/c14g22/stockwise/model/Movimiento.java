package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.MovimientoDto;
import com.c14g22.stockwise.enumeraciones.Tipo;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;

@Entity
@Table(name = "movimientos")
@Getter
@Setter
@NoArgsConstructor
public class Movimiento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "historial_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    @Column
    private LocalDateTime fecha_asiento;
    private Integer cantidad;
    @Enumerated(EnumType.STRING)
    private Tipo tipo;
    private String descripcion;

    public Movimiento(MovimientoDto movimientoDto) {
        this.fecha_asiento = movimientoDto.getFecha_asiento();
        this.tipo = movimientoDto.getTipo();
        this.cantidad = movimientoDto.getCantidad();
        this.descripcion = movimientoDto.getDescripcion();
    }
}
