package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.CategoriaDto;
import com.c14g22.stockwise.model.Categoria;
import com.c14g22.stockwise.repository.CategoriaRepository;
import com.c14g22.stockwise.service.CategoriaService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Override
    public List<Categoria> obtenerCategorias() {
        return categoriaRepository.findAll();
    }

    @Override
    public Categoria obtenerCategoriaPorId(Long id) {
        return categoriaRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public CategoriaDto guardarCategoria(CategoriaDto categoriaDto) {
        Categoria categoria = new Categoria(categoriaDto);
        return new CategoriaDto(categoriaRepository.save(categoria));
    }

    @Override
    public void actualizarCategoria(Long id, CategoriaDto categoriaDto) {
        Categoria categoria = new Categoria(categoriaDto);
        categoriaRepository.save(categoria);
    }

    @Override
    public void eliminarCategoria(Long id) {
        categoriaRepository.deleteById(id);

    }
}
