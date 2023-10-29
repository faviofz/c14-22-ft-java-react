package com.c14g22.stockwise.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.annotations.UuidGenerator.Style;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "missuarios")
@Setter
@Getter
@EntityListeners(AuditingEntityListener.class)
public class User {

  @Id
  @Column(name = "user_uuid")
  @UuidGenerator(style = Style.AUTO)
  private UUID id;
  @Column(unique = true, nullable = false, updatable = false)
  private String username;
  @Column(nullable = false)
  private String password;
  @Column(unique = true, nullable = false)
  private String email;
  @CreatedDate
  @Column(nullable = false,updatable = false)
  private LocalDateTime created_at;
  @CreatedDate
  @Column(nullable = false)
  private LocalDateTime last_login_at;
  @OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
  @PrimaryKeyJoinColumn
  private Empleado empleado;
}
