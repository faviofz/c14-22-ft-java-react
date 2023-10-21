package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.StockDto;
import com.c14g22.stockwise.model.Stock;
import com.c14g22.stockwise.repository.StockRepository;
import com.c14g22.stockwise.service.StockService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public List<Stock> obtenerStocks() {
        return stockRepository.findAll();
    }

    @Override
    public Stock obtenerStockPorId(Long id) {
        return stockRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public StockDto guardarStock(StockDto stockDto) {
        Stock stock = new Stock(stockDto);
        return new StockDto(stockRepository.save(stock));
    }

    @Override
    public void actualizarStock(Long id, StockDto stockDto) {
        Stock stock = new Stock(stockDto);
        stockRepository.save(stock);
    }

    @Override
    public void eliminarStock(Long id) {
        stockRepository.deleteById(id);
    }
}
