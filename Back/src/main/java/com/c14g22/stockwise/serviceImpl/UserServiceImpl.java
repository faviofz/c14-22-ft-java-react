package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.UserSignupRequest;
import com.c14g22.stockwise.exception.EmailDuplicateException;
import com.c14g22.stockwise.exception.UsernameDuplicateException;
import com.c14g22.stockwise.model.Empleado;
import com.c14g22.stockwise.model.User;
import com.c14g22.stockwise.repository.UserRepository;
import com.c14g22.stockwise.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

  @Autowired
  private UserRepository userRepo;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public User saveUser(UserSignupRequest req) {
    if (userRepo.existsByEmail(req.getEmail())) {
      throw new EmailDuplicateException("El email: " + req.getEmail() + " ya existe.");
    }
    if (userRepo.existsByUsername(req.getUsername())) {
      throw new UsernameDuplicateException(
          "El nombre de usuario: " + req.getUsername() + " ya existe.");
    }
    User user = new User();
    user.setUsername(req.getUsername());
    user.setPassword(passwordEncoder.encode(req.getPassword()));
    user.setEmail(req.getEmail());
    userRepo.saveAndFlush(user);
    Empleado empleado = new Empleado();
    empleado.setNombre(req.getNombre());
    empleado.setApellido(req.getApellido());
    empleado.setEmail(req.getEmail());
    empleado.setFechaIngreso(LocalDateTime.now());
    empleado.setUser(user);
    user.setEmpleado(empleado);
    return userRepo.saveAndFlush(user);
  }

  @Override
  public User findByUsername(String username) {
    return userRepo.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException(username));
  }

  @Override
  public User findByEmail(String email) {
    return userRepo.findByEmail(email).orElseThrow(EntityNotFoundException::new);
  }

  @Override
  public User updatePasswordByEmail(String email, String password) {
    User user = this.findByEmail(email);
    user.setPassword(passwordEncoder.encode(password));
    return this.userRepo.save(user);
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<User> opt = userRepo.findByUsername(username);

    org.springframework.security.core.userdetails.User springUser = null;

    if (opt.isEmpty()) {
      throw new UsernameNotFoundException("User with username: " + username + " not found");
    } else {
      User user = opt.get();  //retrieving user from DB
//      Set<String> roles = user.getRoles();
      Set<GrantedAuthority> ga = new HashSet<>();
//      for(String role:roles) {
//        ga.add(new SimpleGrantedAuthority(role));
//      }

      springUser = new org.springframework.security.core.userdetails.User(
          username,
          user.getPassword(),
          ga);
    }

    return springUser;
  }
}
