package com.c14g22.stockwise.application.rest;

import com.c14g22.stockwise.application.MovimientoDto;
import com.c14g22.stockwise.application.request.ProductoRequest;
import com.c14g22.stockwise.application.response.ProductoResponse;
import com.c14g22.stockwise.application.request.StockPatchRequest;
import com.c14g22.stockwise.domain.enumeraciones.Tipo;
import com.c14g22.stockwise.domain.service.MovimientoService;
import com.c14g22.stockwise.domain.service.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
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
  @Autowired
  private MovimientoService movimientoService;

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
  public ResponseEntity<List<ProductoResponse>> agregarStock(@RequestBody
  List<StockPatchRequest> stockPatchRequest) {
    List<ProductoResponse> productoResponses = this.productoService.actualizarProductosSumarActual(
        stockPatchRequest);
    List<MovimientoDto> movimientoDtos = productoResponses.stream().map(pr -> new MovimientoDto(
        LocalDateTime.now(),
        stockPatchRequest.stream().filter(s -> s.id().equals(pr.getId())).findFirst().get()
            .actual(),
        Tipo.ENTRADA, pr.getNombre())).toList();
    this.movimientoService.guardarTodos(movimientoDtos);
    return ResponseEntity.ok(productoResponses);
  }

  @PatchMapping("/quitarStock")
  public ResponseEntity<List<ProductoResponse>> quitarStock(@RequestBody
  List<StockPatchRequest> stockPatchRequest) {
    List<ProductoResponse> productoResponses = this.productoService.actualizarProductosRestarActual(
        stockPatchRequest);
    List<MovimientoDto> movimientoDtos = productoResponses.stream().map(pr -> new MovimientoDto(
        LocalDateTime.now(),
        stockPatchRequest.stream().filter(s -> s.id().equals(pr.getId())).findFirst().get()
            .actual(), Tipo.SALIDA, pr.getNombre())).toList();
    this.movimientoService.guardarTodos(movimientoDtos);
    return ResponseEntity.ok(productoResponses);
  }
}
