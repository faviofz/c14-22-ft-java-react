package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Subcategoria;
import com.c14g22.stockwise.repository.SubcategoriaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SubcategoriaController {

    private final SubcategoriaRepository subcategoriaRepository;

    public SubcategoriaController(SubcategoriaRepository subcategoriaRepository) {
        this.subcategoriaRepository = subcategoriaRepository;
    }

    @GetMapping("/subcategorias")
    public List<Subcategoria> getSubcategorias() {
        return subcategoriaRepository.findAll();
    }

    @GetMapping("/subcategorias/{id}")
    public Subcategoria getSubcategoria(@PathVariable Long id) {
        return subcategoriaRepository.findById(id).orElse(null);
    }

    @PostMapping("/subcategorias")
    public Subcategoria createSubcategoria(@RequestBody Subcategoria subcategoria) {
        return subcategoriaRepository.save(subcategoria);
    }

    @PutMapping("/subcategorias/{id}")
    public Subcategoria updateSubcategoria(@PathVariable Long id, @RequestBody Subcategoria subcategoria) {
        subcategoria.setId(id);
        return subcategoriaRepository.save(subcategoria);
    }

    @DeleteMapping("/subcategorias/{id}")
    public void deleteSubcategoria(@PathVariable Long id) {
        subcategoriaRepository.deleteById(id);
    }
}

