package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.ProveedorDto;
import com.c14g22.stockwise.dto.ProveedorRequest;
import com.c14g22.stockwise.dto.ProveedorResponse;
import com.c14g22.stockwise.exception.ProveedorNotFoundException;
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
    public List<ProveedorResponse> obtenerProveedores() {
        List<Proveedor> proveedorList = this.proveedorRepository.findAll();
        return proveedorList.stream().map(ProveedorResponse::new).toList();
    }

    @Override
    public ProveedorResponse obtenerProveedorPorId(Long id) {
        Proveedor proveedor = this.proveedorRepository.findById(id).orElseThrow(() -> new ProveedorNotFoundException(id));
        return new ProveedorResponse(proveedor);
    }


    @Override
    public ProveedorResponse obtenerProveedorPorEmail(String email) {
        Proveedor proveedor = this.proveedorRepository.findByEmail(email).orElseThrow(EntityNotFoundException::new);
        return new ProveedorResponse(proveedor);
    }


    @Override
    public ProveedorResponse guardarProveedor(ProveedorRequest proveedorRequest) {
        Proveedor proveedor = new Proveedor(proveedorRequest);
        return new ProveedorResponse(proveedorRepository.save(proveedor));
    }

    @Override
    public void actualizarProveedor(Long id, ProveedorRequest proveedorRequest) {
        Proveedor proveedor = this.proveedorRepository.findById(id).orElseThrow(() -> new ProveedorNotFoundException(id));
        proveedor.setNombre(proveedorRequest.getNombre());
        proveedor.setEmail(proveedorRequest.getEmail());
        proveedor.setEmpresa(proveedorRequest.getEmpresa());
        proveedor.setTelefono(proveedorRequest.getTelefono());
        proveedorRepository.save(proveedor);
    }

    @Override
    public void eliminarProveedor(Long id) {
        this.proveedorRepository.deleteById(id);
    }
}
