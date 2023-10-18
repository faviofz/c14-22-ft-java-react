package com.c14g22.stockwise.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "marcas")
@Getter
@Setter
public class Marca {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "marca_id", nullable = false)
  @JdbcTypeCode(SqlTypes.INTEGER)
  private Long id;

  @Column(nullable = false)
  private String nombre;
}
