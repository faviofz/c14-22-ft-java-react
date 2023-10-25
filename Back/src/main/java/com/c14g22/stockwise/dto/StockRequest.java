package com.c14g22.stockwise.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StockRequest {

    private Integer min;
    private Integer max;
    private Integer actual;

    @Override
    public String toString() {
        return "StockRequest{" +
                "min='" + min + '\'' +
                "max='" + max + '\'' +
                "actual='" + actual + '\'' +
                '}';

    }
}
