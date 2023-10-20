package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Categoria;
import com.c14g22.stockwise.model.Entrada;
import com.c14g22.stockwise.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class CategoriaController {

    private final CategoriaRepository categoriaRepository;

    public CategoriaController(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @GetMapping("/categorias")
    public List<Categoria> getCategorias() {
        return categoriaRepository.findAll();
    }

    @GetMapping("/categorias/{id}")
    public Categoria getCategoria(@PathVariable Long id) {
        return categoriaRepository.findById(id).orElse(null);
    }

    @PostMapping("/categorias")
    public Categoria createCategoria(@RequestBody Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @PutMapping("/categorias/{id}")
    public Categoria updateCategoria(@PathVariable Long id, @RequestBody Categoria categoria) {
        categoria.setId(id);
        return categoriaRepository.save(categoria);
    }

    @DeleteMapping("/categorias/{id}")
    public void deleteCategoria(@PathVariable Long id) {
        categoriaRepository.deleteById(id);
    }
}
