package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Categoria;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoriaDto {

    private Long id;
    private String nombre;

    public CategoriaDto(Categoria categoria) {

        this.id = categoria.getId();
        this.nombre = categoria.getNombre();
    }
}
