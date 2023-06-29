import { NgModule, ɵɵInputTransformsFeature } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentePrincipal } from './Empleados/Empleados.component';
import { ComponentHijo } from './ComponentHijo/ComponentHijo.componente';
import { FormsModule } from '@angular/forms';
import { PrimerServicioService } from './primer-servicio.service';

@NgModule({
  declarations: [ComponentePrincipal, ComponentHijo],
  imports: [BrowserModule, FormsModule],
  providers: [PrimerServicioService],
  bootstrap: [ComponentePrincipal, ComponentHijo],
})
export class Modulo1 {}
