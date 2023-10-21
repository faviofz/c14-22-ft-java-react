package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Proveedor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProveedorDto {
    private Long id;
    private String nombre;
    private String empresa;
    private String email;
    private String telefono;

    public ProveedorDto(Proveedor proveedor) {
        this.id = proveedor.getId();
        this.nombre = proveedor.getNombre();
        this.empresa = proveedor.getEmpresa();
        this.email = proveedor.getEmail();
        this.telefono = proveedor.getTelefono();
    }
}
