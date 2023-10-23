package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.JWTUtil;
import com.c14g22.stockwise.dto.UserRequest;
import com.c14g22.stockwise.dto.UserResponse;
import com.c14g22.stockwise.model.User;
import com.c14g22.stockwise.service.UserService;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestController {
  @Autowired
  private UserService userService;
  @Autowired
  private JWTUtil util;
  @Autowired
  private AuthenticationManager authenticationManager;

  @PostMapping("/signup")
  public ResponseEntity<String> saveUser(@RequestBody User user) {

    Integer id = userService.saveUser(user);
    String message= "User with id '"+id+"' saved succssfully!";
    //return new ResponseEntity<String>(message, HttpStatus.OK);
    return ResponseEntity.ok(message);
  }

  @PostMapping("/login")
  public ResponseEntity<UserResponse> login(@RequestBody UserRequest request){

    //Validate username/password with DB(required in case of Stateless Authentication)
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
        request.getUsername(), request.getPassword()));
    String token =util.generateToken(request.getUsername());
    return ResponseEntity.ok(new UserResponse(token,"Token generated successfully!"));
  }

  @PostMapping("/getData")
  public ResponseEntity<String> testAfterLogin(Principal p){
    return ResponseEntity.ok("You are accessing data after a valid Login. You are :" +p.getName());
  }
}
