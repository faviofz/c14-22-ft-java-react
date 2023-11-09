package com.c14g22.stockwise.domain.repository;

import com.c14g22.stockwise.domain.model.User;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, UUID> {

  Optional<User> findByUsername(String username);

  boolean existsByEmail(String email);
  boolean existsByUsername(String username);

  Optional<User> findByEmail(String email);
}
