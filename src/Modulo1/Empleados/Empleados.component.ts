import { Component } from '@angular/core';
import { creaEmpleados } from './Empleados.CREAR.component';
import { PrimerServicioService } from '../primer-servicio.service';

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
  envioMiHijo: string =
    ''; /*Usada para recivir el mensaje que viene con la direciva @output y el emisor de eventos*/

  constructor(
    protected primerServicio: PrimerServicioService
  ) {} /**Inyeccion del servicio */

  public setEviomiHijo(value: any): void {
    this.envioMiHijo = value;
  }

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
      this.primerServicio.metodoDelServicio('MensajeServicio: ' + this.nombre);
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
