import { NgModule, ɵɵInputTransformsFeature } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentePrincipal } from './Empleados/Empleados.component';
import { ComponentHijo } from './ComponentHijo/ComponentHijo.componente';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComponentePrincipal, ComponentHijo],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [ComponentePrincipal, ComponentHijo],
})
export class Modulo1 {}
