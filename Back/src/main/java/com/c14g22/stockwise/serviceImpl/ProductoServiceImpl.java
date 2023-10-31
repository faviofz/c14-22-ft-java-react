package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.ProductoRequest;
import com.c14g22.stockwise.dto.ProductoResponse;
import com.c14g22.stockwise.dto.StockPatchRequest;
import com.c14g22.stockwise.exception.ProductoNotFoundException;
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
    if (req.getNombre() == null) {
      throw new NullPointerException("El nombre no puede ser null");
    }
    Producto producto = new Producto(req);
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
    if (productoRequest.getNombre() == null) {
      throw new NullPointerException("El nombre no puede ser null");
    }
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

  public void actualizarProductosSumarActual(List<StockPatchRequest> requestList) {
    List<Producto> productoList = this.productoRepository.findAllById(requestList.stream().map(
        StockPatchRequest::id).toList());
    for (StockPatchRequest r : requestList) {
      productoList.stream().filter(p -> p.getId().equals(r.id())).findFirst()
          .ifPresent(p -> p.setActual(p.getActual() + r.actual()));
    }
    this.productoRepository.saveAll(productoList);
  }

  public void actualizarProductosRestarActual(List<StockPatchRequest> requestList) {
    List<Producto> productoList = this.productoRepository.findAllById(requestList.stream().map(
        StockPatchRequest::id).toList());
    Producto producto = null;
    Optional<Producto> opt = null;
    for (StockPatchRequest r : requestList) {
      opt = productoList.stream().filter(p -> p.getId().equals(r.id())).findFirst();
      if (opt.isPresent()) {
        producto = opt.get();
        producto.setActual(Math.max(producto.getActual() - r.actual(), 0));
      }
    }
    this.productoRepository.saveAll(productoList);
  }

}
