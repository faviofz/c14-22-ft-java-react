package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.ProveedorDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "proveedores")
@Getter
@Setter
@NoArgsConstructor
public class Proveedor {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "proveedor_id", nullable = false)
  @JdbcTypeCode(SqlTypes.INTEGER)
  private Long id;
  private String nombre;
  private String empresa;
  @Column(name = "correo_electronico", nullable = false)
  private String email;
  private String telefono;

  public Proveedor(ProveedorDto proveedorDto) {
    this.nombre = proveedorDto.getNombre();
    this.empresa = proveedorDto.getEmpresa();
    this.email = proveedorDto.getEmail();
    this.telefono = proveedorDto.getTelefono();
  }
}