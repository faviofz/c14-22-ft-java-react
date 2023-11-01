package com.c14g22.stockwise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public record EmailDetails(String to, String subject, String message) {}
