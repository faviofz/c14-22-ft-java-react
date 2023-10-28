package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.UserSignupRequest;
import com.c14g22.stockwise.exception.EmailDuplicateException;
import com.c14g22.stockwise.exception.UsernameDuplicateException;
import com.c14g22.stockwise.model.User;
import com.c14g22.stockwise.repository.UserRepository;
import com.c14g22.stockwise.service.UserService;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
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
  public UUID saveUser(UserSignupRequest req) {
    if (userRepo.existsByEmail(req.getEmail())) {
      throw new EmailDuplicateException("El email: "+req.getEmail()+" ya existe.");
    }
    if(userRepo.existsByUsername(req.getUsername())){
      throw new UsernameDuplicateException("El nombre de usuario: "+req.getUsername()+" ya existe.");
    }
    User user = new User();
    user.setUsername(req.getUsername());
    user.setPassword(passwordEncoder.encode(req.getPassword()));
    user.setEmail(req.getEmail());
    return userRepo.save(user).getId();
  }

  @Override
  public Optional<User> findByUsername(String username) {
    return userRepo.findByUsername(username);
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
