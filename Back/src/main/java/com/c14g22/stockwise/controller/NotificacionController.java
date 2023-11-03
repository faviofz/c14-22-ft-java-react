package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Categoria;
import com.c14g22.stockwise.model.Notificacion;
import com.c14g22.stockwise.repository.CategoriaRepository;
import com.c14g22.stockwise.repository.NotificacionRepository;
import com.c14g22.stockwise.service.NotificacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/notificaciones")
public class NotificacionController {

    private final NotificacionRepository notificacionRepository;
    @Autowired
    private NotificacionService notificacionService;

    public NotificacionController(NotificacionRepository notificacionRepository) {
        this.notificacionRepository = notificacionRepository;
    }

    @GetMapping
    public List<Notificacion> getNotificaciones() {
        return notificacionService.obtenerNotificaciones();
    }

    @GetMapping("/{id}")
    public Notificacion getNotificacion(@PathVariable Long id) {
        return this.notificacionService.obtenerNotificacionPorId(id);
    }

    @PostMapping
    public Notificacion createNotificacion(@RequestBody Notificacion notificacion) {
        return notificacionRepository.save(notificacion);
    }

    @PutMapping("/{id}")
    public Notificacion updateNotificacion(@PathVariable Long id, @RequestBody Notificacion notificacion) {
        notificacion.setId(id);
        return notificacionRepository.save(notificacion);
    }

    @DeleteMapping("/{id}")
    public void deleteNotificacion(@PathVariable Long id) {
        notificacionRepository.deleteById(id);
    }

}
