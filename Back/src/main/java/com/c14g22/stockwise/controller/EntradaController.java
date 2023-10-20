package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Entrada;
import com.c14g22.stockwise.repository.EntradaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EntradaController {

    @Autowired
    private EntradaRepository entradaRepository;

    @RequestMapping("/entradas")
    public List<Entrada> getAllEntradas() {
        return entradaRepository.findAll();
    }

    @RequestMapping("/entradas/{id}")
    public Entrada getEntradaById(@PathVariable Long id) {
        return entradaRepository.findById(id).orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/entradas")
    public Entrada createEntrada(@RequestBody Entrada entrada) {
        return entradaRepository.save(entrada);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/entradas/{id}")
    public Entrada updateEntrada(@PathVariable Long id, @RequestBody Entrada entrada) {
        entrada.setId(id);
        return entradaRepository.save(entrada);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/entradas/{id}")
    public void deleteEntrada(@PathVariable Long id) {
        entradaRepository.deleteById(id);
    }
}

