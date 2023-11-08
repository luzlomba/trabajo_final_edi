export class Empleado {
    id: number;
    nombre: string;
    telefono: string;
    salario: number;
  
    constructor(id: number, nombre: string, telefono: string, salario: number) {
      this.id = id;
      this.nombre = nombre;
      this.telefono = telefono;
      this.salario = salario;
    }
  }