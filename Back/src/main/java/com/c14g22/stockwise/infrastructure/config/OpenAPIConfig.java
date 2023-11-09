package com.c14g22.stockwise.infrastructure.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {

  @Bean
  public OpenAPI myOpenAPI() {
    Server devServer = new Server();
    String devUrl = "http://localhost:8080";
    devServer.setUrl(devUrl);
    devServer.setDescription("Server URL in Development environment");

    License mitLicense = new License().name("MIT License").url("https://choosealicense.com/licenses/mit/");

//    Info info = new Info()
//        .title("Tutorial Management API")
//        .version("1.0")
//        .contact(contact)
//        .description("This API exposes endpoints to manage tutorials.")
//        .termsOfService("https://www.bezkoder.com/terms")
//        .license(mitLicense);

    return new OpenAPI().servers(List.of(devServer));
  }

}
