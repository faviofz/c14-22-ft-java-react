package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Categoria;
import com.c14g22.stockwise.model.Subcategoria;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SubcategoriaDto {

    private Long id;
    private String nombre;
    private Categoria categoria;

    public SubcategoriaDto(Subcategoria subcategoria) {
        this.id = subcategoria.getId();
        this.nombre = subcategoria.getNombre();
        this.categoria = subcategoria.getCategoria();
    }


}
