package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.CategoriaDto;
import com.c14g22.stockwise.model.Categoria;

import java.util.List;

public interface CategoriaService {

    List<Categoria> obtenerCategorias();

    Categoria obtenerCategoriaPorId(Long id);

    CategoriaDto guardarCategoria(CategoriaDto categoriaDto);

    void actualizarCategoria(Long id, CategoriaDto categoriaDto);

    void eliminarCategoria(Long id);
}
