package com.c14g22.stockwise;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import java.util.Base64;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StockwiseApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockwiseApplication.class, args);
	}

}
