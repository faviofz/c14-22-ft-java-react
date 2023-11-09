package com.c14g22.stockwise.domain.repository;

import com.c14g22.stockwise.domain.model.Producto;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

  boolean existsBySlogan(@NonNull String slogan);

  Optional<Producto> findBySlogan(@NonNull String slogan);

  @Transactional
  @Modifying
  @Query("update Producto p set p.actual = ?1 where p.id = ?2")
  int updateActualById(Integer actual, Long id);
}
