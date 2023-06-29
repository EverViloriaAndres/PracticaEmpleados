import { Component, EventEmitter, Input, Output } from '@angular/core';
import { creaEmpleados } from '../Empleados/Empleados.CREAR.component';
import { PrimerServicioService } from '../primer-servicio.service';

@Component({
  selector: 'Hijo',
  templateUrl: './ComponenteHijo.Template.html',
  styleUrls: ['./ComponenteHijo.Style.css'],
})
export class ComponentHijo {
  @Input() items: creaEmpleados;
  @Output() EventoEmisor = new EventEmitter<string>();
  private eviado: string = 'ESTO SE LO ENVIO A MI PADRE';

  constructor(protected primerServicio: PrimerServicioService) {}

  enviaAlPadre() {
    this.primerServicio.metodoDelServicio(
      'Este mensaje es el de el componente ComponentHijo, es decoir, es el segundo componente que usa el mismo servicio: : :::Mensaje: : ' +
        this.eviado
    );
    this.EventoEmisor.emit(this.eviado);
  }
}
