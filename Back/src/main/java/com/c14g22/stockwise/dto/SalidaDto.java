package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Producto;
import com.c14g22.stockwise.model.Salida;
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
public class SalidaDto {

    private Long id;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fecha;
    private String motivo;
    private Producto producto;

    public SalidaDto(Salida salida) {

        this.id = salida.getId();
        this.fecha = salida.getFecha();
        this.motivo = salida.getMotivo();
        this.producto = salida.getProducto();

    }
}
