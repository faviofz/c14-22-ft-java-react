package com.c14g22.stockwise.repository;


import com.c14g22.stockwise.model.Marca;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarcaRepository extends JpaRepository<Marca, Long> {

  Optional<Marca> findByNombre(String marca);
}

