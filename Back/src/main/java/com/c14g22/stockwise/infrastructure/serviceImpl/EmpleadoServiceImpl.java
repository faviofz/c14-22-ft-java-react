package com.c14g22.stockwise.infrastructure.serviceImpl;

import com.c14g22.stockwise.application.request.EmpleadoRequest;
import com.c14g22.stockwise.application.response.EmpleadoResponse;
import com.c14g22.stockwise.domain.model.Empleado;
import com.c14g22.stockwise.domain.repository.EmpleadoRepository;
import com.c14g22.stockwise.domain.service.EmpleadoService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpleadoServiceImpl implements EmpleadoService {

  @Autowired
  private EmpleadoRepository empleadoRepository;

  @Override
  public List<EmpleadoResponse> obtenerEmpleados() {
    return null;
  }

  @Override
  public EmpleadoResponse obtenerEmpleadoPorId(UUID id) {
    Empleado empleado = empleadoRepository.findByIdAndDeletedFalse(id).orElseThrow(
        EntityNotFoundException::new);
    return new EmpleadoResponse(empleado);
  }

  @Override
  public EmpleadoResponse guardarEmpleado(EmpleadoRequest empleadoRequest) {
    Empleado empleado = new Empleado(empleadoRequest);
    return new EmpleadoResponse(empleadoRepository.save(empleado));
  }

  @Override
  public EmpleadoResponse actualizarEmpleado(UUID id, EmpleadoRequest empleadoRequest) {
    Empleado empleado = empleadoRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    empleado.setNombre(empleadoRequest.getNombre());
    empleado.setApellido(empleadoRequest.getApellido());
    empleado.setPhoto_url(empleadoRequest.getPhoto_url());
    return new EmpleadoResponse(empleadoRepository.save(empleado));
  }

  @Override
  public void eliminarEmpleado(UUID id) {
    empleadoRepository.updateDeletedById(id);
  }
}
