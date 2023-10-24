package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.ProductoRequest;
import com.c14g22.stockwise.dto.ProductoResponse;
import com.c14g22.stockwise.dto.ProveedorDto;
import com.c14g22.stockwise.model.Categoria;
import com.c14g22.stockwise.model.Marca;
import com.c14g22.stockwise.model.Producto;
import com.c14g22.stockwise.model.Proveedor;
import com.c14g22.stockwise.repository.CategoriaRepository;
import com.c14g22.stockwise.repository.MarcaRepository;
import com.c14g22.stockwise.repository.ProductoRepository;
import com.c14g22.stockwise.repository.ProveedorRepository;
import com.c14g22.stockwise.service.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoServiceImpl implements ProductoService {

  @Autowired
  private ProductoRepository productoRepository;
  @Autowired
  private CategoriaRepository categoriaRepository;
  @Autowired
  private ProveedorRepository proveedorRepository;
  @Autowired
  private MarcaRepository marcaRepository;

  @Override
  public List<Producto> obtenerProductos() {
    return productoRepository.findAll();
  }

  @Override
  public Producto obtenerProductoPorId(Long id) {
    return productoRepository.findById(id).orElseThrow(EntityNotFoundException::new);
  }

  @Override
  public ProductoResponse guardarProducto(ProductoRequest req) {
    Producto producto = new Producto(req);
    if (!req.getCategoria().isBlank()) {
      Optional<Categoria> categoria = categoriaRepository.findByNombre(req.getCategoria());
      if (categoria.isPresent()){
          producto.setCategoria(categoria.get());
      }else {
          categoriaRepository.save(new Categoria(req.getCategoria()));
      }
    }
    if(!req.getProveedor().isBlank()) {
      Proveedor proveedor = proveedorRepository.findByNombre(req.getProveedor()).orElseThrow(EntityNotFoundException::new);
      producto.setProveedor(proveedor);
    }
    if(!req.getMarca().isBlank()){
      Optional<Marca> marca = marcaRepository.findByNombre(req.getMarca());
      if (marca.isPresent()){
        producto.setMarca(marca.get());
      }else {
        Marca nuevaMarca = marcaRepository.save(new Marca(req.getMarca()));
        producto.setMarca(nuevaMarca);
      }
    }
    Producto saved = productoRepository.save(producto);
    return new ProductoResponse(saved);
  }

  @Override
  public void actualizarProducto(Long id, ProductoRequest productoRequest) {
    Producto producto = new Producto(productoRequest);
    productoRepository.save(producto);
  }

  @Override
  public void eliminarProducto(Long id) {
    productoRepository.deleteById(id);
  }
}
