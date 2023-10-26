package com.c14g22.stockwise.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.annotations.UuidGenerator.Style;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usuarios")
@Setter
@Getter
public class User {

  @Id
  @Column(name = "user_uuid", nullable = false)
  @UuidGenerator(style = Style.AUTO)
  private UUID id;
  @Column(unique = true, nullable = false)
  private String username;
  @Column(nullable = false)
  private String password;
  @Column(unique = true, nullable = false)
  private String email;
  @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
  @PrimaryKeyJoinColumn
  private Empleado empleado;

//  @ElementCollection(fetch = FetchType.EAGER)
//  @CollectionTable(
//      name = "roles",
//      joinColumns = @JoinColumn(name = "user_id")
//  )
//  @Column(name = "user_role")
//  private Set<String> roles;
}
