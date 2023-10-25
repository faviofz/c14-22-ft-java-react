package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Categoria;
import com.c14g22.stockwise.model.Entrada;
import com.c14g22.stockwise.repository.CategoriaRepository;
import com.c14g22.stockwise.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    private final CategoriaRepository categoriaRepository;
    @Autowired
    private CategoriaService categoriaService;

    public CategoriaController(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @GetMapping("/categorias")
    public List<Categoria> getCategorias() {
        return this.categoriaService.obtenerCategorias();
    }

    @GetMapping("/categorias/{id}")
    public Categoria getCategoria(@PathVariable Long id) {
        return this.categoriaService.obtenerCategoriaPorId(id);
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
