package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.EmpleadoRequest;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Table(name = "empleados")
@NoArgsConstructor
@ToString
public class Empleado {

  @Id
  @Column(name = "user_id", nullable = false)
  private UUID id;
  @Column(nullable = false)
  private String nombre;
  @Column(nullable = false)
  private String apellido;
  private String photo_url;
  @Column(nullable = false)
  private String rol = "empleado";
  @Column(nullable = false, unique = true)
  private String email;
  @Column(nullable = false, updatable = false)
  private LocalDateTime fechaIngreso;
  @Column(nullable = false)
  private boolean deleted = false;

  @OneToOne(orphanRemoval = true)
  @MapsId
  @JoinColumn(name = "user_id")
  private User user;

  public Empleado(EmpleadoRequest empleadoRequest) {
    this.nombre = empleadoRequest.getNombre();
    this.apellido = empleadoRequest.getApellido();
    this.rol = empleadoRequest.getRol();
  }

  public boolean isDeleted() {
    return deleted;
  }
}