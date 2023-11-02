package com.c14g22.stockwise;

import com.c14g22.stockwise.exception.MercadoPagoException;
import com.c14g22.stockwise.exception.duplicatekey.EmailDuplicateException;
import com.c14g22.stockwise.exception.notfound.CategoriaNotFoundException;
import com.c14g22.stockwise.exception.notfound.MarcaNotFoundException;
import com.c14g22.stockwise.exception.notfound.ProductoNotFoundException;
import com.c14g22.stockwise.exception.notfound.UsernameDuplicateException;
import com.c14g22.stockwise.model.ErrorMessage;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerExceptionHandler {

  @ExceptionHandler(value = {MarcaNotFoundException.class, ProductoNotFoundException.class,
      CategoriaNotFoundException.class})
  @ResponseStatus(value = HttpStatus.NOT_FOUND)
  public ErrorMessage entityNotFoundException(RuntimeException ex) {
    return new ErrorMessage(HttpStatus.NOT_FOUND, HttpStatus.NOT_FOUND.value(), ex.getMessage());
  }

  @ExceptionHandler(value = {EmailDuplicateException.class, UsernameDuplicateException.class})
  @ResponseStatus(value = HttpStatus.BAD_REQUEST)
  public ErrorMessage duplicateKeyException(RuntimeException ex) {
    return new ErrorMessage(HttpStatus.BAD_REQUEST, HttpStatus.BAD_REQUEST.value(),
        ex.getMessage());
  }

  @ExceptionHandler(value = {ExpiredJwtException.class})
  @ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE)
  public ErrorMessage jwtTokenExpired(RuntimeException ex) {
    return new ErrorMessage(HttpStatus.NOT_ACCEPTABLE, 498, ex.getMessage());
  }

  @ExceptionHandler(value = {MercadoPagoException.class})
  @ResponseStatus(value = HttpStatus.BAD_REQUEST)
  public ErrorMessage mercadoPagoException(RuntimeException ex) {
    return new ErrorMessage(HttpStatus.BAD_REQUEST, 400, ex.getMessage());
  }
}
