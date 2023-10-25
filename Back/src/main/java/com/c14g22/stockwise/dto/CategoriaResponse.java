package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Categoria;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CategoriaResponse {

    private Long id;
    private String nombre;

    public CategoriaResponse(Categoria categoria){
        this.id = categoria.getId();
        this.nombre = categoria.getNombre();
    }
}
