package com.c14g22.stockwise.infrastructure.serviceImpl;

import com.c14g22.stockwise.application.request.NotificacionRequest;
import com.c14g22.stockwise.application.response.NotificacionResponse;
import com.c14g22.stockwise.domain.model.Notificacion;
import com.c14g22.stockwise.domain.service.NotificacionService;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class NotificacionServiceImpl implements NotificacionService {
    @Override
    public List<Notificacion> obtenerNotificaciones() {
        return null;
    }

    @Override
    public Notificacion obtenerNotificacionPorId(Long id) {
        return null;
    }

    @Override
    public NotificacionResponse guardarNotificacion(NotificacionRequest notificacionRequest) {
        return null;
    }

    @Override
    public void actualizarNotificacion(Long id, NotificacionRequest notificacionRequest) throws Exception {

    }

    @Override
    public void eliminarNotificacion(Long id) {

    }
}
