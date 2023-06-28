import { Component } from '@angular/core';
import { creaEmpleados } from './Empleados.CREAR.component';

@Component({
  selector: 'ComponentePrincipal',
  templateUrl: './Empleados.component.html',
  styleUrls: ['./Empleados.component.css'],
})
export class ComponentePrincipal {
  protected nombre: string = '';
  protected apellido: string = '';
  protected cargo: string = '';
  protected sueldo: number = 0;
  protected numEmpleados: number = 4;

  protected Empleados: creaEmpleados[] = [
    new creaEmpleados('Prueba', 'Prueba', 'Prueba', 5758250),
    new creaEmpleados('Ever', 'Viloria', 'Presidente', 5758250),
    new creaEmpleados('Erick', 'Viloria', 'Gerente', 5758250),
    new creaEmpleados('Jesus', 'Viloria', 'Super Visor', 5758250),
    new creaEmpleados('Juan', 'Hernandez', 'Administrador', 5758250),
  ];

  agregaEmpleado(): void {
    if (
      this.nombre.length > 0 &&
      this.apellido.length > 0 &&
      this.cargo.length > 0
    ) {
      this.Empleados.push(
        new creaEmpleados(this.nombre, this.apellido, this.cargo, this.sueldo)
      );
      this.numEmpleados += 1;
      this.nombre = '';
      this.apellido = '';
      this.cargo = '';
      this.sueldo = 0;
    } else {
      alert('Complete lo datos');
    }
  }
}
