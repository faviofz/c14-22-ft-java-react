package com.c14g22.stockwise.exception.notfound;

import java.io.Serial;

public class CategoriaNotFoundException extends RuntimeException{
  @Serial
  private static final long serialVersionUID = 1L;

  public CategoriaNotFoundException() {
    super();
  }

  public CategoriaNotFoundException(String message) {
    super(message);
  }

  public CategoriaNotFoundException(Long id) {
    super("La categoría con el id: " + id + " no fue encontrada.");
  }
}
