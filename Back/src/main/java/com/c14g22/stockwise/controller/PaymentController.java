package com.c14g22.stockwise.controller;

import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.common.AddressRequest;
import com.mercadopago.client.common.IdentificationRequest;
import com.mercadopago.client.common.PhoneRequest;
import com.mercadopago.client.preference.PreferenceBackUrlsRequest;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferencePayerRequest;
import com.mercadopago.client.preference.PreferencePaymentMethodRequest;
import com.mercadopago.client.preference.PreferencePaymentMethodsRequest;
import com.mercadopago.client.preference.PreferencePaymentTypeRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PaymentController {

//  @PostMapping("/process_payment")
//  public ResponseEntity<PaymentResponse> processPayment(
//      @RequestBody ProcessPaymentRequest request) {
//    try {
//      OauthClient oauthClient = new OauthClient();
//
//      String authorizationCode = "TEST-8432157254301393-110116-0562ce409f5adc503b38f96a323fa926-621308335";
//      oauthClient.createCredential(authorizationCode, null);
//
//      PaymentClient client = new PaymentClient();
//
//      PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
//          .transactionAmount(request.transaction_amount()).token(authorizationCode)
//          .installments(request.installments()).paymentMethodId(request.payment_method_id()).payer(
//              PaymentPayerRequest.builder().email(request.payer().email()).identification(
//                  IdentificationRequest.builder().type(request.payer().identification().type())
//                      .number(request.payer().identification().number()).build()).build()).build();
//
//      Payment createdPayment = client.create(paymentCreateRequest);
//
//      PaymentResponse paymentResponse = new PaymentResponse(createdPayment.getId(),
//          String.valueOf(createdPayment.getStatus()), createdPayment.getStatusDetail());
//      return ResponseEntity.ok(paymentResponse);
//    } catch (MPApiException apiException) {
//      System.out.println(apiException.getApiResponse().getContent());
//      throw new MercadoPagoException(apiException.getApiResponse().getContent());
//    } catch (MPException exception) {
//      System.out.println(exception.getMessage());
//      throw new MercadoPagoException(exception.getMessage());
//    }
//  }

  @GetMapping("/createPreference")
  public String preferenceMP() throws MPException, MPApiException {
    MercadoPagoConfig.setAccessToken(
        "TEST-1308096199358299-110121-3997b10096a0437110903ef1928911bb-191771922");
    String url = "http://localhost:8080/feedback";

    PreferenceItemRequest itemRequest = PreferenceItemRequest.builder().id("1234").title("Games")
        .description("PS5").pictureUrl("").categoryId("games").quantity(2).currencyId("BRL")
        .unitPrice(new BigDecimal("4000")).build();
    List<PreferenceItemRequest> items = new ArrayList<>();
    items.add(itemRequest);

    PhoneRequest phoneRequest = PhoneRequest.builder().number("38917239812").areaCode("3865")
        .build();

    IdentificationRequest identificationRequest = IdentificationRequest.builder().type("CPF")
        .number("19119119100").build();

    AddressRequest addressRequest = AddressRequest.builder().streetName("Street")
        .streetNumber("123").zipCode("06233200").build();

    PreferencePayerRequest payerRequest = PreferencePayerRequest.builder()
        .name("Melina de los Angeles").surname("Valdez").email("melii.crack99@hotmail.com")
        .phone(phoneRequest).identification(identificationRequest).address(addressRequest).build();

    PreferenceBackUrlsRequest preferenceBackUrlsRequest = PreferenceBackUrlsRequest.builder()
        .success(url).failure(url).pending(url).build();

    List<PreferencePaymentMethodRequest> excludedPaymentMethods = new ArrayList<>();
    excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("amex").build());
    excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("argencard").build());
    excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("cabal").build());
    excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("cmr").build());
    excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("cencosud").build());
    excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("cordobesa").build());
    excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("diners").build());
    excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("tarshop").build());

    List<PreferencePaymentTypeRequest> excludedPaymentTypes = new ArrayList<>();
    excludedPaymentTypes.add(PreferencePaymentTypeRequest.builder().id("ticket").build());
    excludedPaymentTypes.add(PreferencePaymentTypeRequest.builder().id("debit_card").build());
    PreferencePaymentMethodsRequest preferencePaymentMethodsRequest = PreferencePaymentMethodsRequest.builder()
        .excludedPaymentMethods(excludedPaymentMethods).excludedPaymentTypes(excludedPaymentTypes)
        .installments(1).build();

    PreferenceRequest preferenceRequest = PreferenceRequest.builder()
        .payer(payerRequest)
        .items(items)
        .backUrls(preferenceBackUrlsRequest)
        .paymentMethods(preferencePaymentMethodsRequest)
        .autoReturn("approved")
        .statementDescriptor("MINEGOCIO")
        .build();

    PreferenceClient client = new PreferenceClient();

    Preference preference = client.create(preferenceRequest);
    return preference.getId();
  }

  @GetMapping("/feedback")
  public FeedbackRequest feedback(@RequestParam FeedbackRequest feedbackRequest) {
    return feedbackRequest;
  }

  public record FeedbackRequest(String payment_id, String status, String merchant_order_id) {

  }
}
