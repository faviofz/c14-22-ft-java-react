package com.c14g22.stockwise.infrastructure.serviceImpl;

import com.c14g22.stockwise.application.request.CategoriaRequest;
import com.c14g22.stockwise.application.response.CategoriaResponse;
import com.c14g22.stockwise.domain.exception.notfound.CategoriaNotFoundException;
import com.c14g22.stockwise.domain.model.Categoria;
import com.c14g22.stockwise.domain.repository.CategoriaRepository;
import com.c14g22.stockwise.domain.service.CategoriaService;
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
        return categoriaRepository.findById(id).orElseThrow(() -> new CategoriaNotFoundException(id));
    }

    @Override
    public Categoria obtenerCategoriaPorNombre(String nombre) {
        return categoriaRepository.findByNombre(nombre).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public CategoriaResponse guardarCategoria(CategoriaRequest categoriaRequest) {
        Categoria categoria = new Categoria(categoriaRequest);
        return new CategoriaResponse(categoriaRepository.save(categoria));
    }

    @Override
    public CategoriaResponse actualizarCategoria(Long id, CategoriaRequest categoriaRequest) {
        Categoria categoria = this.categoriaRepository.findById(id).orElseThrow(CategoriaNotFoundException::new);
        categoria.setNombre(categoriaRequest.getNombre());
        return new CategoriaResponse(categoriaRepository.save(categoria));
    }

    @Override
    public void eliminarCategoria(Long id) {
        categoriaRepository.deleteById(id);
    }
}
