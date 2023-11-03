package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.JWTUtil;
import com.c14g22.stockwise.dto.EmpleadoRequest;
import com.c14g22.stockwise.dto.EmpleadoResponse;
import com.c14g22.stockwise.dto.UserDataRequest;
import com.c14g22.stockwise.dto.UserDataResponse;
import com.c14g22.stockwise.dto.UserLoginRequest;
import com.c14g22.stockwise.dto.UserLoginResponse;
import com.c14g22.stockwise.dto.UserSignupRequest;
import com.c14g22.stockwise.dto.ChangePasswordRequest;
import com.c14g22.stockwise.model.User;
import com.c14g22.stockwise.service.EmailService;
import com.c14g22.stockwise.service.EmpleadoService;
import com.c14g22.stockwise.service.UserService;
import jakarta.mail.MessagingException;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
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
      throws MalformedURLException, URISyntaxException, MessagingException {
    User user = userService.findByEmail(email);

    String token = util.generateToken(user.getEmail());
    String url = "https://stockwise-client.vercel.app/changePassword?email=" + email +"&token=" + token;
    String html = "<table align='center' border=\"0\" width=\"549\" style=\"text-align: center; font-family:  sans-serif;\">\n"
        + "  <tr>\n"
        + "    <td><a href=\"https://stockwise-client.vercel.app/\" target=\"_blank\"><img src=\"https://stockwise-client.vercel.app/mailing/header.png\" alt=\"StockWise logo\"></a></td>\n"
        + "  </tr>\n"
        + "  <tr>\n"
        + "    <td>\n"
        + "      <div style=\"padding: 5rem 2rem;\">\n"
        + "        <img src=\"https://stockwise-client.vercel.app/mailing/icon.png\" alt=\"password icon\">\n"
        + "        <h2 style=\"color:#3378FF; font-size:2.3rem; font-weight: 100;\">Hola <b>"+user.getUsername()+"</b></h2>\n"
        + "        <h2 style=\"color:#545F71\">¿Olvidaste tu contraseña?</h2>\n"
        + "        <p style=\"color:#545F71\">\n"
        + "          <b>Hemos recibido una solicitud para restablecer tu contraseña\n"
        + "          recientemente.</b> Si no has iniciado esta solicitud, te pedimos que por\n"
        + "          favor desestimes este mensaje. En caso contrario, <b>por favor sigue el\n"
        + "          siguiente enlace</b>\n"
        + "        </p>\n"
        + "        <a href=\""+url+"\" target=\"_blank\" style=\"margin-top: 3rem; display: inline-block;\">\n"
        + "            <img src=\"https://stockwise-client.vercel.app/mailing/button.png\" alt=\"Button change password\">\n"
        + "        </a>\n"
        + "      </div>\n"
        + "    </td>\n"
        + "  </tr>\n"
        + "  <tr>\n"
        + "    <td style=\"font-size: .7rem; color:#545F71;\">&copy; 2023, StockWise. Todos los derechos reservados.</td>\n"
        + "  </tr>\n"
        + "</table>";
    emailService.sendMimeMessage(email,"Reset password", html);
    return ResponseEntity.ok().build();
  }

  @PostMapping("/changePassword")
  public ResponseEntity<String> changePassword(@RequestParam String email, @RequestParam String token, @RequestBody
      ChangePasswordRequest passwordRequest){
    if (!util.isValidToken(token,email)) {
      return ResponseEntity.badRequest().body("TOKEN INVALIDO");
    }
    userService.updatePasswordByEmail(email,passwordRequest.password());
    return ResponseEntity.ok().build();
  }
}