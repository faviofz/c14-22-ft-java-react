package com.c14g22.stockwise.repository;

import com.c14g22.stockwise.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Long> {
}
