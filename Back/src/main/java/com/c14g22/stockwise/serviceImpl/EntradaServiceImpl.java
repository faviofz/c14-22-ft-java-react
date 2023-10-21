package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.EntradaDto;
import com.c14g22.stockwise.model.Entrada;
import com.c14g22.stockwise.repository.EntradaRepository;
import com.c14g22.stockwise.service.EntradaService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class EntradaServiceImpl implements EntradaService {

    @Autowired
    private EntradaRepository entradaRepository;

    @Override
    public List<Entrada> obtenerEntradas() {
        return entradaRepository.findAll();
    }

    @Override
    public Entrada obtenerEntradaPorId(Long id) {
        return entradaRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public EntradaDto guardarEntrada(EntradaDto entradaDto) {
        Entrada entrada = new Entrada(entradaDto);
        return new EntradaDto(entradaRepository.save(entrada));
    }

    @Override
    public void actualizarEntrada(Long id, EntradaDto entradaDto) {
        Entrada entrada = new Entrada(entradaDto);
        entradaRepository.save(entrada);
    }

    @Override
    public void EliminarEntrada(Long id) {
        entradaRepository.deleteById(id);

    }
}
