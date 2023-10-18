package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.ProductoDto;
import com.c14g22.stockwise.model.Producto;
import com.c14g22.stockwise.repository.ProductoRepository;
import com.c14g22.stockwise.service.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoServiceImpl implements ProductoService {

  @Autowired
  ProductoRepository productoRepository;


  @Override
  public List<Producto> obtenerProductos() {
    return productoRepository.findAll();
  }

  @Override
  public Producto obtenerProductoPorId(Long id) {
    return productoRepository.findById(id).orElseThrow(EntityNotFoundException::new);
  }

  public Producto guardarProducto(Producto producto){
    return productoRepository.save(producto);
  }

  @Override
  public void actualizarProducto(Long id, ProductoDto productoDto) {
  }

  @Override
  public void borrarProducto(Long id) {
    productoRepository.deleteById(id);
  }
}
