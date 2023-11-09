package com.c14g22.stockwise.application.response;

import com.c14g22.stockwise.domain.model.Notificacion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NotificacionResponse {

    private Long id;
    private String titulo;
    private String descripcion;
    private LocalDate fecha;

    public NotificacionResponse(Notificacion notificacion){
        this.id = notificacion.getId();
        this.titulo = notificacion.getTitulo();
        this.descripcion = notificacion.getDescripcion();
        this.fecha = notificacion.getFecha();
    }
}
