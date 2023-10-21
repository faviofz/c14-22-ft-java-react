package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.MarcaDto;
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
        return marcaRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public MarcaDto guardarMarca(MarcaDto marcaDto) {
        Marca marca = new Marca(marcaDto);
        return new MarcaDto(marcaRepository.save(marca));
    }

    @Override
    public void actualizarMarca(Long id, MarcaDto marcaDto) {
        Marca marca = new Marca(marcaDto);
        marcaRepository.save(marca);
    }

    @Override
    public void eliminarMarca(Long id) {
        marcaRepository.deleteById(id);
    }
}
