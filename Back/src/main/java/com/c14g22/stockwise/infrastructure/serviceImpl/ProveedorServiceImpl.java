package com.c14g22.stockwise.infrastructure.serviceImpl;

import com.c14g22.stockwise.application.request.ProveedorRequest;
import com.c14g22.stockwise.application.response.ProveedorResponse;
import com.c14g22.stockwise.domain.exception.duplicatekey.EmailDuplicateException;
import com.c14g22.stockwise.domain.exception.notfound.ProveedorNotFoundException;
import com.c14g22.stockwise.domain.model.Proveedor;
import com.c14g22.stockwise.domain.repository.ProveedorRepository;
import com.c14g22.stockwise.domain.service.ProveedorService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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
        try {
            Proveedor proveedor1 = proveedorRepository.save(proveedor);
            return new ProveedorResponse(proveedor1);

        }catch (DataIntegrityViolationException ex){
            throw new EmailDuplicateException(proveedor.getEmail());
        }
    }

    @Override
    public ProveedorResponse actualizarProveedor(Long id, ProveedorRequest proveedorRequest) {
        Proveedor proveedor = this.proveedorRepository.findById(id).orElseThrow(() -> new ProveedorNotFoundException(id));
        proveedor.setNombre(proveedorRequest.getNombre());
        proveedor.setEmail(proveedorRequest.getEmail());
        proveedor.setEmpresa(proveedorRequest.getEmpresa());
        proveedor.setTelefono(proveedorRequest.getTelefono());
        return new ProveedorResponse(this.proveedorRepository.save(proveedor));
    }

    @Override
    public void eliminarProveedor(Long id) {
        this.proveedorRepository.deleteById(id);
    }
}
