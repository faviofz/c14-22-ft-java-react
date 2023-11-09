package com.c14g22.stockwise.application.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MarcaRequest {

    private String nombre;

    @Override
    public String toString() {
        return "MarcaRequest{" + "nombre'" + nombre + '}';
    }
}


