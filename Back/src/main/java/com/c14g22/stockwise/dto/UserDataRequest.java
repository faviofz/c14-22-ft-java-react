package com.c14g22.stockwise.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class UserDataRequest {

  private String nombre;
  private String apellido;
  private String rol;
}
