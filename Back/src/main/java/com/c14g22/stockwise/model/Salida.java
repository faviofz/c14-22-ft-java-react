package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.SalidaDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;

@Entity
@Table(name = "salidas")
@Getter
@Setter
@NoArgsConstructor
public class Salida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "salida_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    @Column(name = "fecha_salida")
    private LocalDate fecha;
    private String motivo;
    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    public Salida(SalidaDto salidaDto) {
        this.fecha = salidaDto.getFecha();
        this.motivo = salidaDto.getMotivo();
        this.producto = salidaDto.getProducto();
    }
}
