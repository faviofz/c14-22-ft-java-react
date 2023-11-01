package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.MovimientoDto;
import com.c14g22.stockwise.enumeraciones.Tipo;
import jakarta.persistence.*;
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
    @Column(name = "fecha_asiento")
    private LocalDate fecha;
    private Integer cantidad;
    @Enumerated(EnumType.STRING)
    private Tipo tipo;

    public Movimiento(MovimientoDto historialRequest) {
        this.fecha = historialRequest.getFecha();
        this.tipo = historialRequest.getTipo();
        this.cantidad = historialRequest.getCantidad();
    }
}
