package com.c14g22.stockwise.model;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
@Setter
@Getter
public class User {
  @Id
  @GeneratedValue
  @Column(name="user_id")
  private Long id;

  private String username;

  private String password;

  private String email;

  @ElementCollection(fetch= FetchType.EAGER)
  @CollectionTable(
      name="roles",
      joinColumns = @JoinColumn(name="user_id")
  )
  @Column(name="user_role")
  private Set<String> roles;
}
