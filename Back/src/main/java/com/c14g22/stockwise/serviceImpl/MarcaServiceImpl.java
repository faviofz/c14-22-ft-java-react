package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.MarcaRequest;
import com.c14g22.stockwise.dto.MarcaResponse;
import com.c14g22.stockwise.exception.notfound.MarcaNotFoundException;
import com.c14g22.stockwise.model.Marca;
import com.c14g22.stockwise.repository.MarcaRepository;
import com.c14g22.stockwise.service.MarcaService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class MarcaServiceImpl implements MarcaService {

    @Autowired
    private MarcaRepository marcaRepository;


    @Override
    public List<Marca> obtenerMarcas() {
        return marcaRepository.findAll();
    }

    @Override
    public Marca obtenerMarcaPorId(Long id) {
        return marcaRepository.findById(id).orElseThrow(() -> new MarcaNotFoundException(id));
    }

    @Override
    public Marca obtenerMarcaPorNombre(String nombre) {
        return marcaRepository.findByNombre(nombre).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public MarcaResponse guardarMarca(MarcaRequest marcaRequest) {
        Marca marca = new Marca(marcaRequest);
        return new MarcaResponse(marcaRepository.save(marca));
    }

    @Override
    public MarcaResponse actualizarMarca(Long id, MarcaRequest marcaRequest) {
        Marca marca = new Marca(marcaRequest);
        return new MarcaResponse(marcaRepository.save(marca));
    }

    @Override
    public void eliminarMarca(Long id) {
        marcaRepository.deleteById(id);
    }
}
