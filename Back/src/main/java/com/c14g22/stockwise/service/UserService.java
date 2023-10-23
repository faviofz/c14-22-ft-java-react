package com.c14g22.stockwise.service;

import com.c14g22.stockwise.model.User;
import java.util.Optional;

public interface UserService {

  Long saveUser(User user);

  Optional<User> findByUsername(String username);
}
