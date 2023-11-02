package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.dto.PaymentResponse;
import com.c14g22.stockwise.dto.ProcessPaymentRequest;
import com.c14g22.stockwise.exception.MercadoPagoException;
import com.mercadopago.client.common.IdentificationRequest;
import com.mercadopago.client.payment.PaymentClient;
import com.mercadopago.client.payment.PaymentCreateRequest;
import com.mercadopago.client.payment.PaymentPayerRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.payment.Payment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentController {

  @PostMapping("/process_payment ")
  public ResponseEntity<PaymentResponse> processPayment(@RequestBody ProcessPaymentRequest request) {
    try {
      PaymentClient client = new PaymentClient();

      PaymentCreateRequest paymentCreateRequest =
          PaymentCreateRequest.builder()
              .transactionAmount(request.transaction_amount())
              .token(request.token())
              .installments(request.installments())
              .paymentMethodId(request.payment_method_id())
              .payer(
                  PaymentPayerRequest.builder()
                      .email(request.payer().email())
                      .identification(
                          IdentificationRequest.builder()
                              .type(request.payer().identification().type())
                              .number(request.payer().identification().number())
                              .build())
                      .build())
              .build();

      Payment createdPayment = client.create(paymentCreateRequest);

      PaymentResponse paymentResponse = new PaymentResponse(
          createdPayment.getId(),
          String.valueOf(createdPayment.getStatus()),
          createdPayment.getStatusDetail());
      return ResponseEntity.ok(paymentResponse);
    } catch (
        MPApiException apiException) {
      System.out.println(apiException.getApiResponse().getContent());
      throw new MercadoPagoException(apiException.getApiResponse().getContent());
    } catch (
        MPException exception) {
      System.out.println(exception.getMessage());
      throw new MercadoPagoException(exception.getMessage());
    }
  }

}
