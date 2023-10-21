package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Stock;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StockDto {

    private Long id;
    private Integer min;
    private Integer max;
    private Integer actual;

    public StockDto(Stock stock) {

        this.id = stock.getId();
        this.min = stock.getMin();
        this.max = stock.getMax();
        this.actual = stock.getActual();
    }
}
