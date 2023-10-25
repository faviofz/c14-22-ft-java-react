package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Categoria;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class CategoriaRequest {

        private String nombre;

        @Override
        public String  toString() {
            return "CategoriaRequest{" +
                    "nombre='" + nombre;
        }
}
