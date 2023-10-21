package com.c14g22.stockwise.model;

import com.c14g22.stockwise.dto.StockDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "stocks")
@Getter
@Setter
@NoArgsConstructor
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stock_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long id;
    private Integer min;
    private Integer max;
    private Integer actual;

    public Stock(StockDto stockDto) {
        this.min = stockDto.getMin();
        this.max = stockDto.getMax();
        this.actual = stockDto.getActual();
    }

}
