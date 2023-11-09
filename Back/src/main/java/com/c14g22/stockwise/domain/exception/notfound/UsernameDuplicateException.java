package com.c14g22.stockwise.domain.exception.notfound;

import java.io.Serial;

public class UsernameDuplicateException extends RuntimeException {

  @Serial
  private static final long serialVersionUID = 1L;

  public UsernameDuplicateException() {
    super();
  }

  public UsernameDuplicateException(String message) {
    super(message);
  }
}
