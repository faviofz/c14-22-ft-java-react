package com.c14g22.stockwise.infrastructure;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import java.util.Date;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

  private final SecretKey secret_key = SIG.HS256.key().build();

  public String generateToken(String subject) {
    return Jwts.builder().id(UUID.randomUUID().toString()).subject(subject).issuer("stockwise")
        .issuedAt(new Date(System.currentTimeMillis()))
        .expiration(new Date(System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(10)))
        .signWith(secret_key).compact();
  }


  public Claims getClaims(String token) {
    try{
      return Jwts.parser().verifyWith(secret_key).build().parseSignedClaims(token).getPayload();
    }catch (ExpiredJwtException ex){
      return ex.getClaims();
    }
  }

  public boolean isValidToken(String token) {
    return !this.isTokenExpired(token);
  }

  public boolean isValidToken(String token, String username) {
    return (username.equals(getSubject(token)) && !isTokenExpired(token));
  }

  public boolean isTokenExpired(String token) {
    return this.getExpirationDate(token).before(new Date(System.currentTimeMillis()));
  }

  public Date getExpirationDate(String token) {
    return getClaims(token).getExpiration();
  }

  public String getSubject(String token) {
    return getClaims(token).getSubject();
  }

}
