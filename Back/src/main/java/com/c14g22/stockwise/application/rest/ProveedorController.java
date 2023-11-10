package com.c14g22.stockwise.application.rest;

import com.c14g22.stockwise.application.request.ProveedorRequest;
import com.c14g22.stockwise.application.response.ProveedorResponse;
import com.c14g22.stockwise.domain.service.ProveedorService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/proveedores")
public class ProveedorController {

  @Autowired
  private ProveedorService proveedorService;

  @GetMapping
  public List<ProveedorResponse> getProveedores() {
    return this.proveedorService.obtenerProveedores();
  }

  @GetMapping("/{id}")
  public ResponseEntity<ProveedorResponse> getProveedorById(@PathVariable Long id) {
    try {
      ProveedorResponse proveedorResponse = proveedorService.obtenerProveedorPorId(id);
      return ResponseEntity.ok(proveedorResponse);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.notFound().build();
    }
  }

  @PostMapping
  public ProveedorResponse createProveedor(@RequestBody ProveedorRequest proveedorRequest) {
    return this.proveedorService.guardarProveedor(proveedorRequest);
  }

  @PutMapping("/{id}")
  public ResponseEntity<ProveedorResponse> updateProveedor(@PathVariable Long id,
      @RequestBody ProveedorRequest proveedorRequest) {
    ProveedorResponse proveedorResponse = this.proveedorService.actualizarProveedor(id, proveedorRequest);
    return ResponseEntity.ok(proveedorResponse);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<ProveedorResponse> deleteProveedor(@PathVariable Long id) {
    this.proveedorService.eliminarProveedor(id);
    return ResponseEntity.noContent().build();
  }
}
