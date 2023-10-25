package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.NotificacionRequest;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;

@Entity
@Table(name = "notificaciones")
@Getter
@Setter
@NoArgsConstructor
public class Notificacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notificacion_id")
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    private String titulo;
    private String descripcion;
    @Column(name = "fecha_notificacion")
    private LocalDate fecha;

    public Notificacion(NotificacionRequest notificacionRequest) {
        this.titulo = notificacionRequest.getTitulo();
        this.descripcion = notificacionRequest.getDescripcion();
        this.fecha = notificacionRequest.getFecha();
    }

}
