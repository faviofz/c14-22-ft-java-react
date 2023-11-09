package com.c14g22.stockwise.domain.service;

import com.c14g22.stockwise.application.request.EmpleadoRequest;
import com.c14g22.stockwise.application.response.EmpleadoResponse;
import java.util.List;
import java.util.UUID;

public interface EmpleadoService {

  List<EmpleadoResponse> obtenerEmpleados();

  EmpleadoResponse obtenerEmpleadoPorId(UUID id);

  EmpleadoResponse guardarEmpleado(EmpleadoRequest empleadoRequest);

  EmpleadoResponse actualizarEmpleado(UUID id, EmpleadoRequest EmpleadoRequest);

  void eliminarEmpleado(UUID id);
}
