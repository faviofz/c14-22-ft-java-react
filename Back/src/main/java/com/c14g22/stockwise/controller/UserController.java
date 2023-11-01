package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.JWTUtil;
import com.c14g22.stockwise.dto.EmpleadoRequest;
import com.c14g22.stockwise.dto.EmpleadoResponse;
import com.c14g22.stockwise.dto.UserDataRequest;
import com.c14g22.stockwise.dto.UserDataResponse;
import com.c14g22.stockwise.dto.UserLoginRequest;
import com.c14g22.stockwise.dto.UserLoginResponse;
import com.c14g22.stockwise.dto.UserSignupRequest;
import com.c14g22.stockwise.model.ChangePasswordRequest;
import com.c14g22.stockwise.model.Empleado;
import com.c14g22.stockwise.model.User;
import com.c14g22.stockwise.service.EmailService;
import com.c14g22.stockwise.service.EmpleadoService;
import com.c14g22.stockwise.service.UserService;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
  private EmailService emailService;

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
    User user = userService.findByUsername(p.getName());
    assert user != null;
    return ResponseEntity.ok(new UserDataResponse(user.getEmpleado()));
  }

  @PutMapping("/user")
  public ResponseEntity<UserDataResponse> updateUserData(Principal p,
      @RequestBody UserDataRequest userRequest) {
    User user = userService.findByUsername(p.getName());
    assert user != null;
    if(userRequest.getPassword() != null && !userRequest.getPassword().isBlank()){
      userService.updatePasswordByEmail(user.getEmail(),userRequest.getPassword());
    }

    EmpleadoRequest empleadoRequest = new EmpleadoRequest();
    empleadoRequest.setNombre(userRequest.getNombre());
    empleadoRequest.setApellido(userRequest.getApellido());
    empleadoRequest.setPhoto_url(userRequest.getUrl());

    EmpleadoResponse empleadoResponse = empleadoService.actualizarEmpleado(user.getId(), empleadoRequest);
    UserDataResponse userDataResponse = new UserDataResponse();
    userDataResponse.setUrl(empleadoResponse.getUrl());
    userDataResponse.setEmail(empleadoResponse.getEmail());
    userDataResponse.setNombre(empleadoRequest.getNombre());
    userDataResponse.setApellido(empleadoResponse.getApellido());
    userDataResponse.setFechaIngreso(empleadoResponse.getFechaIngreso());
    userDataResponse.setRol(empleadoResponse.getRol());

    return ResponseEntity.ok(userDataResponse);
  }

  @PostMapping("/resetPassword")
  public ResponseEntity<String> forgotPassword(@RequestParam String email)
      throws MalformedURLException, URISyntaxException {
    User user = userService.findByEmail(email);
    String token = util.generateToken(user.getEmail());
    String url = "https://stockwise-client.vercel.app/changePassword?email=" + email +"&token=" + token;
    emailService.sendSimpleMessage(email,"Reset password", url);

    return ResponseEntity.ok().build();
  }

  @PostMapping("/changePassword")
  public ResponseEntity<String> changePassword(@RequestParam String email, @RequestParam String token, @RequestBody
      ChangePasswordRequest passwordRequest){
    if (!util.isValidToken(token,email)) {
      return ResponseEntity.badRequest().body("TOKEN INVALID");
    }
    userService.updatePasswordByEmail(email,passwordRequest.password());
    return ResponseEntity.ok().build();
  }
}
