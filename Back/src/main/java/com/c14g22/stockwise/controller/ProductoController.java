package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.dto.ProductoDto;
import com.c14g22.stockwise.model.Producto;
import com.c14g22.stockwise.service.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/productos")
public class ProductoController {

  private final ProductoService productoService;

  public ProductoController(ProductoService productoService) {
    this.productoService = productoService;
  }

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
  public ResponseEntity<ProductoDto> postProducto(@RequestBody ProductoDto productoDto) {
    ProductoDto nuevoProducto = productoService.guardarProducto(productoDto);
    return ResponseEntity.ok(nuevoProducto);
  }

//  @PutMapping("/{id}")
//  public Producto putProducto(@PathVariable Long id, @RequestBody ProductoDto) {
//
//  }

  @DeleteMapping("/{id}")
  public void deleteProducto(@PathVariable Long id) {
    productoService.eliminarProducto(id);
  }
}
