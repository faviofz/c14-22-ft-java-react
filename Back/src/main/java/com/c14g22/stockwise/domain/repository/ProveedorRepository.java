package com.c14g22.stockwise.domain.repository;

import com.c14g22.stockwise.domain.model.Proveedor;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProveedorRepository extends JpaRepository<Proveedor, Long> {

  Optional<Proveedor> findByEmail(String email);
}
