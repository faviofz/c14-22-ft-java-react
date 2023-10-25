package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.dto.ProductoRequest;
import com.c14g22.stockwise.dto.ProductoResponse;
import com.c14g22.stockwise.model.Producto;
import com.c14g22.stockwise.service.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/productos")
public class ProductoController {

  @Autowired
  private ProductoService productoService;

  @GetMapping
  public List<Producto> getProductos() {
    return productoService.obtenerProductos();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Producto> getProductoById(@PathVariable Long id) {
    try {
      Producto producto = productoService.obtenerProductoPorId(id);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(productoService.obtenerProductoPorId(id));
  }

  @PostMapping
  public ResponseEntity<ProductoResponse> postProducto(
      @RequestBody ProductoRequest productoRequest) {
    try {
      ProductoResponse productoResponse = productoService.guardarProducto(productoRequest);
      return new ResponseEntity<>(productoResponse, HttpStatus.CREATED);
    } catch (Exception e) {
      return ResponseEntity.badRequest().build();
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<String> putProducto(@PathVariable Long id,
      @RequestBody ProductoRequest productoRequest) {
    try {
      productoService.actualizarProducto(id, productoRequest);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<ProductoResponse> deleteProducto(@PathVariable Long id) {
    productoService.eliminarProducto(id);
    return ResponseEntity.noContent().build();
  }
}
