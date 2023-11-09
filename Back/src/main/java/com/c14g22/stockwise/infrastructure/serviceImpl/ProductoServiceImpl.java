package com.c14g22.stockwise.infrastructure.serviceImpl;

import com.c14g22.stockwise.application.request.ProductoRequest;
import com.c14g22.stockwise.application.response.ProductoResponse;
import com.c14g22.stockwise.application.request.StockPatchRequest;
import com.c14g22.stockwise.domain.exception.notfound.ProductoNotFoundException;
import com.c14g22.stockwise.domain.model.Categoria;
import com.c14g22.stockwise.domain.model.Marca;
import com.c14g22.stockwise.domain.model.Producto;
import com.c14g22.stockwise.domain.model.Proveedor;
import com.c14g22.stockwise.domain.repository.CategoriaRepository;
import com.c14g22.stockwise.domain.repository.MarcaRepository;
import com.c14g22.stockwise.domain.repository.ProductoRepository;
import com.c14g22.stockwise.domain.repository.ProveedorRepository;
import com.c14g22.stockwise.domain.service.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
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
  public List<ProductoResponse> obtenerProductos() {
    List<Producto> productoList = this.productoRepository.findAll();
    return productoList.stream().map(ProductoResponse::new).toList();
  }

  @Override
  public ProductoResponse obtenerProductoPorId(Long id) {
    Producto producto = this.productoRepository.findById(id)
        .orElseThrow(() -> new ProductoNotFoundException(id));
    return new ProductoResponse(producto);
  }

  @Override
  public ProductoResponse guardarProducto(ProductoRequest req) throws NullPointerException {
    Producto producto = new Producto(req);
    if(productoRepository.existsBySlogan(producto.getSlogan())){
      throw new DuplicateKeyException("Slogan ya existe: " + producto.getSlogan());
    }
    if (!req.getCategoria().isBlank()) {
      Optional<Categoria> categoria = categoriaRepository.findByNombre(req.getCategoria());
      if (categoria.isPresent()) {
        producto.setCategoria(categoria.get());
      } else {
        categoriaRepository.save(new Categoria(req.getCategoria()));
      }
    }
    if (!req.getProveedor().isBlank()) {
      Proveedor proveedor = proveedorRepository.findByEmail(req.getProveedor())
          .orElseThrow(EntityNotFoundException::new);
      producto.setProveedor(proveedor);
    }
    if (!req.getMarca().isBlank()) {
      Optional<Marca> marca = marcaRepository.findByNombre(req.getMarca());
      if (marca.isPresent()) {
        producto.setMarca(marca.get());
      } else {
        Marca nuevaMarca = marcaRepository.save(new Marca(req.getMarca()));
        producto.setMarca(nuevaMarca);
      }
    }
    Producto saved = productoRepository.save(producto);
    return new ProductoResponse(saved);
  }

  @Override
  public ProductoResponse actualizarProducto(Long id, ProductoRequest productoRequest)
      throws NullPointerException {
    Producto producto = productoRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    producto.setNombre(productoRequest.getNombre());
    producto.setImagen(productoRequest.getImagen());
    producto.setCosto(productoRequest.getCosto());
    producto.setImpuesto(productoRequest.getImpuesto());
    producto.setFechaVencimiento(productoRequest.getFechaVencimiento());
    producto.setMin(productoRequest.getMin());
    producto.setMax(productoRequest.getMax());
    producto.setActual(productoRequest.getActual());
    if (productoRequest.getCategoria() != null && !productoRequest.getCategoria()
        .equals(producto.getCategoria().getNombre())) {
      Categoria categoria = categoriaRepository.findByNombre(productoRequest.getCategoria())
          .orElseThrow(EntityNotFoundException::new);
      producto.setCategoria(categoria);
    }
    if (productoRequest.getProveedor() != null && !productoRequest.getProveedor()
        .equals(producto.getProveedor().getEmail())) {
      Proveedor proveedor = proveedorRepository.findByEmail(productoRequest.getProveedor())
          .orElseThrow(EntityNotFoundException::new);
      producto.setProveedor(proveedor);
    }
    if (productoRequest.getMarca() != null && !productoRequest.getMarca()
        .equals(producto.getMarca().getNombre())) {
      Marca marca = marcaRepository.findByNombre(productoRequest.getMarca())
          .orElseThrow(EntityNotFoundException::new);
      producto.setMarca(marca);
    }
    return new ProductoResponse(productoRepository.save(producto));
  }

  @Override
  public void eliminarProducto(Long id) {
    productoRepository.deleteById(id);
  }

  public List<ProductoResponse> actualizarProductosSumarActual(List<StockPatchRequest> requestList) {
    List<Producto> productoList = this.productoRepository.findAllById(requestList.stream().map(
        StockPatchRequest::id).toList());
    Producto producto;
    Optional<Producto> opt;
    for (StockPatchRequest r : requestList) {
      opt = productoList.stream().filter(p -> p.getId().equals(r.id())).findFirst();
      if (opt.isPresent()) {
        producto = opt.get();
        producto.setActual(Math.min(producto.getActual() + r.actual(), producto.getMax()));
      }
    }
    return this.productoRepository.saveAll(productoList).stream().map(ProductoResponse::new).toList();
  }

  public List<ProductoResponse> actualizarProductosRestarActual(List<StockPatchRequest> requestList) {
    List<Producto> productoList = this.productoRepository.findAllById(requestList.stream().map(
        StockPatchRequest::id).toList());
    Producto producto;
    Optional<Producto> opt;
    for (StockPatchRequest r : requestList) {
      opt = productoList.stream().filter(p -> p.getId().equals(r.id())).findFirst();
      if (opt.isPresent()) {
        producto = opt.get();
        producto.setActual(Math.max(producto.getActual() - r.actual(), 0));
      }
    }
    return this.productoRepository.saveAll(productoList).stream().map(ProductoResponse::new).toList();
  }


}
