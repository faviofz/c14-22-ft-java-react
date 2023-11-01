package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Empleado;
import java.time.LocalDateTime;
import java.util.UUID;
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
