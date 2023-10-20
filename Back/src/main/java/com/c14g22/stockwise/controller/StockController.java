package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Stock;
import com.c14g22.stockwise.repository.StockRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StockController {

    private final StockRepository stockRepository;

    public StockController(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    @GetMapping("/stocks")
    public List<Stock> getStocks() {
        return stockRepository.findAll();
    }

    @GetMapping("/stocks/{id}")
    public Stock getStock(@PathVariable Long id) {
        return stockRepository.findById(id).orElse(null);
    }

    @PostMapping("/stocks")
    public Stock createStock(@RequestBody Stock stock) {
        return stockRepository.save(stock);
    }

    @PutMapping("/stocks/{id}")
    public Stock updateStock(@PathVariable Long id, @RequestBody Stock stock) {
        stock.setId(id);
        return stockRepository.save(stock);
    }

    @DeleteMapping("/stocks/{id}")
    public void deleteStock(@PathVariable Long id) {
        stockRepository.deleteById(id);
    }
}

