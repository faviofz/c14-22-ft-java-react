package com.c14g22.stockwise.repository;

import com.c14g22.stockwise.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}
