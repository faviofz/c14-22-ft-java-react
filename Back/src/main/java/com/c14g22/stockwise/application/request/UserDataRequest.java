package com.c14g22.stockwise.application.request;

import lombok.Data;

@Data
public class UserDataRequest {

  private String nombre;
  private String apellido;
  private String password;
  private String url;
}
