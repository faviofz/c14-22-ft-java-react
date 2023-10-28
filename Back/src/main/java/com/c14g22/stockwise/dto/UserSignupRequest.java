package com.c14g22.stockwise.dto;

import lombok.Data;

@Data
public class UserSignupRequest {

  private String username;
  private String password;
  private String nombre;
  private String apellido;
  private String email;
}
