package com.c14g22.stockwise.application.response;

import com.c14g22.stockwise.domain.model.Proveedor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProveedorResponse {

    private Long id;
    private String nombre;
    private String empresa;
    private String email;
    private String telefono;

    public ProveedorResponse(Proveedor proveedor) {

        this.id = proveedor.getId();
        this.nombre = proveedor.getNombre();
        this.empresa = proveedor.getEmpresa();
        this.email = proveedor.getEmail();
        this.telefono = proveedor.getTelefono();
    }
}
