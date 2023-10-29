package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.EmpleadoRequest;
import com.c14g22.stockwise.dto.EmpleadoResponse;
import com.c14g22.stockwise.dto.EntradaDto;
import com.c14g22.stockwise.model.Empleado;
import com.c14g22.stockwise.model.Entrada;
import java.util.List;
import java.util.UUID;

public interface EmpleadoService {

  List<EmpleadoResponse> obtenerEmpleados();

  EmpleadoResponse obtenerEmpleadoPorId(UUID id);

  EmpleadoResponse guardarEmpleado(EmpleadoRequest empleadoRequest);

  void actualizarEmpleado(UUID id, EmpleadoRequest EmpleadoRequest);

  void eliminarEmpleado(UUID id);
}
