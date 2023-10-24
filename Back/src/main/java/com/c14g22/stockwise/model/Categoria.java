package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.CategoriaDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "categorias")
@Getter
@Setter
@NoArgsConstructor
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categoria_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    @Column(nullable = false, unique = true)
    private String nombre;

    public Categoria(CategoriaDto categoriaDto) {

        this.nombre = categoriaDto.getNombre();
    }

    public Categoria(String nombre) {
        this.nombre = nombre;
    }
}
