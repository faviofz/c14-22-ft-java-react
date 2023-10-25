package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.NotificacionRequest;
import com.c14g22.stockwise.dto.NotificacionResponse;
import com.c14g22.stockwise.model.Notificacion;
import com.c14g22.stockwise.repository.NotificacionRepository;

import java.util.List;

public interface NotificacionService {

    List<Notificacion> obtenerNotificaciones();

    Notificacion obtenerNotificacionPorId(Long id);

    NotificacionResponse guardarNotificacion(NotificacionRequest notificacionRequest);

    void actualizarNotificacion(Long id, NotificacionRequest notificacionRequest) throws Exception;

    void eliminarNotificacion(Long id);
}
