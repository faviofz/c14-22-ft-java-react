package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.CategoriaRequest;
import com.c14g22.stockwise.dto.CategoriaResponse;
import com.c14g22.stockwise.model.Categoria;

import java.util.List;

public interface CategoriaService {

    List<Categoria> obtenerCategorias();

    Categoria obtenerCategoriaPorId(Long id);

    Categoria obtenerCategoriaPorNombre(String nombre);

    CategoriaResponse guardarCategoria(CategoriaRequest categoriaRequest);

    CategoriaResponse actualizarCategoria(Long id, CategoriaRequest categoriaRequest);

    void eliminarCategoria(Long id);
}
