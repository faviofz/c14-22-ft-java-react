package com.c14g22.stockwise.application.response;

import com.c14g22.stockwise.domain.model.Empleado;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Data;

@Data
public class EmpleadoResponse {
  private UUID id;
  private String nombre;
  private String apellido;
  private String email;
  private LocalDateTime fechaIngreso;
  private String rol;
  private String url;
  private boolean deleted;

  public EmpleadoResponse(Empleado empleado) {
    this.id = empleado.getId();
    this.nombre = empleado.getNombre();
    this.apellido = empleado.getApellido();
    this.email = empleado.getEmail();
    this.fechaIngreso = empleado.getFechaIngreso();
    this.rol = empleado.getRol();
    this.url = empleado.getPhoto_url();
    this.deleted = empleado.isDeleted();
  }
}
