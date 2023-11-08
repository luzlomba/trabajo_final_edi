import { Injectable } from '@nestjs/common';
import { Empleado } from './empleadosModel';


@Injectable()
export class EmpleadosService {
  private empleados: Empleado[] = [];

  obtenerTodosLosEmpleados(): Empleado[] {
    return this.empleados;
  }

  obtenerEmpleadoPorId(id: number): Empleado {
    return this.empleados.find((empleado) => empleado.id == id); // el doble igual compara valor solo. el parametro que viene de la API del get es un string '1' por eso el triple igual no sierve para matchear en este caso. 
  }

  
agregarEmpleado(empleado: Empleado): Empleado {
    empleado.id = this.empleados.length + 1;
    this.empleados.push(empleado);
    return empleado;
  }

  modificarSalario(id: number, nuevoSalario: number): Empleado {
    const empleado = this.obtenerEmpleadoPorId(id);
    if (empleado) {
      empleado.salario = +nuevoSalario;
    }
    return empleado;
  }

  eliminarEmpleado(id: number): Empleado {
    const index = this.empleados.findIndex((empleado) => empleado.id == id);
    if (index !== -1) {
      const empleadoEliminado = this.empleados[index];
      this.empleados.splice(index, 1);
      return empleadoEliminado;
    }
  }
}