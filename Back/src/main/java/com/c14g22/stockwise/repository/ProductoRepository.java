package com.c14g22.stockwise.repository;

import com.c14g22.stockwise.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

  @Transactional
  @Modifying
  @Query("update Producto p set p.actual = ?1 where p.id = ?2")
  int updateActualById(Integer actual, Long id);

}
