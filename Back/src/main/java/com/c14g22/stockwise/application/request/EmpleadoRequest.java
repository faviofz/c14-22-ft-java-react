package com.c14g22.stockwise.application.request;

import com.c14g22.stockwise.domain.model.Empleado;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EmpleadoRequest {
  private String nombre;
  private String apellido;
  private String photo_url;

  public EmpleadoRequest(Empleado empleado) {
    this.nombre = empleado.getNombre();
    this.apellido = empleado.getApellido();
    this.photo_url = empleado.getPhoto_url();
  }
}
