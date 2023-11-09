package com.c14g22.stockwise.application.response;

import com.c14g22.stockwise.domain.model.Marca;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MarcaResponse {

    private Long id;
    private String nombre;

    public MarcaResponse(Marca marca) {
        this.id = marca.getId();
        this.nombre = marca.getNombre();
    }
}
