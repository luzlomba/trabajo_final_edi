import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Empleado } from './empleadosModel';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadoController {
  constructor(private servicio: EmpleadosService) {}

  @Get()
  obtenerTodosLosEmpleados(): Empleado[] {
    return this.servicio.obtenerTodosLosEmpleados();
  }

  @Get(':id')
  obtenerEmpleado(@Param('id') id: number): Empleado {
    return this.servicio.obtenerEmpleadoPorId(id);
  }

  @Post()
  agregarEmpleado(@Body() empleado: Empleado): Empleado {
    return this.servicio.agregarEmpleado(empleado);
  }

  @Put(':id/salario')
  modificarSalario(@Param('id') id: number, @Body('salario') salario: number): Empleado {
    return this.servicio.modificarSalario(id, salario);
  }

  @Delete(':id')
  eliminarEmpleado(@Param('id') id: number): Empleado {
    return this.servicio.eliminarEmpleado(id);
  }
}