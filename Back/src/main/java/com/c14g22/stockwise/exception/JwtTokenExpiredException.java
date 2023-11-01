package com.c14g22.stockwise.exception;

import java.io.Serial;

public class JwtTokenExpiredException extends RuntimeException {

  @Serial
  private static final long serialVersionUID = 1L;

  public JwtTokenExpiredException() {
    super("El token ha expirado.");
  }

  public JwtTokenExpiredException(String message) {
    super(message);
  }
}
