package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

@Service
public class EmailServiceImpl implements EmailService {

  @Autowired
  private JavaMailSender mailSender;

  @Override
  public void sendSimpleMessage(String to, String subject, String text) {
    SimpleMailMessage message = new SimpleMailMessage();

    message.setTo(to);
    message.setSubject(subject);
    message.setText(text);

    mailSender.send(message);
  }

  public MimeMessage createMimeMessage(){
    return mailSender.createMimeMessage();
  }

  @Override
  public void sendMimeMessage(String to, String subject, String message)
      throws MessagingException {
    MimeMessage mimeMessage = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
    helper.setTo(to);
    helper.setSubject(subject);
    helper.setText(message,true);

    mailSender.send(mimeMessage);
  }
}
