package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.dto.ProductoRequest;
import com.c14g22.stockwise.dto.ProductoResponse;
import com.c14g22.stockwise.dto.StockPatchRequest;
import com.c14g22.stockwise.service.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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
  public List<ProductoResponse> getProductos() {
    return this.productoService.obtenerProductos();
  }

  @GetMapping("/{id}")
  public ResponseEntity<ProductoResponse> getProductoById(@PathVariable Long id) {
    try {
      ProductoResponse productoResponse = productoService.obtenerProductoPorId(id);
      return ResponseEntity.ok(productoResponse);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.notFound().build();
    }
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
  public ResponseEntity<ProductoResponse> putProducto(@PathVariable Long id,
      @RequestBody ProductoRequest productoRequest) {
    ProductoResponse productoResponse = this.productoService.actualizarProducto(id,
        productoRequest);
    return ResponseEntity.ok(productoResponse);

  }

  @DeleteMapping("/{id}")
  public ResponseEntity<ProductoResponse> deleteProducto(@PathVariable Long id) {
    this.productoService.eliminarProducto(id);
    return ResponseEntity.noContent().build();
  }

  @PatchMapping("/agregarStock")
  public ResponseEntity<ProductoResponse> agregarStock(@RequestBody
  List<StockPatchRequest> stockPatchRequest) {
    this.productoService.actualizarProductosSumarActual(stockPatchRequest);
    return ResponseEntity.noContent().build();
  }

  @PatchMapping("/quitarStock")
  public ResponseEntity<ProductoResponse> quitarStock(@RequestBody
  List<StockPatchRequest> stockPatchRequest) {
    this.productoService.actualizarProductosRestarActual(stockPatchRequest);
    return ResponseEntity.noContent().build();
  }
}
