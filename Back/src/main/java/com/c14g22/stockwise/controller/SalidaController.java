package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Salida;
import com.c14g22.stockwise.repository.SalidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SalidaController {

    @Autowired
    private SalidaRepository salidaRepository;

    @GetMapping("/salidas")
    public List<Salida> getAllSalidas() {
        return salidaRepository.findAll();
    }

    @GetMapping("/salidas/{id}")
    public Salida getSalidaById(@PathVariable Long id) {
        return salidaRepository.findById(id).orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/salidas")
    public Salida createSalida(@RequestBody Salida salida) {
        return salidaRepository.save(salida);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/salidas/{id}")
    public Salida updateSalida(@PathVariable Long id, @RequestBody Salida salida) {
        salida.setId(id);
        return salidaRepository.save(salida);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/salidas/{id}")
    public void deleteSalida(@PathVariable Long id) {
        salidaRepository.deleteById(id);
    }
}
