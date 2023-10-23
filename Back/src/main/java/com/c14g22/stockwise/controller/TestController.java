package com.c14g22.stockwise.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

  @GetMapping
  public String testGet(){
    return "GET";
  }

  @PostMapping
  public String testPost(){
    return "POST";
  }

  @PutMapping
  public String testPut(){
    return "PUT";
  }
  @DeleteMapping
  public String testDelete(){
    return "DELETE";
  }
}
