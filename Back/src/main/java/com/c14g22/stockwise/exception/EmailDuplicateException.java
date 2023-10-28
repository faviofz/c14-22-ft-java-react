package com.c14g22.stockwise.exception;

import java.io.Serial;

public class EmailDuplicateException extends RuntimeException{
  @Serial
  private static final long serialVersionUID = 1L;

  public EmailDuplicateException() {
    super();
  }

  public EmailDuplicateException(String message) {
    super(message);
  }
}
