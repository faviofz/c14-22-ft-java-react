package com.c14g22.stockwise;

import com.c14g22.stockwise.exception.CategoriaNotFoundException;
import com.c14g22.stockwise.exception.EmailDuplicateException;
import com.c14g22.stockwise.exception.MarcaNotFoundException;
import com.c14g22.stockwise.exception.ProductoNotFoundException;
import com.c14g22.stockwise.exception.UsernameDuplicateException;
import com.c14g22.stockwise.model.ErrorMessage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerExceptionHandler {

  @ExceptionHandler(value = {MarcaNotFoundException.class,ProductoNotFoundException.class, CategoriaNotFoundException.class})
  @ResponseStatus(value = HttpStatus.NOT_FOUND)
  public ErrorMessage entityNotFoundException(RuntimeException ex){
    return new ErrorMessage(HttpStatus.NOT_FOUND,ex.getMessage());
  }

  @ExceptionHandler(value = {EmailDuplicateException.class, UsernameDuplicateException.class})
  @ResponseStatus(value = HttpStatus.BAD_REQUEST)
  public ErrorMessage duplicateKeyException(RuntimeException ex){
    return new ErrorMessage(HttpStatus.BAD_REQUEST,ex.getMessage());
  }
}
