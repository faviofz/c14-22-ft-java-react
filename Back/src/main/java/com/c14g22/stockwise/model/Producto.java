package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.ProductoRequest;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;

@Entity
@Table(name = "productos")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "producto_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    private String nombre;
    private String imagen;
    private Double costo;
    private Double impuesto;
    private LocalDate fechaVencimiento;
    private Integer min;
    private Integer max;
    private Integer actual = 0;

    @ManyToOne(targetEntity = Categoria.class)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
    @ManyToOne(targetEntity = Proveedor.class)
    @JoinColumn(name = "proveedor_id")
    private Proveedor proveedor;
    @ManyToOne(targetEntity = Marca.class)
    @JoinColumn(name = "marca_id")
    private Marca marca;

    public Producto(ProductoRequest productoRequest) {
        this.nombre = productoRequest.getNombre();
        this.imagen = productoRequest.getImagen();
        this.costo = productoRequest.getCosto();
        this.impuesto = productoRequest.getImpuesto();
        this.fechaVencimiento = productoRequest.getFechaVencimiento();
        this.min = productoRequest.getMin();
        this.max = productoRequest.getMax();
    }
}
