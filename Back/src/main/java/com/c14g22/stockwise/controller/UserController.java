package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.JWTUtil;
import com.c14g22.stockwise.dto.EmpleadoRequest;
import com.c14g22.stockwise.dto.UserDataRequest;
import com.c14g22.stockwise.dto.UserDataResponse;
import com.c14g22.stockwise.dto.UserLoginRequest;
import com.c14g22.stockwise.dto.UserLoginResponse;
import com.c14g22.stockwise.dto.UserSignupRequest;
import com.c14g22.stockwise.model.User;
import com.c14g22.stockwise.service.EmpleadoService;
import com.c14g22.stockwise.service.UserService;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private UserService userService;
  @Autowired
  private EmpleadoService empleadoService;
  @Autowired
  private JWTUtil util;

  @Autowired
  private AuthenticationManager authenticationManager;

  @PostMapping("/signup")
  public ResponseEntity<String> saveUser(@RequestBody UserSignupRequest userSignupRequest) {

    User user = userService.saveUser(userSignupRequest);
    return ResponseEntity.ok("Usuario registrado exitosamente.");
  }

  @PostMapping("/login")
  public ResponseEntity<UserLoginResponse> login(@RequestBody UserLoginRequest request) {

    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
        request.username(), request.password()));
    String token = util.generateToken(request.username());
    return ResponseEntity.ok(new UserLoginResponse(token, "Token generated successfully!"));
  }

  @GetMapping("/user")
  public ResponseEntity<UserDataResponse> getUserData(Principal p) {
    User user = userService.findByUsername(p.getName()).orElse(null);
    assert user != null;
    return ResponseEntity.ok(new UserDataResponse(user.getEmpleado()));
  }

  @PutMapping("/user")
  public ResponseEntity<UserLoginResponse> updateUserData(Principal p,
      @RequestBody UserDataRequest userRequest) {
    User user = userService.findByUsername(p.getName()).orElse(null);
    assert user != null;
    EmpleadoRequest empleadoRequest = new EmpleadoRequest();
    empleadoRequest.setNombre(userRequest.getNombre());
    empleadoRequest.setApellido(userRequest.getApellido());
    empleadoRequest.setRol(userRequest.getRol());
    empleadoService.actualizarEmpleado(user.getId(), empleadoRequest);
    return ResponseEntity.noContent().build();
  }
}
