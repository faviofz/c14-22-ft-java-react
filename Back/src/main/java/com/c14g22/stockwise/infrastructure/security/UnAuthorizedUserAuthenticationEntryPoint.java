package com.c14g22.stockwise.infrastructure.security;

import com.c14g22.stockwise.infrastructure.JwtUtil;
import com.c14g22.stockwise.domain.exception.JwtTokenExpiredException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Component
public class UnAuthorizedUserAuthenticationEntryPoint implements AuthenticationEntryPoint {

  @Autowired
  private JwtUtil util;

  @Override
  public void commence(HttpServletRequest request, HttpServletResponse response,
      AuthenticationException authException) throws IOException, ServletException {
    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized user");
  }

  @ExceptionHandler(value = {JwtTokenExpiredException.class})
  public void commence(HttpServletRequest request, HttpServletResponse response,
      JwtTokenExpiredException authException) throws IOException, ServletException {
    response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Token expired");
  }
}
