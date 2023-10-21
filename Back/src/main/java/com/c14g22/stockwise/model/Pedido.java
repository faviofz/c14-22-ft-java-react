package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.PedidoDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;

@Entity
@Table(name = "pedidos")
@Getter
@Setter
@NoArgsConstructor
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pedido_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    private String descripcion;
    @Column(name = "fecha_pedido")
    private LocalDate fecha;
    @ManyToOne
    @JoinColumn(name = "proveedor_id")
    private Proveedor proveedor;

    public Pedido(PedidoDto pedidoDto) {

        this.descripcion = pedidoDto.getDescripcion();
        this.fecha = pedidoDto.getFecha();
        this.proveedor = pedidoDto.getProveedor();
    }

}
