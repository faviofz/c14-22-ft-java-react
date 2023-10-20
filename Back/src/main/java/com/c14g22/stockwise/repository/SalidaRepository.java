package com.c14g22.stockwise.repository;

import com.c14g22.stockwise.model.Salida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalidaRepository extends JpaRepository<Salida, Long> {
}

