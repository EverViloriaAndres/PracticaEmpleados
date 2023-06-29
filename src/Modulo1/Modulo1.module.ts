import { NgModule, ɵɵInputTransformsFeature } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentePrincipal } from './Empleados/Empleados.component';
import { ComponentHijo } from './ComponentHijo/ComponentHijo.componente';
import { FormsModule } from '@angular/forms';
import { PrimerServicioService } from './primer-servicio.service';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    ComponentePrincipal,
    ComponentHijo,
    ContactoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [PrimerServicioService],
  bootstrap: [ComponentePrincipal, ComponentHijo],
})
export class Modulo1 {}
