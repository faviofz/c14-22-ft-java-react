package com.c14g22.stockwise.infrastructure.security;

import com.c14g22.stockwise.infrastructure.JwtUtil;
import com.c14g22.stockwise.domain.exception.JwtTokenExpiredException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class SecurityFilter extends OncePerRequestFilter {

  @Autowired
  private JwtUtil util;
  @Autowired
  private UserDetailsService userDetailsService;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
      FilterChain filterChain) throws ServletException, IOException, JwtTokenExpiredException {
    // Reading Token from Authorization Header
    String token= request.getHeader("Authorization");
    if(token !=null) {
      String username= util.getSubject(token);
      //if username is not null & Context Authentication must be null
      if(username !=null && SecurityContextHolder.getContext().getAuthentication()==null) {
        UserDetails user= userDetailsService.loadUserByUsername(username);
        boolean isValid=util.isValidToken(token, user.getUsername());
        if(isValid) {
          UsernamePasswordAuthenticationToken authToken=
              new UsernamePasswordAuthenticationToken(username, user.getPassword(), user.getAuthorities());
          authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
          SecurityContextHolder.getContext().setAuthentication(authToken);
        } else if (util.isTokenExpired(token)) {
          throw new JwtTokenExpiredException();
        }
      }
    }
    filterChain.doFilter(request, response);
  }
}
