package com.c14g22.stockwise.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

public interface EmailService {

  public void sendSimpleMessage(String to, String subject, String text);

  MimeMessage createMimeMessage();

  public void sendMimeMessage(String to, String subject, String message)
      throws MessagingException;
}
