import { NgModule, ɵɵInputTransformsFeature } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentePrincipal } from './Empleados/Empleados.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComponentePrincipal],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [ComponentePrincipal],
})
export class Modulo1 {}
