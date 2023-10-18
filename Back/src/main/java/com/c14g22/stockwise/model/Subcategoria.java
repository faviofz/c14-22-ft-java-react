package com.c14g22.stockwise.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "subcategorias")
@Getter
@Setter
public class Subcategoria {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "subcategoria_id", nullable = false)
  @JdbcTypeCode(SqlTypes.INTEGER)
  private Long id;
  @Column(nullable = false)
  private String nombre;
  @ManyToOne
  @JoinColumn(name = "categoria_id")
  private Categoria categoria;
}
