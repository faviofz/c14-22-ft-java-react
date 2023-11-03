package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.MarcaRequest;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "marcas")
@Getter
@Setter
@NoArgsConstructor
public class Marca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "marca_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    public Marca(MarcaRequest marcaRequest) {
        this.nombre = marcaRequest.getNombre();
    }

    public Marca(String nombre) {
        this.nombre = nombre;
    }
}
