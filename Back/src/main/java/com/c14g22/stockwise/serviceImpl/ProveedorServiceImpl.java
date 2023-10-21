package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.ProveedorDto;
import com.c14g22.stockwise.model.Proveedor;
import com.c14g22.stockwise.repository.ProveedorRepository;
import com.c14g22.stockwise.service.ProveedorService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProveedorServiceImpl implements ProveedorService {

    @Autowired
    private ProveedorRepository proveedorRepository;

    @Override
    public List<Proveedor> obtenerProveedores() {
        return proveedorRepository.findAll();
    }

    @Override
    public Proveedor obtenerProveedorPorId(Long id) {
        return proveedorRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public ProveedorDto guardarProveedor(ProveedorDto proveedorDto) {
        Proveedor proveedor = new Proveedor(proveedorDto);
        return new ProveedorDto(proveedorRepository.save(proveedor));
    }

    @Override
    public void actualizarProveedor(Long id, ProveedorDto proveedorDto) {
        Proveedor proveedor = new Proveedor(proveedorDto);
        proveedorRepository.save(proveedor);
    }

    @Override
    public void eliminarProveedor(Long id) {
        proveedorRepository.deleteById(id);
    }
}
