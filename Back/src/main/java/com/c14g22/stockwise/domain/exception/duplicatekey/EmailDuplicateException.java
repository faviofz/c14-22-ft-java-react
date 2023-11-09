package com.c14g22.stockwise.domain.exception.duplicatekey;

import java.io.Serial;

public class EmailDuplicateException extends RuntimeException{
  @Serial
  private static final long serialVersionUID = 1L;

  public EmailDuplicateException() {
    super();
  }

  public EmailDuplicateException(String email) {
    super("El email ya existe: " + email);
  }
}
