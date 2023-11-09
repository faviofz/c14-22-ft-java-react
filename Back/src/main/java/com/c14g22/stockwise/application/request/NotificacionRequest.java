package com.c14g22.stockwise.application.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NotificacionRequest {

    private String titulo;
    private String descripcion;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fecha;

    @Override
    public String toString() {
        return "NotificacionRequest{" +
                "titulo='" + titulo + '\'' +
                "descripcion='" + descripcion + '\'' +
                "fecha='" + fecha + '\'' +
                '}';
    }
}