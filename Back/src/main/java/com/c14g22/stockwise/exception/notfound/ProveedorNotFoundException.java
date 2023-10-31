package com.c14g22.stockwise.exception.notfound;

import java.io.Serial;

public class ProveedorNotFoundException extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 1L;

    public ProveedorNotFoundException() {
        super();
    }

    public ProveedorNotFoundException(String message) {
        super(message);
    }

    public ProveedorNotFoundException(Long id) {
        super("El proveedor con el id: " + id + "no fue encontrado.");
    }
}
