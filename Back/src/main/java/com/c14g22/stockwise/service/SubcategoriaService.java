package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.SubcategoriaDto;
import com.c14g22.stockwise.model.Subcategoria;

import java.util.List;

public interface SubcategoriaService {

    List<Subcategoria> obtenerSubcategorias();

    Subcategoria obtenerSubcategoriaPorId(Long id);

    SubcategoriaDto guardarSubcategoria(SubcategoriaDto subcategoriaDto);

    void actualizarSubcategoria(Long id, SubcategoriaDto subcategoriaDto);

    void eliminarSubcategoria(Long id);

}
