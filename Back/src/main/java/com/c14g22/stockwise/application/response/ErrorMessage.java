package com.c14g22.stockwise.application.response;

import org.springframework.http.HttpStatus;

public record ErrorMessage(HttpStatus status, int code, String message) {

}
