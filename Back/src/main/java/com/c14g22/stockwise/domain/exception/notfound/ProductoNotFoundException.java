package com.c14g22.stockwise.domain.exception.notfound;

import java.io.Serial;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class ProductoNotFoundException extends RuntimeException {

  @Serial
  private static final long serialVersionUID = 1L;

  public ProductoNotFoundException() {
    super();
  }

  public ProductoNotFoundException(String message) {
    super(message);
  }

  public ProductoNotFoundException(Long id) {
    super("El producto con el id: " + id + " no fue encontrado.");
  }
}
