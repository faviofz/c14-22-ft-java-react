package com.c14g22.stockwise.domain.service;

import com.c14g22.stockwise.application.request.CategoriaRequest;
import com.c14g22.stockwise.application.response.CategoriaResponse;
import com.c14g22.stockwise.domain.model.Categoria;

import java.util.List;

public interface CategoriaService {

    List<Categoria> obtenerCategorias();

    Categoria obtenerCategoriaPorId(Long id);

    Categoria obtenerCategoriaPorNombre(String nombre);

    CategoriaResponse guardarCategoria(CategoriaRequest categoriaRequest);

    CategoriaResponse actualizarCategoria(Long id, CategoriaRequest categoriaRequest);

    void eliminarCategoria(Long id);
}
