package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.ProveedorRequest;
import com.c14g22.stockwise.dto.ProveedorResponse;
import com.c14g22.stockwise.exception.duplicatekey.EmailDuplicateException;
import com.c14g22.stockwise.exception.notfound.ProveedorNotFoundException;
import com.c14g22.stockwise.model.Proveedor;
import com.c14g22.stockwise.repository.ProveedorRepository;
import com.c14g22.stockwise.service.ProveedorService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
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
