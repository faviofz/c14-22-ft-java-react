package com.c14g22.stockwise.exception;

import java.io.Serial;

public class MarcaNotFoundException extends RuntimeException{

    @Serial
    private static final long serialVersionUID = 1L;

    public MarcaNotFoundException() {super();}

    public MarcaNotFoundException(String message) {super(message);}

    public MarcaNotFoundException(Long id) {super("La marca con el id: " + id + "no fue encontrada");}
}
