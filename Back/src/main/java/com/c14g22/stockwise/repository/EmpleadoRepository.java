package com.c14g22.stockwise.repository;

import com.c14g22.stockwise.model.Empleado;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, UUID> {

    @Transactional
    @Modifying
    @Query("update Empleado e set e.deleted = true where e.id = ?1")
    int updateDeletedById(UUID id);

    Optional<Empleado> findByIdAndDeletedFalse(UUID id);
}
