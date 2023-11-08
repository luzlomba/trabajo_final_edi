import { Module } from '@nestjs/common';
import { EmpleadoController } from './empleados/empleados.controller'
import { EmpleadosService } from './empleados/empleados.service';

@Module({
  imports: [],
  controllers: [EmpleadoController],
  providers: [EmpleadosService],
})
export class AppModule {}