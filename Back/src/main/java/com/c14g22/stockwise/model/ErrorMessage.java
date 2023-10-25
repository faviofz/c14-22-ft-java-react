package com.c14g22.stockwise.model;

import org.springframework.http.HttpStatus;

public record ErrorMessage(HttpStatus status, String message) {

}
