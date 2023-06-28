import { Component, EventEmitter, Input, Output } from '@angular/core';
import { creaEmpleados } from '../Empleados/Empleados.CREAR.component';

@Component({
  selector: 'Hijo',
  templateUrl: './ComponenteHijo.Template.html',
  styleUrls: ['./ComponenteHijo.Style.css'],
})
export class ComponentHijo {
  @Input() items: creaEmpleados;
  @Output() EventoEmisor = new EventEmitter<string>();
  private eviado: string = 'ESTO SE LO ENVIO A MI PADRE';

  enviaAlPadre() {
    this.EventoEmisor.emit(this.eviado);
  }
}
