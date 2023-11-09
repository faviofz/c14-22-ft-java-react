package com.c14g22.stockwise.application.rest;

import com.c14g22.stockwise.domain.model.Categoria;
import com.c14g22.stockwise.domain.repository.CategoriaRepository;
import com.c14g22.stockwise.domain.service.CategoriaService;
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

    @GetMapping
    public List<Categoria> getCategorias() {
        return this.categoriaService.obtenerCategorias();
    }

    @GetMapping("/{id}")
    public Categoria getCategoria(@PathVariable Long id) {
        return this.categoriaService.obtenerCategoriaPorId(id);
    }

    @PostMapping
    public Categoria createCategoria(@RequestBody Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @PutMapping("/{id}")
    public Categoria updateCategoria(@PathVariable Long id, @RequestBody Categoria categoria) {
        categoria.setId(id);
        return categoriaRepository.save(categoria);
    }

    @DeleteMapping("/{id}")
    public void deleteCategoria(@PathVariable Long id) {
        categoriaRepository.deleteById(id);
    }
}
