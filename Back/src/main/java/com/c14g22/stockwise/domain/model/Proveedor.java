package com.c14g22.stockwise.domain.model;

import com.c14g22.stockwise.application.request.ProveedorRequest;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "proveedores")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Proveedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proveedor_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    private String nombre;
    private String empresa;
    @Column(nullable = false, unique = true)
    private String email;
    private String telefono;

    public Proveedor(ProveedorRequest proveedorRequest) {
        this.nombre = proveedorRequest.getNombre();
        this.empresa = proveedorRequest.getEmpresa();
        this.email = proveedorRequest.getEmail();
        this.telefono = proveedorRequest.getTelefono();
    }
}