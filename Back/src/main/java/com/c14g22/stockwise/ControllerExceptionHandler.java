package com.c14g22.stockwise;

import com.c14g22.stockwise.exception.CategoriaNotFoundException;
import com.c14g22.stockwise.exception.ProductoNotFoundException;
import com.c14g22.stockwise.model.ErrorMessage;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ControllerExceptionHandler {

  @ExceptionHandler(value = {ProductoNotFoundException.class, CategoriaNotFoundException.class})
  @ResponseStatus(value = HttpStatus.NOT_FOUND)
  public ErrorMessage entityNotFoundException(RuntimeException ex){
    return new ErrorMessage(HttpStatus.NOT_FOUND,ex.getMessage());
  }
}
