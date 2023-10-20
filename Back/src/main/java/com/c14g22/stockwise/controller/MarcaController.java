package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Marca;
import com.c14g22.stockwise.repository.MarcaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MarcaController {

    private final MarcaRepository marcaRepository;

    public MarcaController(MarcaRepository marcaRepository) {
        this.marcaRepository = marcaRepository;
    }

    @GetMapping("/marcas")
    public List<Marca> getMarcas() {
        return marcaRepository.findAll();
    }

    @GetMapping("/marcas/{id}")
    public Marca getMarca(@PathVariable Long id) {
        return marcaRepository.findById(id).orElse(null);
    }

    @PostMapping("/marcas")
    public Marca createMarca(@RequestBody Marca marca) {
        return marcaRepository.save(marca);
    }

    @PutMapping("/marcas/{id}")
    public Marca updateMarca(@PathVariable Long id, @RequestBody Marca marca) {
        marca.setId(id);
        return marcaRepository.save(marca);
    }

    @DeleteMapping("/marcas/{id}")
    public void deleteMarca(@PathVariable Long id) {
        marcaRepository.deleteById(id);
    }
}
