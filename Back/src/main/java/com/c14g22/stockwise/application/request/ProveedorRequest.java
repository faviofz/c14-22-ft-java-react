package com.c14g22.stockwise.application.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProveedorRequest {

    private String nombre;
    private String empresa;
    private String email;
    private String telefono;

    @Override
    public String toString() {
        return "ProveedorRequest{" +
                "nombre='" + nombre + '\'' +
                "email='" + email + '\'' +
                "telefono='" + telefono + '\'' +
                '}';
    }
}
