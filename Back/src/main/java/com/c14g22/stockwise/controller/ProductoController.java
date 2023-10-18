package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.dto.ProductoDto;
import com.c14g22.stockwise.model.Producto;
import com.c14g22.stockwise.service.ProductoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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

  private final ProductoService productoService;

  public ProductoController(ProductoService productoService) {
    this.productoService = productoService;
  }

  @GetMapping
  public List<Producto> getProductos(){
    return productoService.obtenerProductos();
  }

  @GetMapping("/{id}")
  public Producto getProductoById(@PathVariable Long id){
    return productoService.obtenerProductoPorId(id);
  }

  @PostMapping
  public Producto postProducto(@RequestBody Producto nuevoProducto){
    return productoService.guardarProducto(nuevoProducto);
  }

//  @PutMapping("/{id}")
//  public Producto putProducto(@PathVariable Long id, @RequestBody ProductoDto) {
//
//  }

  @DeleteMapping("/{id}")
  public void deleteProducto(@PathVariable Long id){
    productoService.borrarProducto(id);
  }
}
