import { Component, Input } from '@angular/core';
import { creaEmpleados } from '../Empleados/Empleados.CREAR.component';

@Component({
  selector: 'Hijo',
  templateUrl: './ComponenteHijo.Template.html',
  styleUrls: ['./ComponenteHijo.Style.css'],
})
export class ComponentHijo {
  @Input() items: creaEmpleados;
}
