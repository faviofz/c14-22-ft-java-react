package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.SubcategoriaDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "subcategorias")
@Getter
@Setter
@NoArgsConstructor
public class Subcategoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subcategoria_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    @Column(nullable = false)
    private String nombre;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    public Subcategoria(SubcategoriaDto subcategoriaDto) {
        this.nombre = subcategoriaDto.getNombre();
        this.categoria = subcategoriaDto.getCategoria();
    }
}
