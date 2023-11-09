package com.c14g22.stockwise.application.response;

import com.c14g22.stockwise.domain.model.Empleado;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDataResponse {
  private String nombre;
  private String apellido;
  private String rol;
  private String email;
  private LocalDateTime fechaIngreso;
  private String url;

  public UserDataResponse(Empleado empleado) {
    this.nombre = empleado.getNombre();
    this.apellido = empleado.getApellido();
    this.rol = empleado.getRol();
    this.email = empleado.getEmail();
    this.fechaIngreso = empleado.getFechaIngreso();
    this.url = empleado.getPhoto_url();
  }
}
