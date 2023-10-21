package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.StockDto;
import com.c14g22.stockwise.model.Stock;

import java.util.List;

public interface StockService {

    List<Stock> obtenerStocks();

    Stock obtenerStockPorId(Long id);

    StockDto guardarStock(StockDto stockDto);

    void actualizarStock(Long id, StockDto stockDto);

    void eliminarStock(Long id);
}
