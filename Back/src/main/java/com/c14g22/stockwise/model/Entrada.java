package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.EntradaDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;

@Entity
@Table(name = "entradas")
@Getter
@Setter
@NoArgsConstructor
public class Entrada {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "entrada_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    @Column(name = "fecha_entrada")
    private LocalDate fecha;
    private Integer cantidad;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;
    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    public Entrada(EntradaDto entradaDto) {

        this.fecha = entradaDto.getFecha();
        this.cantidad = entradaDto.getCantidad();
        this.producto = entradaDto.getProducto();
        this.pedido = entradaDto.getPedido();
    }
}

