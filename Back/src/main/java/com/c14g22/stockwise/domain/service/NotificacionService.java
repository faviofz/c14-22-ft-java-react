package com.c14g22.stockwise.domain.service;

import com.c14g22.stockwise.application.request.NotificacionRequest;
import com.c14g22.stockwise.application.response.NotificacionResponse;
import com.c14g22.stockwise.domain.model.Notificacion;

import java.util.List;

public interface NotificacionService {

    List<Notificacion> obtenerNotificaciones();

    Notificacion obtenerNotificacionPorId(Long id);

    NotificacionResponse guardarNotificacion(NotificacionRequest notificacionRequest);

    void actualizarNotificacion(Long id, NotificacionRequest notificacionRequest) throws Exception;

    void eliminarNotificacion(Long id);
}
