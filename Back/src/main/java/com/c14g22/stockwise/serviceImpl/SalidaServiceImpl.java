package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.SalidaDto;
import com.c14g22.stockwise.model.Salida;
import com.c14g22.stockwise.repository.SalidaRepository;
import com.c14g22.stockwise.service.SalidaService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalidaServiceImpl implements SalidaService {

    @Autowired
    private SalidaRepository salidaRepository;

    @Override
    public List<Salida> obtenerSalidas() {
        return salidaRepository.findAll();
    }

    @Override
    public Salida obtenerSalidaPorId(Long id) {
        return salidaRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public SalidaDto guardarSalida(SalidaDto salidaDto) {
        Salida salida = new Salida(salidaDto);
        return new SalidaDto(salidaRepository.save(salida));
    }

    @Override
    public void actualizarSalida(Long id, SalidaDto salidaDto) {
        Salida salida = new Salida(salidaDto);
        salidaRepository.save(salida);
    }

    @Override
    public void eliminarSalida(Long id) {
        salidaRepository.deleteById(id);
    }
}
