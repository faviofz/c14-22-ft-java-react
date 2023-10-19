package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.dto.ProveedorDto;
import com.c14g22.stockwise.model.Proveedor;
import com.c14g22.stockwise.service.ProveedorService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/proveedores")
public class ProveedorController {

  @Autowired
  private ProveedorService proveedorService;

  @GetMapping
  public List<Proveedor> getProveedores() {
    return proveedorService.obtenerProveedores();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Proveedor> getProveedorById(@PathVariable Long id) {
    Proveedor proveedor;
    try {
      proveedor = proveedorService.obtenerProveedorPorId(id);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(proveedor);
  }

  @PostMapping
  public ResponseEntity<ProveedorDto> postProveedor(@RequestBody ProveedorDto proveedorDto) {
    ProveedorDto dto = proveedorService.guardarProveedor(proveedorDto);
    return ResponseEntity.ok(dto);
  }

//  @PutMapping("/{id}")
//  public Producto putProveedor(@PathVariable Long id, @RequestBody ProductoDto) {
//
//  }

  @DeleteMapping("/{id}")
  public void deleteProveedor(@PathVariable Long id) {
    proveedorService.eliminarProveedor(id);
  }
}