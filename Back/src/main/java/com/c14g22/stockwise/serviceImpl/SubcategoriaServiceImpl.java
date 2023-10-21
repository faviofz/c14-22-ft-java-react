package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.SubcategoriaDto;
import com.c14g22.stockwise.model.Subcategoria;
import com.c14g22.stockwise.repository.SubcategoriaRepository;
import com.c14g22.stockwise.service.SubcategoriaService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubcategoriaServiceImpl implements SubcategoriaService {

    @Autowired
    private SubcategoriaRepository subcategoriaRepository;

    @Override
    public List<Subcategoria> obtenerSubcategorias() {
        return subcategoriaRepository.findAll();
    }

    @Override
    public Subcategoria obtenerSubcategoriaPorId(Long id) {
        return subcategoriaRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public SubcategoriaDto guardarSubcategoria(SubcategoriaDto subcategoriaDto) {
        Subcategoria subcategoria = new Subcategoria(subcategoriaDto);
        return new SubcategoriaDto(subcategoriaRepository.save(subcategoria));
    }

    @Override
    public void actualizarSubcategoria(Long id, SubcategoriaDto subcategoriaDto) {
        Subcategoria subcategoria = new Subcategoria(subcategoriaDto);
        subcategoriaRepository.save(subcategoria);
    }

    @Override
    public void eliminarSubcategoria(Long id) {
        subcategoriaRepository.deleteById(id);
    }
}
