package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.UserSignupRequest;
import com.c14g22.stockwise.model.User;
import java.util.Optional;
import java.util.UUID;

public interface UserService {

  UUID saveUser(UserSignupRequest user);

  Optional<User> findByUsername(String username);
}
