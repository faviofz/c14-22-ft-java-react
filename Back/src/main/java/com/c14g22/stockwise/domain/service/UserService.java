package com.c14g22.stockwise.domain.service;

import com.c14g22.stockwise.application.request.UserSignupRequest;
import com.c14g22.stockwise.domain.model.User;

public interface UserService {

  User saveUser(UserSignupRequest user);

  User findByUsername(String username);

  User findByEmail(String email);

  User updatePasswordByEmail(String email, String password);
}
