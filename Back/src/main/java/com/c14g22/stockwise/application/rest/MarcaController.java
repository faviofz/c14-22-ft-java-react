package com.c14g22.stockwise.application.rest;

import com.c14g22.stockwise.domain.model.Marca;
import com.c14g22.stockwise.domain.repository.MarcaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/marcas")
public class MarcaController {

    private final MarcaRepository marcaRepository;

    public MarcaController(MarcaRepository marcaRepository) {
        this.marcaRepository = marcaRepository;
    }

    @GetMapping
    public List<Marca> getMarcas() {
        return marcaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Marca getMarca(@PathVariable Long id) {
        return marcaRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Marca createMarca(@RequestBody Marca marca) {
        return marcaRepository.save(marca);
    }

    @PutMapping("/{id}")
    public Marca updateMarca(@PathVariable Long id, @RequestBody Marca marca) {
        marca.setId(id);
        return marcaRepository.save(marca);
    }

    @DeleteMapping("/{id}")
    public void deleteMarca(@PathVariable Long id) {
        marcaRepository.deleteById(id);
    }
}
