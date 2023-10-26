package com.c14g22.stockwise.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.util.UUID;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "empleados")
public class Empleado {

  @Id
  @Column(name = "id", nullable = false)
  private UUID id;
  private String nombre;
  private String apellido;
  private String rol;
  private String email;
  private LocalDate fechaIngreso;

  @OneToOne(orphanRemoval = true)
  @MapsId
  @JoinColumn(name = "user_id")
  private User user;
}