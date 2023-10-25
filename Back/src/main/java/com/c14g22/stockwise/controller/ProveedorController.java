package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.dto.*;
import com.c14g22.stockwise.model.Proveedor;
import com.c14g22.stockwise.repository.ProveedorRepository;
import com.c14g22.stockwise.service.ProveedorService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proveedores")
public class ProveedorController {

    private final ProveedorRepository proveedorRepository;
    @Autowired
    private ProveedorService proveedorService;

    public ProveedorController(ProveedorRepository proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }

    @GetMapping("/proveedores")
    public List<Proveedor> getProveedores() {
        return this.proveedorService.obtenerProveedores();
    }

    @GetMapping("/proveedores/{id}")
    public ResponseEntity<Proveedor> getProveedorById(@PathVariable Long id) {
        try {
            Proveedor proveedor = proveedorService.obtenerProveedorPorId(id);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(proveedorService.obtenerProveedorPorId(id));
    }

    @PostMapping("/proveedores")
    public Proveedor createProveedor(@RequestBody Proveedor proveedor) {
        return proveedorRepository.save(proveedor);
    }

    @PutMapping("proveedodres({id}")
    public Proveedor updateProveedor(@PathVariable Long id, @RequestBody Proveedor proveedor) {
        proveedor.setId(id);
        return proveedorRepository.save(proveedor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProveedorResponse> deleteProveedor(@PathVariable Long id) {
        proveedorService.eliminarProveedor(id);
        return ResponseEntity.noContent().build();
    }
}
