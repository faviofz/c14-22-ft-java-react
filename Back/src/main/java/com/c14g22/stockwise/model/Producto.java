package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.ProductoDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;

@Entity
@Table(name = "productos")
@Getter
@Setter
@NoArgsConstructor
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

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
    @ManyToOne
    @JoinColumn(name = "proveedor_id")
    private Proveedor proveedor;
    @ManyToOne
    @JoinColumn(name = "marca_id")
    private Marca marca;

    public Producto(ProductoDto productoDto) {
        this.nombre = productoDto.getNombre();
        this.imagen = productoDto.getImagen();
        this.costo = productoDto.getCosto();
        this.impuesto = productoDto.getImpuesto();
        this.fechaVencimiento = productoDto.getFechaVencimiento();
    }
}
