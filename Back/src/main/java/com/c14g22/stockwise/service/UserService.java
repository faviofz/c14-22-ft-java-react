package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.UserSignupRequest;
import com.c14g22.stockwise.model.User;

public interface UserService {

  User saveUser(UserSignupRequest user);

  User findByUsername(String username);

  User findByEmail(String email);

  User updatePasswordByEmail(String email, String password);
}
