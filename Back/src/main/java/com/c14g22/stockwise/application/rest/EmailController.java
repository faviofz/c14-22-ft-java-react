package com.c14g22.stockwise.application.rest;

import com.c14g22.stockwise.application.request.EmailDetails;
import com.c14g22.stockwise.domain.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/email")
public class EmailController {

  @Autowired
  private EmailService emailService;

  @PostMapping("/send")
  public String sendEmail(@RequestBody EmailDetails emailDetails){
    emailService.sendSimpleMessage(emailDetails.to(), emailDetails.subject(),
        emailDetails.message());
    return "Email sended";
  }
}
